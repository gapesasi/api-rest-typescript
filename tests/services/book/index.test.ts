import { describe, expect } from "@jest/globals";
import { beforeEach, it } from "node:test";
import mockBookRepository from "../../mock/book-repository-mock";
import Book from "../../../src/models/book";

describe("Book Service", () => {
  let bookService: BookService;

  beforeEach(() => {
    bookService = new bookService(mockBookRepository);
  });

  it("Should return all books", async () => {
    const books: Book[] = [
      {
        id: 1,
        author: "Author 1",
        title: "Book 1",
        summary: "First Book",
        pages: 100,
      },
      {
        id: 2,
        author: "Author 2",
        title: "Book 2",
        summary: "Second Book",
        pages: 150,
      },
    ] as Book[];
    mockBookRepository.findAll.mockResolvedValueOnce(books);

    const result = await bookService.findAll();
    expect(result).toEqual(books);
    expect(mockBookRepository.findAll).toHaveBeenCalledTimes(1);
  });

  it("Should return a book if the correct id is given", async () => {
    const book: Book = {
      id: 1,
      author: "Author 1",
      title: "Book 1",
      summary: "First Book",
      pages: 100,
    } as Book;
    mockBookRepository.findById.mockResolvedValueOnce(book);

    const result = await bookService.findById(1);
    expect(result).toEqual(book);
    expect(mockBookRepository.findById).toHaveBeenCalledTimes(1);
  });

  it("Should return null if an unknown id is given", async () => {
    mockBookRepository.findById.mockResolvedValueOnce(null);
    const result = await bookService.findById(0);
    expect(result).toEqual(null);
    expect(mockBookRepository.findById).toHaveBeenCalledTimes(1);
  });

  it("Should create a new book if the correct params are given", async () => {
    const book: Book = {
      id: 1,
      author: "Author 1",
      title: "Book 1",
      summary: "First Book",
      pages: 100,
    } as Book;
    mockBookRepository.create.mockResolvedValueOnce(book);

    const result = await bookService.create(book);
    expect(result).toEqual(book);
    expect(mockBookRepository.create).toHaveBeenCalledTimes(1);
    expect(mockBookRepository.findById).toHaveBeenCalledTimes(1);
  });

  it("Should update the book if an correct id and params are given", async () => {
    const book: Book = {
        author: "Author 1",
        title: "Book 1",
        summary: "New Summary to First book",
        pages: 100,
      } as Book;
    mockBookRepository.update.mockResolvedValueOnce(1);

    const result = await bookService.update(1, book);
    expect(result).toEqual(1);
    expect(mockBookRepository.update).toHaveBeenCalledTimes(1);
  });

  it("Should delete the book if an correct id is given", async () => {
    mockBookRepository.delete.mockResolvedValueOnce(1);

    const result = await bookService.delete(1);
    expect(result).toEqual(1);
    expect(mockBookRepository.delete).toHaveBeenCalledTimes(1);
  });
});
