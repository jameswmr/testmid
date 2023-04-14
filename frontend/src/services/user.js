import { getOneUser } from "../../../backend/src/routes/api/v1/users/handlers";
import api from "./axiosClient";

export const user = {
  async getAll() {
    const { data } = await api.get("/users");
    return data;
  },
  async getAllComment(){
    const { data } = await api.get("/users/chat");
    return data;
  },
  async createOne({ name, password }) {
    console.log(name,password);
    const { data } = await api.post("/users", { name ,password});
    console.log(data);
    return data;
  },
  async getOneUser({id}){
    const {data} = await api.post("/users/name",{id});
    return data;
  },
  async check({name, password}){
    console.log("check",{name});
    const { data } = await api.post("/users/name", {name, password});
    return data;
  },
  async post({message}){
    const { data } = await api.post("/users/chat", {message});
    return data;
  },
};
