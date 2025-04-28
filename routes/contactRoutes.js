// Router 모듈을 사용하기 위한 모듈을 불러옴
const express = require('express');
const router = express.Router();

// 컨트롤러 모듈 불러오기 
const { 
  getAllContacts, 
  addContactForm,
  createContact,
  getContact,
  updateContact,
  deleteContact,
  } = require('../controllers/contactController'); 

const { getLogin} = require('../controllers/loginController'); 
  

// router.route(경로).get().post()
// 전체 연락처 가져오기
router.route("/").get(getAllContacts) 

// 연락처 추가 폼
router.route("/add")
  .get(addContactForm) // GET 주소록 등록 폼 VIEW
  .post(createContact); // POST 주소록 등록 처리 CONTROLLER

// 연락처 삭제
router.route("/delete/:id")
  .get(deleteContact); // GET 주소록 삭제 처리 CONTROLLER


// 파라미터 요청 3가지 정의 (GET, PUT, DELETE)
router.route("/:id")
  .get(getContact)
  .put(updateContact)
  .delete(deleteContact);

// router 모듈을 내보냄
module.exports = router; 