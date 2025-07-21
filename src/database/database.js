import fs from "node:fs/promises";

const DATABASE_PATH = new URL("db.json", import.meta.url);

export class Database {
  #database = {};

  constructor() {
    fs.readFile(DATABASE_PATH, "utf8")
      .then((data) => {
        this.#database = JSON.parse(data);
      })
      .catch(() => {
        this.#persist();
      });
  }

  #persist() {
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database));
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      console.log("Já tem a Tabela");

      this.#database[table].push(data);
    } else {
      console.log("Não tem a tabela");

      this.#database[table] = [data];
    }

    this.#persist();
  }

  select(table) {
    let data = this.#database[table] ?? [];
    return data;
  }
}
