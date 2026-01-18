import express from 'express';
import { hello, APINames } from './routes.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Welcome!</h1><p>Try <a href="/hello">/hello</a> or <a href="/api/names">/api/names</a></p>');
});

// /hello endpoint
app.get('/hello', hello);

// /api/names endpoint
app.get('/api/names', async (req, res) => {
    const result = await APINames();
    res.send(result);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});