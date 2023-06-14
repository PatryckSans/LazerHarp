import express from 'express';
import UserController from './controllers/userController';

const router = express.Router();

router.post('/users', UserController.createUser);
router.post('/login', UserController.loginUser);
router.get('/users/:id', UserController.getUserDetails);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

export default router;


// Criar usuário
// Método: POST
// URL: http://localhost:3000/users
// Body:{
//     "name": "John Doe",
//     "email": "johndoe@example.com",
//     "password": "123456"
//   }


// Fazer login do usuário
// Método: POST
// URL: http://localhost:3000/login
// Body:
// {
//   "email": "johndoe@example.com",
//   "password": "123456"
// }

// Obter detalhes do usuário
// Método: GET
// URL: http://localhost:3000/users/{id}
// (Substitua {id} pelo ID real do usuário)

// Atualizar informações do usuário
// Método: PUT
// URL: http://localhost:3000/users/{id}
// (Substitua {id} pelo ID real do usuário)
// Body:
// {
//   "name": "John Doe",
//   "email": "newemail@example.com"
// }

// Excluir usuário
// Método: DELETE
// URL: http://localhost:3000/users/{id}
// (Substitua {id} pelo ID real do usuário)
