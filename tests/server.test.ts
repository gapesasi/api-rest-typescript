import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import Server from "../src/server";

describe("Server", () => {
  it("should respond to the health check endpoint'", async () => {
    const server = new Server();
    const res = await request(server.app).get("/test");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "OK" });
  });
});
