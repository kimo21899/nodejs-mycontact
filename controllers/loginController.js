// asyncHandler 모듈 불러오기
const asyncHandler = require("express-async-handler"); 
const User = require("../models/userModel"); // 사용자 모델 불러오기
const bcrypt = require("bcrypt"); // 비밀번호 해싱을 위한 bcrypt 모듈 불러오기

// GET login page
// GET /
const getLogin = (req, res) => {
  res.render("home"); // EJS 템플릿 렌더링
};

// POST 로그인 처리
const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body; // 요청 본문에서 username과 password 추출  
  if(username==="admin" && password==="1234") {
    res.redirect("/contacts");
  } else {
    res.send("로그인 실패!!");
  }
});

// GET 사용자등록폼 페이지
const getRegister = (req, res) => {
  res.render("register"); // EJS 템플릿 렌더링
};


// POST 사용자 등록처리
const registerUser = asyncHandler(async (req, res) => {
  const { username, password1, password2 } = req.body; // 요청 본문에서 username과 password 추출  
  
  if(password1 === password2) {
    const hashedPassword = await bcrypt.hash(password1, 10); // 비밀번호 해싱
    const user = await User.create({ username, password: hashedPassword }); // 사용자 모델 인스턴스 생성
    res.json({ message: "Register successfule", user}); // 사용자 정보 JSON 응답
    // res.redirect("/"); // 사용자 등록 후 HOME으로 리다이렉트
  } else { 
    res.send("비밀번호가 일치하지 않습니다.");
  }  
});

module.exports = { getLogin, loginUser, getRegister, registerUser };