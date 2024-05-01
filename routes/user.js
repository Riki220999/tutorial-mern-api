import express from 'express';
import {
  getUsers,
  getUserByID,
  saveUser,
  updateUser,
  deleteUser,
} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/users', getUsers);
router.get('/user/:id', getUserByID);
router.post('/user', saveUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;
