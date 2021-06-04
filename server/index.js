const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A faithful friend is a strong defense.",
					 "A pleasant surprise is waiting for you.",
					 "First think of what you want to do; then do what you have to do.",
  ];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];
  res.status(200).send(randomFortune);
  
});

app.get("/api/idea", (req, res) => {
  const ideas = ["Learn a new language!",
					 "Read a book!",
					 "Exercise!",
           "reach out to friends and family!",
           "learn a new skill!",
           "Get organized!"
  ];

  let randomIndex = Math.floor(Math.random() * ideas.length);
  let randomidea = ideas[randomIndex];
  res.status(200).send(randomidea);
  
});

app.post("/api/goals", (req, res) => {
  const greeting = `You are doing great, ${req.data.value}`
  res.status(200).send(greeting)
});

app.get("/api/wisdom", (req, res) => {
  const message = "Life is what you make of it"
  res.status(200).send(message);
  });







app.listen(4000, () => console.log("Server running on 4000"));
