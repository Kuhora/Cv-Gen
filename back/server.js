const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

let resumes = [];

app.post('/api/save', (req, res) => {
    const data = req.body;
    resumes.push(data);
    res.send({ success: true });
});

app.get('/api/resumes', (req, res) => {
    res.json(resumes);
});

app.listen(6969, () => {
    console.log('Server running on port 6969');
});