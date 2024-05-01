import UserModel from '../models/user.model.js';

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.send(users);
  } catch (error) {
    res.sendStatus(500).json({ message: error?.message });
  }
};

const getUserByID = async (req, res) => {
  const param = req.params.id;
  try {
    const user = await UserModel.findById(param);
    res.send([user]);
  } catch (error) {
    res.sendStatus(500).json({ message: error?.message });
  }
};

const saveUser = async (req, res) => {
  const requestUser = new UserModel(req.body);
  try {
    const insertUser = await requestUser.save();
    res.json({ message: insertUser });
  } catch (error) {
    res.sendStatus(400).json({ message: error?.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const editUser = await UserModel.updateOne(
      { _id: req.params.id },
      { $set: req.body },
    );
    res.json({ message: editUser });
  } catch (error) {
    res.sendStatus(400).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const removeuser = await UserModel.deleteOne({ _id: req.params.id });
    res.json({ message: removeuser });
  } catch (error) {
    res.sendStatus(400).json({ message: error.message });
  }
};

export { getUsers, getUserByID, saveUser, updateUser, deleteUser };
