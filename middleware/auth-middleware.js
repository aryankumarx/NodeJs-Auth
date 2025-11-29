const jwt = require('jsonwebtoken');
// auth middleware: jab bhi user koi req bhejega then it will verify every time
const authMiddleware = (req, res, next) => {
  try {
    // Get token
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided."
      });
    }

    const token = authHeader.split(" ")[1]; // Bearer TOKEN
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Invalid token format."
      });
    }

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // attach user data
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token."
    });
  }
};

module.exports = authMiddleware;
