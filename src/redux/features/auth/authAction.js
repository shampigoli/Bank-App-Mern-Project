import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../services/Api";
import { toast } from "react-toastify";
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/auth/login", { role, email, password });
      // store success
      if (data) {
        localStorage.setItem("token", data.token);
        toast.success("login successfully!");
        window.location.replace("/");
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      name,
      role,
      email,
      password,
      organizationName,
      hospitalName,
      address,
      phone,
      website,
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await api.post("/auth/register", {
        name,
        role,
        email,
        password,
        organizationName,
        hospitalName,
        address,
        phone,
        website,
      });
      if (data?.success){
        toast.success("registered successfully");
        window.location.replace("/login");
      }
      return data;
    } catch (error) {
        toast.error("error in registration")
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getCurrentUser = createAsyncThunk(
    'auth/getCurrentUser',
    async ({rejectWithValue})=>{
        try {
            const res = await api.get('/auth/current-user')
            if(res?.data){
                return res?.data
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
              } else {
                return rejectWithValue(error.message);
              }
        }
    }
)
