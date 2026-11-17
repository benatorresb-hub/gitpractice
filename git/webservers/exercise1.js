
import express from "express";

import sqlite3 from "sqlite3";

const app = express();

const db = new sqlite3.Database("./database.sqlite3", (err) => {
  if (err) {
    console.error("Database connection error:", err.message);
  } else {
    console.log("Connected to the database!");
  }
});

app.get("/user-count", (req, res) => {
  db.get("SELECT COUNT(*) AS count FROM users", (err, row) => {
    if (err) {
      res.status(500).send("Database error");
    } else {
      res.json({ count: row.count });
    }
  });
});

const port = 3000;

/*app.get("/", (req, res) => {
  res.send("Hello from exercise 1! This is Bena :)");
});*/


app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>User Dashboard</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f2f4f8;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
          }

          .card {
            background-color: white;
            padding: 40px;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            width: 300px;
          }

          h1 {
            color: #333;
          }

          .count {
            font-size: 60px;
            font-weight: bold;
            color: #4776e6;
          }

          p {
            color: #777;
          }
        </style>
      </head>

      <body>
        <div class="card">
          <h1>User Dashboard</h1>
          <p>👩‍💻 Total registered users 🧑‍💻</p>

          <div class="count" id="userCount">Loading...</div>

          <p>Users in our database 🙌 </p>
        </div>

        <script>
          fetch("/user-count")
            .then(response => response.json())
            .then(data => {
              document.getElementById("userCount").textContent = data.count;
            })
            .catch(error => {
              document.getElementById("userCount").textContent = "Error";
              console.error(error);
            });
        </script>
      </body>
    </html>
  `);
});


app.get("/currentYear", (req, res) => {
  const year = String(new Date().getFullYear());
  res.send(year);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


app.get("/daysUntilChristmas", (req, res) => {
  const today = new Date();
  const currentYear = today.getFullYear();

  let christmas = new Date(currentYear, 11, 25);

  if (today > christmas) {
    christmas = new Date(currentYear + 1, 11, 25);
  }

  const difference = christmas - today;
  const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

  res.send(`There are ${daysLeft} days until Christmas!`);
});


app.get("/timeInPeru", (req, res) => {
  const peruTime = new Date().toLocaleTimeString("en-GB", {
    timeZone: "America/Lima"
  });

  res.send(`The current time in Peru is ${peruTime}`);
});


app.get("/winterQuote", (req, res) => {
  const quote = "In the midst of winter, I found there was, within me, an invincible summer. And that makes me happy. For it says that no matter how hard the world pushes against me, within me, there's something stronger – something better, pushing right back.";

  res.send(`
  <div style="
    max-width: 700px;
    margin: 100px auto;
    padding: 30px;
    text-align: center;
    font-family: Georgia, serif;
    font-size: 22px;
    line-height: 1.8;
  ">
    <p>${quote}</p>
    <p>— Albert Camus</p>
  </div>
`);
});
