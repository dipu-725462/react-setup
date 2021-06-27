import express from 'express';
import renderer from './helpers/renderer';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
  const html = renderer(req);
  res.send(html);
});

app.listen(PORT, () => {
  console.log("Listening on Port ", PORT, " ✓");
});
