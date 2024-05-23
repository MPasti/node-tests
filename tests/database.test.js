import * as nodeFiles from "fs/promises";
import * as database from "../src/database";

jest.mock("fs/promises");

describe("Testing all functions from src/database.js", () => {
  describe("Testing function moveData", () => {
    test("", async () => {
      nodeFiles.readFile.mockResolvedValue(JSON.stringify([]));

      const resposta = await database.moveData(
        "clients.json",
        "backupUsuarios.json"
      );

      expect(resposta).toBeTruthy();
      expect(nodeFiles.writeFile.mock.calls[0]).toEqual([
        "database/backupUsuarios.json",
        "[]",
      ]);
      expect(nodeFiles.writeFile.mock.calls[1]).toEqual([
        "database/clients.json",
        "[]",
      ]);
    });

    test("", async () => {
      nodeFiles.readFile.mockRejectedValue(new Error("error test"));

      const resposta = await database.moveData(
        "clients.json",
        "backupUsuarios.json"
      );

      expect(resposta).toBeFalsy();
      expect(nodeFiles.writeFile).not.toHaveBeenCalled();
    });
  });
});
