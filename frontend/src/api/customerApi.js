import axios from 'axios';

const API_URL = "http://localhost:8000/customer/"

export const fetchCustomer = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error;
  }
};

export const createCustomer = async (customerData) => {
  try {
    const response = await axios.post(API_URL, customerData);
    return response.data; 
  } catch (error) {
    console.error("Error creating bus:", error);
    throw error;
  }
};