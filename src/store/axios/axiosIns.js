import axios from "axios";

const URL =
  "http://ec2-3-70-250-130.eu-central-1.compute.amazonaws.com:5500/api/v1";
const headers = { "Content-Type": "application/json", UserID: "nurr" };

export const axiosInstanse = axios.create({
  baseURL: URL,
  headers,
});
