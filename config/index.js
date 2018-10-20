module.exports = {
    secret: process.env.JWT_SECRET || 'jwt_secret',
    port: process.env.PORT || 3000,
    mongo_url: process.env.MONGO_URL || 'mongodb://mongo-user:mongo-user123@ds237363.mlab.com:37363/mongo-demo'
};