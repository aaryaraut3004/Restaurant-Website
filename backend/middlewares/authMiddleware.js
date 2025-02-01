const jwt = require('jsonwebtoken');

// Middleware to protect routes
const protectRoute = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract token from header

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Verify token with secret key
        req.user = decoded.user;  // Add user info to the request object
        next();  // Continue to the next handler
    } catch (err) {
        return res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = protectRoute;