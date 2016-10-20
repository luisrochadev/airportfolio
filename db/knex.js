var env = 'production';
var config = require("../knexfile")[env];
module.exports = require("knex")(config);