import { USERREGISTER, BECOME_TASKER, TASKER_DETAIL } from "./types";
import axios from "axios";

export const userRegister = async data => {
  const res = await axios.post("/auth/register", data);
  console.log(res.data);
  return {
    type: USERREGISTER,
    payload: res.data
  };
};

export const become_tasker = async () => {
  return {
    type: BECOME_TASKER,
    payload: true
  };
};

export const tasker_details = async data => {
  console.log(data);
  return {
    type: TASKER_DETAIL,
    payload: data
  };
};