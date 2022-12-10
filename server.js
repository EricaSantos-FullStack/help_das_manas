const { Client } = require("pg");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const client = new Client({
  password: "root",
  user: "root",
  host: "postgres",
});

app.use(express.static("public"));

app.get("/list", async (req, res) => {
  const results = await client
    .query("SELECT * FROM person")
    .then((payload) => {
      return payload.rows;
    })
    .catch(() => {
      throw new Error("Query failed");
    });
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.send(JSON.stringify(results));
});

app.patch("/list", async (req, res) => {
  const data = req.body;

  const results = await client
    .query(
      `UPDATE person
    SET
    name = ${data.name},
    career   = ${data.career},
    description = ${data.description},
    linkedin = ${data.linkedin},
    github = ${data.github},
    need_help = ${data.need_help},
    could_help = ${data.could_help}
    WHERE id = ${data.id}`
    )
    .then((payload) => {
      return payload.rows;
    })
    .catch(() => {
      return "error";
    });

  if (results == "error") {
    res.status(500).send({ message: "Erro na alteração de dados" });
  } else {
    res.status(202).send({
      message: "Dados alterados com sucesso",
    });
  }
});

(async () => {
  await client.connect();

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
})();

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Win");
  }, 300);
  reject("oops! Problem with server");
});

myPromise.then(() => {
  console.log("hello");
});
