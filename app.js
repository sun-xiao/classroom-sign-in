// server/app.js

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());

app.use(cors());

const users = {
    'admin': 'password123' 
  };

app.post('/api/login', (req, res) => {
  const { netId, password } = req.body;
  if (users[netId] && users[netId] === password) {
    res.json({ success: true, message: "Login Successful" });
  } else {
    res.status(401).json({ success: false, message: "404 NOT Found" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
