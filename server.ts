// basic HTTP server for development
// use nginx or similar in production for mega speed
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

dotenv.config();

const app = express();
app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

const listener = app.listen(process.env.PORT, () => {
  console.log('Listening at http://localhost:' + process.env.PORT);
});
