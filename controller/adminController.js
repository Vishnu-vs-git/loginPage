const { log } = require("console");
const adminModel = require("../model/adminModel");
const userModel = require("../model/usermodel");

const loadLogin = async (req, res) => {
  res.render("admin/login");
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await adminModel.findOne({ email });
    // console.log(admin);

    if (!admin) return res.render("admin/login");
    if (admin.password !== password) {
      // console.log("one");  //
      return res.render("admin/login", { message: "incorrect password" });
      // console.log("two");
    } else {
      req.session.admin = true;
      res.redirect("/admin/dash");
    }
  } catch (error) {
    res.send(error);
  }
};
const loadDashboard = async (req, res) => {
  try {
    // console.log("--------hi gussss");

    const admin = req.session.admin;
    if (!admin) return res.redirect("/admin/login");
    const users = await userModel.find({});
    // console.log("-------------", users.email);
    res.render("admin/dash", { users });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
const editUser = async (req, res) => {
  try {
    const { email, password, id } = req.body;
    // console.log(req.body);

    const user = await userModel.findOneAndUpdate(
      { _id: id },
      { email: email, password: password },
      { new: true }
    );
    const allusers = await userModel.find({});
    res.render("admin/dash", {
      message: "user updated sucecessfully",
      users: allusers,
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findOneAndDelete({ _id: id });
    res.redirect("/admin/dash");
  } catch (error) {
    console.log(error);
  }
};
const addUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = new userModel({
      email,
      password,
    });
    await newUser.save();
    res.redirect("/admin/dash");
  } catch (error) {
    console.log(error);
  }
};
const logout = async (req, res) => {
  req.session.admin = null;
  res.redirect("/admin/login");
};
module.exports = {
  loadLogin,
  login,
  loadDashboard,
  editUser,
  deleteUser,
  addUser,
  logout,
};
