exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://localhost/heroku_kfn679dp';
exports.PORT = process.env.PORT || 8080;