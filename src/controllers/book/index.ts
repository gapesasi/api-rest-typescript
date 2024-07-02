import Book from "../../models/book";
import BookService from "../../services/book";
import handleError from "../../utils/error/error-handler";
import { HttpStatusCode } from "../protocols";
import { Request, Response } from "express";

export class BookController {
  private bookService: BookService;

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  async getAll(req: Request, res: Response) {
    try {
      const books = await this.bookService.findAll();
      res.status(HttpStatusCode.OK).json(books);
    } catch (error) {
      handleError(error, res);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)
      const book = await this.bookService.findById(id);
      res.status(HttpStatusCode.OK).json(book);
    } catch (error) {
      handleError(error, res);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const book = await this.bookService.create(req.body);
      res.status(HttpStatusCode.CREATED).json(book);
    } catch (error) {
      handleError(error, res);
    }
  }

  async update(req: Request, res: Response) {
    try {
      let params: Book = req.body;
      params.id = Number(req.params.id);
      await this.bookService.update(params);
      res.status(HttpStatusCode.OK).json();
    } catch (error) {
      handleError(error, res);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await this.bookService.delete(id);
      res.status(HttpStatusCode.OK).json();
    } catch (error) {
      handleError(error, res);
    }
  }
}
