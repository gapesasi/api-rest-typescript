import { ResultSetHeader } from "mysql2";
import conn from "../../database";
import Book from "../../models/book";
import IRepository from "../params";

export default class BookRepository implements IRepository<Book> {
  async findAll(): Promise<Book[]> {
    return new Promise((resolve, reject) => {
      conn.query<Book[]>("SELECT * FROM books", (_err, rows) => {
        if (_err) reject(_err);
        else resolve(rows);
      });
    });
  }

  findById(id: number): Promise<Book> {
    return new Promise((resolve, reject) => {
      conn.query<Book[]>(
        "SELECT * FROM books WHERE id=?",
        [id],
        (_err, rows) => {
          if (_err) reject(_err);
          else resolve(rows?.[0]);
        }
      );
    });
  }

  create(params: Book): Promise<Book> {
    return new Promise((resolve, reject) => {
      conn.query<ResultSetHeader>(
        "INSERT INTO books (title, author, summary, pages) VALUES (?, ?, ?, ?)",
        [params.title, params.author, params.summary, params.pages],
        (_err, res) => {
          if (_err) reject(_err);
          else
            this.findById(res.insertId)
              .then((book) => resolve(book!))
              .catch((e) => reject(e));
        }
      );
    });
  }

  update(params: Book): Promise<number> {
    return new Promise((resolve, reject) => {
      conn.query<ResultSetHeader>(
        "UPDATE books SET title=?, author=?, summary=?, pages=? WHERE id=?",
        [params.title, params.author, params.summary, params.pages, params.id],
        (_err, res) => {
          if (_err) reject(_err);
          else resolve(res.affectedRows);
        }
      );
    });
  }

  delete(id: number): Promise<number> {
    return new Promise((resolve, reject) => {
      conn.query<ResultSetHeader>(
        "DELETE FROM books WHERE id=?",
        [id],
        (_err, res) => {
          if (_err) reject(_err);
          else resolve(res.affectedRows);
        }
      );
    });
  }
}
