const isAdmin = (req, res, next) => {
    // Check if role is not admin
    if (req.user.role !== 'admin') {
        return res.status(403).json({
            success: false,
            message: 'Access Denied! Admin rights required!'
        });
    }
    
    // IMPORTANT: Call next() so the request can proceed to the route handler
    next(); 
} 

// IMPORTANT: You must export the function
module.exports = isAdmin;