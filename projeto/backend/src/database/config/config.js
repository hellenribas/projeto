require('dotenv').config(); // Possibilita o acesso às variáveis de ambiente de dentro deste arquivo

module.exports = {
  "development": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.MYSQL_HOSTNAME,
    "dialect": "mysql"
  }
}
