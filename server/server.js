const express = require('express');
const cors = require('cors');

const scanRoutes = require('./routes/scanRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", scanRoutes);

const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Welcome to the SecureSCope Server!');
});

app.listen(PORT, () => {
    console.log(`SecureSCope Server is running on port: http://localhost:${PORT}`);
});
