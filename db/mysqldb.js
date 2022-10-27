require('dotenv').config()
const mysql = require('mysql2/promise');

const configdb = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DBNAME,
}

let CreateComments = `  
    create table if not exists comments(
    id int primary key auto_increment,
    name_author varchar(30)not null,
    text text not null
)`;

const pool = mysql.createPool(configdb);

const connectToMySQL = async () => {
    try {
        await pool.getConnection();
        await pool.query(CreateComments)
        console.log('MySQL database connected!');
    } catch (err) {
        console.log('MySQL database connection error!');
        process.exit(1);
    }
};
connectToMySQL();

module.exports = pool;

