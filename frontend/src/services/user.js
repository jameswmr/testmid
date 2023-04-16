
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
  async createOne({ name, password,image }) {
    const { data } = await api.post("/users", { name:name ,password:password, image: image});
    return data;
  },
  async getUser({id}){
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
  async delete({id,userId}){
    const {data} = await api.post("/users/delete", {id, userId});
    return data;
  },
  async getID(){
    const { data } = await api.get("/users/id");
    return data;
  },
  async delID(){
    const { data } = await api.get("/users/delid");
    return data;
  },
};
