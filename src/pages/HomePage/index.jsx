import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { HomeContext } from "../../contexts/HomeContext";
import { StyledHomePage } from "./style";
import logoHome from "../../img/LogoDepart.png";
// import { RegisterContactModal } from "../../components/RegisterContactModal";
// import { EditContactModal } from "../../components/EditContactModal";
// import { ContactsModal } from "../../components/ContactsModal";
// import perfilImagem from "../../img/perfilImage.png";
import "react-toastify/dist/ReactToastify.css";

export const HomePage = () => {
  const { user, newLoading } = useContext(AuthContext);
  const {
    // modalIsOpen,
    handleModal,
    // modalIsEditOpen,
    // modalIsContactsOpen,
    handleContactsModal,
  } = useContext(HomeContext);

  const navigate = useNavigate();

  const goLoginClick = () => {
    navigate("/");
    user = null;
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@TOKENCLIENT");
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
            <button className="btComeBackLogin" onClick={goLoginClick}>
              Sair
            </button>
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
            <ul className="ulCardContact"></ul>
          </div>
          {/* {modalIsOpen && <RegisterContactModal />}
          {modalIsEditOpen && <EditContactModal />}
          {modalIsContactsOpen && <ContactsModal />} */}
        </StyledHomePage>
      )}
    </>
  );
};
