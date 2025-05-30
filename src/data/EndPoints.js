import axios from "axios";
const BASE_URL = "http://localhost:3200/api";

export const EndPoints = {

  add: async (endPoint, formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/${endPoint}`, formData);
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },

  get: async (endPoint) => {
    try {
      const response = await axios.get(`${BASE_URL}/${endPoint}`);
      console.log("response", response);
      return response.data;
    } catch (err) {
      console.log("Error In Fetching Transactions", err);
      throw err;
    }
  }
  
};
