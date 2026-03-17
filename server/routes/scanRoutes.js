const express = require('express');
const router = express.Router();

const { runScan } = require("../services/scanService");

router.post('/scan', async (req, res) => {
    try {
        const { url } = req.body;
        if (!url) {
            return res.status(400).json({ error: 'URL is required' });
        }

        const scanResult = await runScan(url);

        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while scanning'});
    }
    console.log(req.body);
});

module.exports = router;