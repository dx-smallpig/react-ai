import axios from "axios";

const requests = axios.create({
  baseURL: "/api",
  timeout: 60000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default requests;
