import express from 'express';
import cors from 'cors';
import UserController from './controllers/userController';

const app = express();
const PORT = 3000;

app.use(cors()); 
app.use(express.json());

app.post('/users', UserController.createUser);
app.post('/login', UserController.loginUser);
app.get('/users/:id', UserController.getUserDetails);
app.put('/users/:id', UserController.updateUser);
app.delete('/users/:id', UserController.deleteUser);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
