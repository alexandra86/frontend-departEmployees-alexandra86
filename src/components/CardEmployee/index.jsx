import { StyleCardEmployee } from "./style.js";

export const CardEmployee = ({ elem }) => {
  return (
    <StyleCardEmployee key={elem.id}>
      <div className="areaClient">
        <h3 className="identification">
          <span className="emphasis">Name: </span> {elem.firstName}{" "}
          <span className="identification">{elem.lastName}</span>
        </h3>
        <p className="identification">
          <span className="emphasis">Email: </span>
          {elem.email}
        </p>
        <p className="identification">
          <span className="emphasis">Phone: </span>
          {elem.phone ? elem.phone : "Não informado"}
        </p>
        <p className="identification">
          <span className="emphasis">Department: </span>
          {elem.department ? elem.department.name : "Sem departamento"}
        </p>
      </div>
    </StyleCardEmployee>
  );
};
