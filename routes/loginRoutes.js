// Router 모듈을 사용하기 위한 모듈을 불러옴
const express = require('express');
const router = express.Router();

// 컨트롤러 모듈 불러오기 
const { 
  getLogin, 
  loginUser, 
  getRegister, 
  registerUser 
} = require('../controllers/loginController'); 
  
// ROOT 호출 처리
router.route("/")
  .get(getLogin) 
  .post(loginUser);

// 회원가입 페이지 호출 처리
router.route("/register")
  .get(getRegister)
  .post(registerUser);

// router 모듈을 내보냄
module.exports = router; 