const mongoose = require('mongoose'); // MongoDB 연결을 위한 mongoose 모듈 불러오기
require('dotenv').config(); // .env 파일에서 환경변수 불러오기

// async, await 이용
const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECT);
    console.log('MongoDB Connected');
  } catch (error) {
    console.log(error);
  }
};

// dbConnect 함수를 모듈로 내보내기
module.exports = dbConnect; 