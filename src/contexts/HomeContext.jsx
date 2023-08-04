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
  const [modalIsEditClientOpen, setIsEditClientOpen] = useState(false);
  const [selectClient, setSelectClient] = useState(null);
  const [modalIsDeleteClientOpen, setIsDeleteClientOpen] = useState(false);
  const [selectDeleteClient, setSelectDeleteClient] = useState(null);

  const navigate = useNavigate();

  const handleModal = () => {
    setIsOpen(!modalIsOpen);
  };

  const handleEditModal = () => {
    setIsEditOpen(!modalIsEditOpen);
  };

  const handleEditClientModal = () => {
    setIsEditClientOpen(!modalIsEditClientOpen);
  };

  const handleDeleteClientModal = (client) => {
    setSelectDeleteClient(client);
    setIsDeleteClientOpen(!modalIsDeleteClientOpen);
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

  const editClient = async (data) => {
    try {
      setLoading(true);

      await api.patch(`/users/${data.id}`, data);
      getUser();

      setIsEditClientOpen(false);
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
  };

  const loginRedirect = () => {
    navigate("/");
  };

  const removeClient = async (id) => {
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
        modalIsEditClientOpen,
        setIsEditClientOpen,
        selectClient,
        setSelectClient,
        editClient,
        handleEditClientModal,
        handleDeleteClientModal,
        modalIsDeleteClientOpen,
        setIsDeleteClientOpen,
        removeClient,
        loginRedirect,
        deleteToken,
        selectDeleteClient,
        setSelectDeleteClient,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
