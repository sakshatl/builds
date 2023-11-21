import bcrypt  from 'bcrypt';
import jwt, { decode } from 'jsonwebtoken';

export async function generatePasswordHash(password = "") {
  try {
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (err) {
    console.log(err);
  }
}

export async function verifyPasswordHash(password = "", hash = "") {
  try {
    const match = await bcrypt.compare(password, hash);
    return match;
  } catch (err) {
    console.log(err);
  }
}

export function generateUserID() {
  const randomNumber = Math.random(); // Generate a random number
  const userId = `user_${randomNumber.toString(36).substring(2, 10)}`; // Convert to base36 string
  return userId;
}

export function generateJWT(payload = {}) {
  const JWT_SECRET = "VERY_IMP_SECRET";
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
  return token;
}

export function verifyJWT(token = "") {
  const JWT_SECRET = "VERY_IMP_SECRET";
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if(err) {
      console.log(err);
      return undefined;
    }

    console.log('Decoded:', decoded);
    return decoded;
  });
}