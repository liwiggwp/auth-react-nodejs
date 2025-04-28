import httpService from "./HttpServices";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ApiServices() {
  const navigate = useNavigate();
  const { post } = httpService();

  const getToken = () => {
    return localStorage.getItem("token");
  };

  const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());

  const saveToken = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const saveUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const login = async (username, password) => {
    try {
      const response = await post("/auth/login", { username, password });
      saveToken(response.data.token);
      saveUser(response.data.user);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const register = async (username, password, first_name, last_name) => {
    try {
      const response = await post("/auth/register", {
        username,
        password,
        first_name,
        last_name,
      });
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/auth/login");
  };

  return {
    setToken: saveToken,
    token,
    user,
    getToken,
    login,
    register,
    logout,
  };
}
