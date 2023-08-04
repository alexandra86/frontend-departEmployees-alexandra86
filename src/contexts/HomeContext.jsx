import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";
import { api } from "../services/axiosClient";
import { useNavigate } from "react-router-dom";

export const HomeContext = createContext({});

export const HomeProvider = ({ children }) => {
  const { user, getUser } = useContext(AuthContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsEditOpen, setIsEditOpen] = useState(false);
  const [selectTask, setSelectTask] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalIsEditUserOpen, setIsEditUserOpen] = useState(false);
  const [selectUser, setSelectUser] = useState(null);
  const [modalIsDeleteUserOpen, setIsDeleteUserOpen] = useState(false);
  const [selectDeleteUser, setSelectDeleteUser] = useState(null);

  const navigate = useNavigate();

  const handleModal = () => {
    setIsOpen(!modalIsOpen);
  };

  const handleEditModal = () => {
    setIsEditOpen(!modalIsEditOpen);
  };

  const handleEditUserModal = () => {
    setIsEditUserOpen(!modalIsEditUserOpen);
  };

  const handleDeleteUserModal = (user) => {
    setSelectDeleteUser(user);
    setIsDeleteUserOpen(!modalIsDeleteUserOpen);
  };

  const RegisterTask = async (data) => {
    try {
      setLoading(true);

      await api.post("/tasks", data);

      getUser();

      setIsOpen(false);

      toast.success("Sucesso! Tarefa Criada!");
    } catch (error) {
      toast.error("Algo não está certo!");
    } finally {
      setLoading(false);
    }
  };

  const removeTask = async (id) => {
    try {
      setLoading(true);

      await api.delete(`/tasks/${id}`);
      getUser();

      toast.info("Tarefa removida com sucesso!");
    } catch (error) {
      toast.error("Algo não está certo!");
    } finally {
      setLoading(false);
    }
  };

  const editTask = async (data) => {
    try {
      setLoading(true);

      await api.patch(`/tasks/${data.id}`, data);
      getUser();

      setIsEditOpen(false);
      toast.success("Tarefa alterada com sucesso!");
    } catch (error) {
      toast.error("Algo não está certo!");
    } finally {
      setLoading(false);
    }
  };

  const editUser = async (data) => {
    try {
      setLoading(true);

      await api.patch(`/users/${data.id}`, data);
      getUser();

      setIsEditUserOpen(false);
      toast.success("Perfil alterado com sucesso!");
    } catch (error) {
      toast.error("Algo não está certo!");
    } finally {
      setLoading(false);
    }
  };

  const deleteToken = () => {
    localStorage.removeItem("@TOKENCLIENT");
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@userId");
  };

  const loginRedirect = () => {
    navigate("/");
  };

  const removeUser = async (id) => {
    try {
      setLoading(true);

      await api.delete(`/users/${id}`);
      getUser();

      toast.info("Perfil removido com sucesso!");
      deleteToken();
      loginRedirect();
    } catch (error) {
      toast.error("Algo não está certo!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <HomeContext.Provider
      value={{
        user,
        modalIsOpen,
        setIsOpen,
        modalIsEditOpen,
        setIsEditOpen,
        selectTask,
        setSelectTask,
        loading,
        setLoading,
        RegisterTask,
        handleModal,
        handleEditModal,
        removeTask,
        editTask,
        modalIsEditUserOpen,
        setIsEditUserOpen,
        selectUser,
        setSelectUser,
        editUser,
        handleEditUserModal,
        handleDeleteUserModal,
        modalIsDeleteUserOpen,
        setIsDeleteUserOpen,
        removeUser,
        loginRedirect,
        deleteToken,
        selectDeleteUser,
        setSelectDeleteUser,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
