import express from "express";
import { createServer, Server as HttpServer } from "http";
import { router as booksRouter } from "./routes";
import * as swaggerDocument from "./swagger.json";
import swaggerUi from "swagger-ui-express";

export default class Server {
  public app: express.Application;
  public server: HttpServer;

  constructor() {
    this.app = express();
    this.server = createServer(this.app);
    this.setupMiddlewares();
    this.setupRoutes();
  }

  private setupMiddlewares() {
    this.app.use(express.json());
  }

  private setupRoutes() {
    this.app.get("/test", (req, res) => {
      res.status(200).json({
        message: "OK",
      });
    });

    this.app.use("/books", booksRouter);

    this.app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }

  public start(port: number) {
    this.server.listen(port, () => {
      console.log(`🚀 App is running on port ${port}`);
    });
  }

  public close() {
    this.server.close();
  }
}
