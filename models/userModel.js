const mongoose = require('mongoose'); // MongoDB 연결을 위한 mongoose 모듈 불러오기 

// 주소록 스키마 정의
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "아이디는 필수입니다."],
    unique: true, // 아이디는 고유해야 함
  },
  password: {
    type: String,
    required: [true, "비밀번호는 필수입니다."],
  },
},
{
  timestamps: true, // createdAt, updatedAt 필드 자동 생성
});

// Contact 모델을 모듈로 내보내기
module.exports = mongoose.model('User', UserSchema);
