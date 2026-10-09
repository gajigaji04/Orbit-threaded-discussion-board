const bcrypt = require("bcryptjs");
const User = require("../models/User");

const SALT_ROUNDS = 10;

// 회원 가입 기능
exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ error: "username, email and password are required" });
  }
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
  const newUser = await User.create({ username, email, passwordHash });
  res.status(201).json(newUser);
};

//  회원 목록 조회 기능
exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

// 특정 회원 정보 조회 기능
exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
};

// 회원 정보 수정 기능
exports.updateUser = async (req, res) => {
  const { username, email, password } = req.body;
  const passwordHash = password
    ? await bcrypt.hash(password, SALT_ROUNDS)
    : undefined;
  const updatedUser = await User.update(req.params.userId, {
    username,
    email,
    passwordHash,
  });
  if (!updatedUser) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(updatedUser);
};

// 회원 탈퇴 기능
exports.deleteUser = async (req, res) => {
  const deleted = await User.remove(req.params.userId);
  if (!deleted) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json({ message: "User deleted successfully" });
};
