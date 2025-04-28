const mongoose = require('mongoose'); // MongoDB 연결을 위한 mongoose 모듈 불러오기 

// 주소록 스키마 정의
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "이름은 필수입니다."],
  },
  email: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: [true, "전화번호는 필수입니다."],
  },
},
{
  timestamps: true, // createdAt, updatedAt 필드 자동 생성
});


// 스키마를 모델로 변환 // mongoose.model(모델 이름, 스키마)
const Contact = mongoose.model('Contact', contactSchema);

// Contact 모델을 모듈로 내보내기
module.exports = Contact; 