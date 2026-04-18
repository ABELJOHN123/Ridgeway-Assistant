import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const runInvestigation = async () => {
  const res = await API.get("/investigation/run");
  return res.data;
};