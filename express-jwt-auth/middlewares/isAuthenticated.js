import jwt from 'jsonwebtoken';

export function isAuthenticated(req, res, next) {
  const accessToken = req.headers['authorization'];

  if(!accessToken) {
    return res.status(401).json({
      status: 401,
      data: null,
      error: "Unauthorized Access",
      message: "Token not provided"
    })    
  }

  const JWT_SECRET = "VERY_IMP_SECRET";
  jwt.verify(accessToken, JWT_SECRET, (err, decoded) => {
    if(err) {
      console.log(err.message);
      return res.status(401).json({
        status: 401,
        data: null,
        error: "Unauthorized",
        message: "Unauthorized"
      })
    }
    return next();
  })
}