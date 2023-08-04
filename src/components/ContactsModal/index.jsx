import { useContext } from "react";
import { createPortal } from "react-dom";
import { HomeContext } from "../../contexts/HomeContext";
import { StyledContainerContactsModal } from "./style";

export const ContactsModal = () => {
  const { handleContactsModal } = useContext(HomeContext);

  const modalContactsContent = (
    <StyledContainerContactsModal>
      <div className="modalContentContacts">
        <div className="headerModal">
          <h2 className="titleModal">Visulizar Contatos</h2>
          <button
            onClick={() => handleContactsModal()}
            className="btCloseModal"
          >
            X
          </button>
        </div>
      </div>
    </StyledContainerContactsModal>
  );
  return createPortal(
    modalContactsContent,
    document.getElementById("modalContacts-root")
  );
};
