import { useContext } from "react";
import { StyleCardContact } from "./style.js";
import moment from "moment";
import "moment/locale/pt-br";
import { HomeContext } from "../../contexts/HomeContext.jsx";
import { AuthContext } from "../../contexts/AuthContext.jsx";

export const CardTask = ({ elem }) => {
  const { removeTask, handleEditModal, setSelectTask } =
    useContext(HomeContext);
  const { user } = useContext(AuthContext);
  const currentDateTime = new Date(elem.due_date);
  const formattedDate = moment(currentDateTime).format("DD/MM/YYYY");
  const isUserTaskOwner = user.email && user.email === elem.user_task.email;

  return (
    <StyleCardContact key={elem.id}>
      <div className="areaClient">
        <h3 className="identification">
          <span className="emphasis">Name:</span> {elem.title}
        </h3>
        <p className="identification">
          <span className="emphasis">Description:</span> {elem.description}
        </p>
        <p className="identification">
          <span className="emphasis">Employeer:</span>{" "}
          {elem.user_task.firstName}
        </p>
        <p className="registerDate">Deadline:</p>
        <div className="areaDate">
          <p className="identification">
            <span className="emphasis">Date:</span>
            {formattedDate}
          </p>
        </div>
      </div>
      {isUserTaskOwner && (
        <div className="areabuttons">
          <button
            className="btEdit"
            onClick={() => {
              handleEditModal();
              setSelectTask(elem);
            }}
          ></button>
          <button
            type="button"
            onClick={() => removeTask(elem.id)}
            className="btDelete"
          ></button>
        </div>
      )}
    </StyleCardContact>
  );
};
