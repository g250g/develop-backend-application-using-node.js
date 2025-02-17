const express = require('express');
const _ = require('lodash');

const app = express();
const port = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// POST /lodash endpoint
app.post('/lodash', (req, res) => {
  const { numbers } = req.body;

  // Validate input
  if (!Array.isArray(numbers) || !numbers.every(num => typeof num === 'number')) {
    return res.status(400).json({ error: 'Please provide an array of numbers.' });
  }


  // Use lodash to double each number
  const doubledNumbers = _.map(numbers, num => num * 2);

  res.json({ doubledNumbers });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});