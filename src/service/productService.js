import axios from 'axios';

const API_URL = 'http://localhost:9000/api';

const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  return response.data;
};

export default {
  getProducts,
  getProductById,
};
