const express = require('express');
const app = express();

const dbConnect = require('./config/dbConnect'); 
dbConnect(); // MongoDB 연결 함수 호출

app.get('/', (req, res) => {
  res.send('Hello, Node Express!');
});

// Body-parser 미들웨어를 사용하여 요청 본문을 파싱할 수 있도록 설정
app.use(express.json()); // JSON 형식의 요청 본문을 파싱하기 위한 미들웨어 추가
app.use(express.urlencoded({ extended: true })); // URL 인코딩된 요청 본문을 파싱하기 위한 미들웨어 추가

// 원하는 경로를 지정하여 해당 경로에 대한 요청을 처리할 수 있도록 설정
app.use("/contacts", require("./routes/contactRoutes")); 


// 서버 시작
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
