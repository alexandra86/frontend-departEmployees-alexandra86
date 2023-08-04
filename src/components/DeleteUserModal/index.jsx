import { React, useContext } from "react";
import { createPortal } from "react-dom";
import { StyledContainerDeleteModal } from "./style.js";
import { HomeContext } from "../../contexts/HomeContext.jsx";
import { AuthContext } from "../../contexts/AuthContext.jsx";

export const DeleteUserModal = () => {
  const { handleDeleteUserModal, removeUser } = useContext(HomeContext);

  const { user } = useContext(AuthContext);

  const modalDeleteUserContent = (
    <StyledContainerDeleteModal>
      <div className="modalContent">
        <div className="headerModal">
          <h2 className="titleModal">Deletar Perfil</h2>
          <button
            onClick={() => handleDeleteUserModal()}
            className="btCloseModal"
          >
            X
          </button>
        </div>
        <div className="areaDeleteInfo">
          <p className="freseDelete">
            Tem certeza que deseja deletar o seu perfil?
          </p>
          <div className="areaButtonsDelete">
            <button
              className="btConfirmDelete"
              onClick={() => removeUser(user.id)}
            >
              Confirmar
            </button>
            <button
              className="btCancelDelete"
              onClick={() => handleDeleteUserModal()}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </StyledContainerDeleteModal>
  );
  return createPortal(
    modalDeleteUserContent,
    document.getElementById("modalUserDelete-root")
  );
};
