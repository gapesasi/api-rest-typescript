import {
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  jest,
} from "@jest/globals";
import Book from "../../../src/models/book";
import BookService from "../../../src/services/book";
import NotFoundError from "../../../src/utils/error/not-found-error";
import mockBookRepository from "../../mock/book-repository-mock";

describe("Book Service", () => {
  let bookService: BookService;
  let books: Book[];

  beforeAll(() => {
    books = [
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
  });

  beforeEach(() => {
    bookService = new BookService(mockBookRepository);
    jest.clearAllMocks();
  });

  it("findAll - Should return all books", async () => {
    mockBookRepository.findAll.mockResolvedValueOnce(books);

    const result = await bookService.findAll();
    expect(result).toEqual(books);
    expect(mockBookRepository.findAll).toHaveBeenCalledTimes(1);
  });

  it("findById - Should return a book if the correct id is given", async () => {
    mockBookRepository.findById.mockResolvedValueOnce(books[0]);

    const result = await bookService.findById(1);
    expect(result).toEqual(books[0]);
    expect(mockBookRepository.findById).toHaveBeenCalledWith(1);
    expect(mockBookRepository.findById).toHaveBeenCalledTimes(1);
  });

  it("findById - Should throw a NotFoundError unknown id is given", async () => {
    mockBookRepository.findById.mockRejectedValueOnce(
      new NotFoundError("Book not found")
    );
    await expect(bookService.findById(0)).rejects.toThrow(NotFoundError);
    expect(mockBookRepository.findById).toHaveBeenCalledWith(0);
  });

  it("create - Should create a new book if the correct params are given", async () => {
    mockBookRepository.create.mockResolvedValueOnce(books[0]);

    const result = await bookService.create(books[0]);
    expect(result).toEqual(books[0]);
    expect(mockBookRepository.create).toHaveBeenCalledWith(books[0]);
    expect(mockBookRepository.create).toHaveBeenCalledTimes(1);
  });

  it("update - Should update the book if an correct id and params are given", async () => {
    mockBookRepository.update.mockResolvedValueOnce(1);
    const result = await bookService.update(books[0]);
    expect(result).toEqual(1);
    expect(mockBookRepository.update).toHaveBeenCalledWith(books[0]);
    expect(mockBookRepository.update).toHaveBeenCalledTimes(1);
  });

  it("update - Should throw a NotFoundError unknown id is given", async () => {
    mockBookRepository.update.mockRejectedValueOnce(
      new NotFoundError("Book not found")
    );
    await expect(bookService.update(books[0])).rejects.toThrow(NotFoundError);
    expect(mockBookRepository.update).toHaveBeenCalledWith(books[0]);
    expect(mockBookRepository.update).toHaveBeenCalledTimes(1);
  });

  it("delete - Should delete the book if an correct id is given", async () => {
    mockBookRepository.delete.mockResolvedValueOnce(1);

    const result = await bookService.delete(1);
    expect(result).toEqual(1);
    expect(mockBookRepository.delete).toHaveBeenCalledWith(1);
    expect(mockBookRepository.delete).toHaveBeenCalledTimes(1);
  });

  it("delete - Should throw a NotFoundError unknown id is given", async () => {
    mockBookRepository.delete.mockRejectedValueOnce(
      new NotFoundError("Book not found")
    );
    await expect(bookService.delete(0)).rejects.toThrow(NotFoundError);
    expect(mockBookRepository.delete).toHaveBeenCalledWith(0);
    expect(mockBookRepository.delete).toHaveBeenCalledTimes(1);
  });
});
