import express from "express";
import { BookController } from "./controllers/book";
import BookRepository from "./repositories/book";
import BookService from "./services/book";

export const router = express.Router();

const repo = new BookRepository();
const service = new BookService(repo);
const controller = new BookController(service);

router.get("/", controller.getAll.bind(controller));
router.get("/:id", controller.getById.bind(controller));
router.post("/", controller.create.bind(controller));
router.put("/:id", controller.update.bind(controller));
router.delete("/:id", controller.delete.bind(controller));
