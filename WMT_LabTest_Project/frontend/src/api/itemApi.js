import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://railway.com/project/6d7f9768-8d3a-4eb2-aede-e286ddd40729/service/35483d9f-685a-40cf-a729-e1b7db918e71/settings/#networking",
});

export const getItems = () => API.get("/items");
export const getItemById = (id) => API.get(`/items/${id}`);
export const createItem = (itemData) => API.post("/items", itemData);
export const updateItem = (id, itemData) => API.put(`/items/${id}`, itemData);
export const deleteItem = (id) => API.delete(`/items/${id}`);

export default API;