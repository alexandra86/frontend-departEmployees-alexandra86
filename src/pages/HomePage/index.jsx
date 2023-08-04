import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { HomeContext } from "../../contexts/HomeContext";
import { StyledHomePage } from "./style";
import logoHome from "../../img/LogoDepart.png";
import { RegisterTaskModal } from "../../components/RegisterTaskModal";
import { EditTaskModal } from "../../components/EditTaskModal";
import "react-toastify/dist/ReactToastify.css";
import { CardTask } from "../../components/CardTask";
import imgMobile from "../../img/buttonMobile.png";

export const HomePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth > 800);
  const { user, newLoading, setUser } = useContext(AuthContext);
  const {
    modalIsOpen,
    handleModal,
    modalIsEditOpen,
    modalIsContactsOpen,
    handleContactsModal,
  } = useContext(HomeContext);

  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost/api/tasks");
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      }
    };

    fetchTasks();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const goLoginClick = () => {
    navigate("/");
    setUser(null);
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@TOKENCLIENT");
    localStorage.removeItem("@userId");
  };

  const goDepartClick = () => {
    navigate("/department");
  };

  const goEmployeeClick = () => {
    navigate("/employee");
  };

  const vewMenu = () => {
    return (
      <div className="areaButtonsHome">
        <button className="btComeBackDepart" onClick={goDepartClick}>
          Departamentos
        </button>
        <button className="btComeBackLogin" onClick={goLoginClick}>
          Sair
        </button>
      </div>
    );
  };

  return (
    <>
      {newLoading && <div>Carregando...</div>}
      {user && (
        <StyledHomePage>
          <header className="headerHome">
            <img
              src={logoHome}
              alt="logo de DepartEmployees"
              className="logoDepart"
            />
            {isMobile ? (
              <div className="areaButtonsHome">
                <button className="btComeBackDepart" onClick={goDepartClick}>
                  Departamentos
                </button>
                <button className="btComeBackDepart" onClick={goEmployeeClick}>
                  Funcionários
                </button>
                <button className="btComeBackLogin" onClick={goLoginClick}>
                  Sair
                </button>
              </div>
            ) : (
              <img
                src={imgMobile}
                alt=""
                className="btMobile"
                onClick={vewMenu}
              />
            )}
          </header>

          <div className="areaUser">
            <div className="hello">
              <h2 className="areaWelcome">Olá! &#128521;</h2>
            </div>
            <p className="areaWelcome">{user.firstName}</p>
          </div>

          <div className="areaInformation">
            <div className="areaContact">
              <button
                className="bTContactHome"
                onClick={() => handleContactsModal()}
              >
                &#128221; Tarefas
              </button>
              <button
                type="button"
                className="btOpenModal"
                onClick={() => handleModal()}
              >
                +
              </button>
            </div>
            <ul className="ulCardContact">
              {tasks.map((elem) => (
                <CardTask key={elem.id} elem={elem} />
              ))}
            </ul>
          </div>
          {modalIsOpen && <RegisterTaskModal />}
          {modalIsEditOpen && <EditTaskModal />}
          {modalIsContactsOpen && <ContactsModal />}
        </StyledHomePage>
      )}
    </>
  );
};
