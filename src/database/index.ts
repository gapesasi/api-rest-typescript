import mysql from "mysql2";
import dbConfig from "../config/db";

const conn = mysql.createConnection(dbConfig);
export default conn;
