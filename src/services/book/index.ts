import Book from "../../models/book";
import IRepository from "../../repositories/params";

export default class BookService {
  private bookRepo: IRepository<Book>;

  constructor(bookRepo: IRepository<Book>) {
    this.bookRepo = bookRepo;
  }

  async findAll() {
    try {
      return await this.bookRepo.findAll();
    } catch (error) {
      throw error;
    }
  }

  async findById(id: number) {
    try {
      return await this.bookRepo.findById(id);
    } catch (error) {
      throw error;
    }
  }

  async create(book: Book) {
    try {
      return await this.bookRepo.create(book);
    } catch (error) {
      throw error;
    }
  }

  async update(book: Book) {
    try {
      return await this.bookRepo.update(book);
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number) {
    try {
      return await this.bookRepo.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
