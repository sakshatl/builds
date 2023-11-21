import { USER_COLLECTION } from "../db.js";
import { generateJWT, generatePasswordHash, generateUserID, verifyPasswordHash } from "../utils/index.js";

export function signupGET(req, res) {
  // Extract the email and password
  const { email, password } = req.body;
  console.log(email, password);
} 

export async function signupPOST(req, res) {
  // 1. Extract the email and password
  const { email, password } = req.body;
  
  // 2. Check if email and password is provided
  if(!email || !password) {
    return res.status(400).json({
      status: 400,
      data: null,
      error: "Bad Request", 
      message: "Email and Password is required"
    });
  }

  // 3. Check if user exists with same email
  const userExists = USER_COLLECTION.find((user) => user.email === email);
  if(userExists) {
    return res.status(409).json({
      status: 409,
      data: null,
      error: "Conflict",
      message: "User already exists with that email, please try login"
    });
  }

  // 4. Hash the password
  const hashedPassword = await generatePasswordHash(password);

  // 5. Generate a JWT
  const token = generateJWT({ email });

  // 6. Save the user to the DB
  const newUser = {
    id: generateUserID(),
    email,
    hashedPassword,
    token
  };

  USER_COLLECTION.push(newUser);


  return res.status(200).json({
    status: 200,
    data: newUser,
    error: null,
    message: "New user created successfully"
  });

} 

export async function loginPOST(req, res) {
  const { email, password } = req.body;

  if(!email || !password) {
    return res.status(400).json({
      status: 400,
      data: null,
      error: "Bad Request", 
      message: "Email and Password is required"
    });
  }

  // Check if the user exists with that email and password
  const userExists = USER_COLLECTION.find((user) => user.email === email);
  if(!userExists) {
    return res.status(404).json({
      status: 404,
      data: null,
      error: "Not Found",
      message: "No user found with that email, try signup instead"
    });
  }

  // Check is the existing user's password hash matches with the password
  const match = await verifyPasswordHash(password, userExists?.hashedPassword);
  if(!match) {
    return res.status(400).json({
      status: 400,
      data: null,
      error: "Bad Request",
      message: "Wrong Email or Password"
    })
  }

  // Generate a JWT
  const token = generateJWT({ email });

  // Save the new JWT
  userExists['token'] = token;

  return res.status(200).json({
    status: 200,
    data: userExists,
    error: null,
    message: "User logged in successfully"
  });
}
