import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import request from "supertest";
import Server from "../src/server";

describe("Server Integration Tests", () => {
  let server: Server;

  beforeAll(() => {
    server = new Server();
  });

  afterAll(() => {
    server.close();
  });

  it("should respond to the health check endpoint'", async () => {
    const res = await request(server.app).get("/test");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "OK" });
  });

  it("should return the swagger documentation", async () => {
    const res = await request(server.app).get("/docs").redirects(1);
    expect(res.status).toBe(200);
    expect(res.text).toContain('<title>Swagger UI</title>');
    expect(res.text).toContain('swagger-ui');
  });
});
