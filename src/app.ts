//  res.sned() : 문자열을 보내는 메서드 -> 내부적으로 호출이 한번 더 일어남
//  res.json() : json을 보내는 메서드 -> send보다 호출이 한번 적음
//  객체를 보낼 때는 json을 사용하는 것이 직관적
//  res.json이나 res.send는 알아서 종료됨 end()를 따로 호출할 필요 없음

import express, { Request, Response } from 'express';
//  익스프레스 앱 생성
const app = express();
//  유저생성시 언디파인드가 뜨는데 이유는 바디파서가 없어서
//  이처리를 해줘야함
app.use(express.json());

const PORT = 4000;
const Users = [
  {
    id: 1,
    name: '김민준',
  },
  {
    id: 2,
    name: '김유진',
  },
  {
    id: 3,
    name: '김재호',
  },
];

// 미들웨어 등록
// 로그를 남기는 미들웨어
app.use((req: Request, res: Response, next) => {
  const start = Date.now();
  console.log(`[serverMiddleware]: ${req.method} ${req.url}`);
  next();
  const diffTime = Date.now() - start;
  // 요청부터 응답까지의 시간을 측정
  console.log(`[start-end]: ${req.method} ${req.url} ${diffTime}ms`);
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

//유저 목록 조회 API
app.get('/users', (req: Request, res: Response) => {
  res.json(Users);
});

//유저 상세 조회 API
app.get('/users/:userId', (req: Request, res: Response) => {
  // 숫자로변환하기
  const userId = Number(req.params.userId);
  const user = Users[userId];
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
});

// 유저 생성 API
app.post('/users', (req: Request, res: Response) => {
  if (!req.body.name) {
    res.status(400).send('name이 없습니다.');
    return;
  }
  const newUser = {
    id: Date.now(),
    name: req.body.name,
  };
  Users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});

export default app;
