import { jest } from "@jest/globals";
import IRepository from "../../src/repositories/params";
import Book from "../../src/models/book";

const mockBookRepository: jest.Mocked<IRepository<Book>> = {
  findAll: jest.fn(),
  findById: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

export default mockBookRepository;