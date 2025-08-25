const express = require('express');
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const app = express();
app.use(express.json());

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: true }
});

client.on('qr', (qr) => {
    console.log('QR RECEIVED');
    qrcode.generate(qr, { small: true }); // tampilkan QR di terminal
});

client.on('ready', () => {
    console.log('WhatsApp Client is ready!');
});

// endpoint send text
app.post('/send-text', async (req, res) => {
    try {
        const { to, message } = req.body;
        if (!to || !message) {
            return res.status(400).json({ error: 'to & message required' });
        }

        const chatId = to.includes('@c.us') ? to : `${to}@c.us`;
        await client.sendMessage(chatId, message);
        res.json({ success: true, to, message });
    } catch (err) {
        console.error('Error /send-text:', err);
        res.status(500).json({ error: err.message });
    }
});

client.initialize();

// run express api
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`[API] Listening on port ${PORT}`);
});
