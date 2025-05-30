import axios from "axios";
const BASE_URL = "http://localhost:3200/api";

export const EndPoints = {

 add: async (endPoint, formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/${endPoint}`, formData);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);

    // ✅ Extract and throw a clean error message
    if (error.response && error.response.data) {
      const errData = error.response.data;

      // Common patterns for API error structures
      const message =
        errData.message ||
        errData.error ||
        (Array.isArray(errData.errors) ? errData.errors[0] : null) ||
        "Something went wrong";

      throw new Error(message);
    }

    throw new Error("Something went wrong");
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
