import axios from "axios";

const API_URL = "http://localhost:3000";

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users`, userData);
    console.log("Novo usuário criado:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error.response.data.error);
    throw new Error(error.response.data.error);
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    console.log("Usuário logado:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error.response.data.error);
    throw new Error(error.response.data.error);
  }
};

export const getUserDetails = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}`);
    console.log("Detalhes do usuário:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Erro ao obter detalhes do usuário:",
      error.response.data.error
    );
    throw new Error(error.response.data.error);
  }
};

export const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(`${API_URL}/users/${userId}`, userData);
    console.log("Usuário atualizado:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error.response.data.error);
    throw new Error(error.response.data.error);
  }
};

export const deleteUser = async (userId) => {
  try {
    await axios.delete(`${API_URL}/users/${userId}`);
    console.log("Usuário excluído com sucesso!");
  } catch (error) {
    console.error("Erro ao excluir usuário:", error.response.data.error);
    throw new Error(error.response.data.error);
  }
};
