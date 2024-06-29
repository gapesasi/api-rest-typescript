import express from "express";
import { createServer, Server as HttpServer } from "http";

export default class Server {
  public app: express.Application;
  public server: HttpServer;

  constructor() {
    this.app = express();
    this.server = createServer(this.app);
    this.setupRoutes();
  }

  private setupRoutes() {
    this.app.get("/", (req, res) => {
        res.status(200).json({
            message: "OK"
        })
    });
  }

  public start(port: number) {
    this.server.listen(port, () => {
      console.log(`🚀 App is running on port ${port}`);
    });
  }
}
