import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import logoHome from "../../img/LogoDepart.png";
import { StyledProfilePage } from "./style";
import { useNavigate } from "react-router-dom";
// import { DeleteClientModal } from "../../components/DeleteClientModal";
import "moment/locale/pt-br";
import "react-toastify/dist/ReactToastify.css";
import { HomeContext } from "../../contexts/HomeContext";
import { EditUserModal } from "../../components/EditUserModal";
import { DeleteUserModal } from "../../components/DeleteUserModal";

export const ProfilePage = () => {
  const { user, newLoading } = useContext(AuthContext);
  const {
    setSelectUser,
    modalIsEditUserOpen,
    handleEditUserModal,
    handleDeleteUserModal,
    modalIsDeleteUserOpen,
  } = useContext(HomeContext);

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  };
  return (
    <>
      {newLoading && <div>Carregando...</div>}
      {user && (
        <StyledProfilePage>
          <header className="headerHome">
            <img
              src={logoHome}
              alt="logo da Kenzie Hub"
              className="logoDepart"
            />
            <button className="btComeBackHome" onClick={goToHome}>
              Home
            </button>
          </header>
          <div className="areaClientProfile" key={user.id}>
            <h2 className="NameClientProfile">
              {user.firstName} <span className="NameClientProfile"></span>
              {user.lastName}
            </h2>
            <p className="clientProfile">E-mail: {user.email}</p>
            <p className="clientProfile">
              Phone: {user.phone ? user.phone : "Não informado"}
            </p>
            <p className="clientProfile">
              Department:{" "}
              {user.department ? user.department.name : "Sem departamento"}
            </p>
            <div className="areaDateHourProfile"></div>
            <div className="areaButtonsProfile">
              <button
                className="btEditProfile"
                onClick={() => {
                  handleEditUserModal();
                  setSelectUser(user);
                }}
              >
                Editar
              </button>
              <button
                type="button"
                className="btDeleteProfile"
                onClick={() => handleDeleteUserModal()}
              >
                Deletar
              </button>
            </div>
          </div>
          {modalIsEditUserOpen && <EditUserModal />}
          {modalIsDeleteUserOpen && <DeleteUserModal />}
        </StyledProfilePage>
      )}
    </>
  );
};
