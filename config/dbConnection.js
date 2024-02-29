var mysql = require('mysql');

var connMysql = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'dbreclamabrasil',
        database: 'reclamabrasil',
    });
};

module.exports = function () {
    return connMysql;
};
