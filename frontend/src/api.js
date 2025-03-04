import axios from 'axios';

const API_URL = "http://localhost:3000";

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const getCart = async () => {
  const response = await axios.get(`${API_URL}/cart`);
  return response.data;
};

export const addToCart = async (product) => {
  const response = await axios.post(`${API_URL}/cart`, product);
  return response.data;
};