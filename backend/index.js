const express = require('express');
const server = express();
const port = 3000;

server.use(express.json());

let users = [
    {
        id: 1,
        username: "admin",
        password: "admin123"
    }
];

//localhost:3000/users     //localhost:3000/users
//localhost:3000/users/1   //localhost:3000/users/1


// GET /users
server.get('/users', (req, res) => {
    return res.json(users);
});

// GET /users/:id
server.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);

    if (user) {
        return res.json(user);
    } else {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
});

// POST /users
server.post('/users', (req, res) => {
    const { username, password } = req.body;
    const newUser = {
        id: users.length + 1,
        username,
        password
    };

    users.push(newUser);

    return res.status(201).json(newUser);
});

// PUT /users/:id
server.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { username, password } = req.body;
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex !== -1) {
        users[userIndex].username = username;
        users[userIndex].password = password;

        return res.json(users[userIndex]);
    } else {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
});

// DELETE /users/:id
server.delete('/users/:id', (req, res) => { 
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex !== -1) {
        const deletedUser = users.splice(userIndex, 1)[0];

        return res.json(deletedUser);
    } else {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
});

server.listen(3000, () => {
    console.log("API está rodando em http://localhost:3000");
}); 