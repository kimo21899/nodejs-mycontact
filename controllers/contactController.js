// asyncHandler 모듈 불러오기
const asyncHandler = require("express-async-handler"); 

// GET /contacts
const getAllContacts = asyncHandler(async (req, res) => {
  res.send("Contacts Page!");
});

// POST / Create contacts
const createContact = asyncHandler(async (req, res) => {
  // 요청 본문을 콘솔에 출력
  console.log(req.body);   
  // 요청 본문에서 name, email, phone 추출
  const { name, email, phone } = req.body; 
  if(!name || !email || !phone) {
    return res.status(400).send("Missing required fields: name, email, phone");
  }
  res.send("Create New Contacts!");
});

// @desc Get contact
// @route GET /contacts/:id
const getContact = asyncHandler(async (req, res) => {
  // 연락처 상세 보기
  res.status(200).send(`View Contact for ID: ${req.params.id}`);
});

// @desc Update contact
// @route PUT /contacts/:id
const updateContact = asyncHandler(async (req, res) => {
  // 연락처 수정하기
  res.status(200).send(`Update Contact for ID: ${req.params.id}`);
});

// @desc Delete contact
// @route DELETE /contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
  // 연락처 삭제하기
  res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
});


module.exports = { 
  getAllContacts, 
  createContact,
  getContact,
  updateContact,
  deleteContact,
};