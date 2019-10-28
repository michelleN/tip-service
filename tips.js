const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.argv.slice(2)[0];
const app = express();
app.use(bodyParser.json());

const tipList = [
  "An apple a day keeps the doc away",
  "Going into the unknown is how you expand what is known",
  "There is a method that works. Find it.",
  "Learn something from everyone.",
  "Learn to focus only on the present. Live in the moment.",
  "Be honest at all times.",
  "Realize that nobody cares.",
  "Don’t multitask. You'll burn out",
  "Live life like it's a marathon, not a sprint.",
  "Drink more water",
  "Roasted vegetables are your friend",
  "Emergency doughnuts are necessary sometimes but can be a slippery slope.",
];

function generateTip() {
  id = Math.floor(Math.random() * (tipList.length - 0) + 0);
  console.log(id)
  return tipList[id]
}


app.get('/tips', (req, res) => {
   console.log('Returning tip');
   tip = generateTip()
   res.send(tip);
});

console.log(`Tip service listening on port ${port}`);
app.listen(port);

