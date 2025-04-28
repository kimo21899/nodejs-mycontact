// asyncHandler 모듈 불러오기
const asyncHandler = require("express-async-handler"); 
const Contact = require("../models/contactModel"); // 연락처 모델 불러오기
const { name } = require("ejs");

// GET /contacts
const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({}); // 모든 연락처 가져오기
  res.render("index", { contacts: contacts }); // EJS 템플릿 렌더링
});

// GET /contacts/add 연락처 등록폼 VIEW
const addContactForm = asyncHandler(async (req, res) => {
  res.render("add"); // EJS 템플릿 렌더링
});

// POST / 연락처 생성하기 
const createContact = asyncHandler(async (req, res) => {
  // 요청 본문에서 name, email, phone 추출
  const { name, email, phone } = req.body; 
  if(!name || !email || !phone) {
    // throw new Error("name, email, phone ");
    return res.status(400).send("Missing required fields: name, email, phone");
  } 
  // 연락처 생성하기 (도큐먼트 생성)
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.redirect("/contacts"); // 연락처 목록으로 리다이렉트
});

// @desc Get contact
// @route GET /contacts/:id
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id); // 모든 연락처 가져오기
  if (!contact) {
    throw new Error("Contact not found");
  }
  res.render("update", { contact: contact }); // EJS 템플릿 렌더링
});

// @desc Update contact
// @route PUT /contacts/:id
const updateContact = asyncHandler(async (req, res) => {
  const id = req.params.id; // URL 파라미터에서 ID 추출
  const {name, email, phone} = req.body; // 요청 본문에서 name, email, phone 추출
  const contact = await Contact.findById(id); // ID로 연락처 찾기
  if (!contact) {
    throw new Error("Contact not found");
  }

  contact.name = name || contact.name; // 이름 업데이트
  contact.email = email || contact.email; // 이메일 업데이트  
  contact.phone = phone || contact.phone; // 전화번호 업데이트
  contact.save(); // 변경사항 저장
  // res.send(contact);
  res.redirect("/contacts"); // 연락처 목록으로 리다이렉트
});

// @desc Delete contact
// @route DELETE /contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.redirect("/contacts"); // 연락처 목록으로 리다이렉트
});


module.exports = { 
  getAllContacts, 
  createContact,
  getContact,
  updateContact,
  deleteContact,
  addContactForm
};