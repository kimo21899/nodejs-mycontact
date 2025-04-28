// Router 모듈을 사용하기 위한 모듈을 불러옴
const express = require('express');
const router = express.Router();

// 컨트롤러 모듈 불러오기 
const { getAllContacts, 
  createContact,
  getContact,
  updateContact,
  deleteContact } = require('../controllers/contactController'); 


// router.route(경로).get().post()
// 연락처 가져오기
router.route("/")
  .get(getAllContacts) // GET 요청 처리
  .post(createContact); // POST 요청 처리

// 파라미터 요청 3가지 정의 (GET, PUT, DELETE)
router.route("/:id")
  .get(getContact)
  .put(updateContact)
  .delete(deleteContact);

// router 모듈을 내보냄
module.exports = router; 