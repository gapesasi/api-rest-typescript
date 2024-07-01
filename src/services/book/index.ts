import Book from "../../models/book";
import IRepository from "../../repositories/params";
import NotFoundError from "../../utils/error/not-found-error";

export default class BookService {
  private bookRepo: IRepository<Book>;

  constructor(bookRepo: IRepository<Book>) {
    this.bookRepo = bookRepo;
  }

  async findAll() {
    return await this.bookRepo.findAll();
  }

  async findById(id: number) {
    const book = await this.bookRepo.findById(id);
    if (!book) {
      throw new NotFoundError("Could not find book with id given");
    }
    return book;
  }

  async create(book: Book) {
    return await this.bookRepo.create(book);
  }

  async update(book: Book) {
    const updatedRows = await this.bookRepo.update(book);
    if (updatedRows == 0) {
      throw new NotFoundError("Could not find book with id given");
    }
    return updatedRows;
  }

  async delete(id: number) {
    const updatedRows = await this.bookRepo.delete(id);
    if (updatedRows == 0) {
      throw new NotFoundError("Could not find book with id given");
    }
    return updatedRows;
  }
}
