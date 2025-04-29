const express = require('express');
const app = express();
const methodOverride = require('method-override'); // PUT, DELETE 요청을 위한 미들웨어

app.set('view engine', 'ejs'); // EJS 템플릿 엔진 설정
app.set('views', './views'); // views 디렉토리 설정
app.use(express.static('./public')); // 정적 파일 제공을 위한 미들웨어 추가
app.use(methodOverride('_method')); // PUT, DELETE 요청을 위한 미들웨어 추가

// MongoDB 연결 함수 호출
const dbConnect = require('./config/dbConnect'); 
dbConnect(); 

// Body-parser 미들웨어를 사용하여 요청 본문을 파싱할 수 있도록 설정
app.use(express.json()); // JSON 형식의 요청 본문을 파싱하기 위한 미들웨어 추가
app.use(express.urlencoded({ extended: true })); // URL 인코딩된 요청 본문을 파싱하기 위한 미들웨어 추가

// 원하는 경로를 지정하여 해당 경로에 대한 요청을 처리할 수 있도록 설정
app.use("/", require("./routes/loginRoutes")); 
app.use("/contacts", require("./routes/contactRoutes")); 


// 서버 시작
const PORT = process.env.PORT || 3000; // 환경 변수에서 포트를 가져오고, 없으면 3000으로 설정

app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});
