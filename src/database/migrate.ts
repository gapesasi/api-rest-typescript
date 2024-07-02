import mysql, { Connection } from "mysql2";
import dbConfig from "../config/db";

const createTable = async (conn: Connection) => {
  const query = `
    CREATE TABLE IF NOT EXISTS books (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(200),
      author VARCHAR(200),
      summary VARCHAR(500),
      pages INT
    )`;

  return new Promise((resolve, reject) => {
    conn.query(query, (_err, res) => {
      if (_err) reject(_err);
      else resolve(res);
    });
  });
};

async function migrate() {
  const conn = mysql.createConnection(dbConfig);

  try {
    await createTable(conn);
    console.log("Succesfful migration - DB tables OK");
  } catch (error) {
    console.error(`Migration failed:\n${error}`);
  } finally {
    conn.end();
  }
}

migrate();
