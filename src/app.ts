import express, { Request, Response } from 'express';

const PORT = 4000;

//익스프레스 앱 생성
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});

export default app;
