const pool = require('../db/mysqldb');

async function query(sql) {
  try {
    const [results] = await pool.query(sql);
    return results;
  } catch (error) {
    throw new Error('Database access error')
  }
}

module.exports = { query }