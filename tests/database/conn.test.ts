import { afterAll, describe, expect, it } from "@jest/globals";
import conn from "../../src/database";

describe("Database Connection Test", () => {
  it("should connect to the database without errors", (done) => {
    conn.connect((err) => {
      expect(err).toBeNull();
      done();
    });
  });
});

afterAll(() => {
  conn.end();
});
