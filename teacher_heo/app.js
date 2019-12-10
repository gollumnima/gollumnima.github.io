const express = require('express');

const app = express();
// class 인데 한번 더 묶어서 클래스처럼 안 보이는 애

console.log('4');
app.get('/foo', (req, res, next) => {
  res.send('배고파');

//   res.status(401).json({ 둘둘쓰: '배곱' });
});

app.get('/user', (req, res, next) => {
  const page = req.query;
  console.log(req.query);
  res.status(200).json({ name: '유저 목록' });
});


app.get('/user/:id', (req, res, next) => {
  const id = req.params;
  console.log(id);
  res.status(200).json({
    name: '허선생님',
    id
  }); // id: id 객체 값과 프로퍼티가 동일하면 지워짐.
});

module.exports = app;
// server.js에 있는 app require를 실행하기 위해서 요 위의 코드를 다 읽는데
// 그래서 4가 먼저 찍힘
