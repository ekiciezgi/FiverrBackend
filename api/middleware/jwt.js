export const verifyToken = (req, res, next) => {

    const token = req.cookies.accessToken;
    if (!token) return next(createError(401, "You arenot auth!"));


    jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
        if (err) return next(createError(403, "Token isnt valid!"));
        req.userId = payload.id;
        req.isSeller = payload.isSeller;

    });


}