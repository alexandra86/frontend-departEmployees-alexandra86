import { StyleCardDepartment } from "./style";

export const CardDepartment = ({ elem }) => {
  return (
    <StyleCardDepartment>
      <h1 className="nameDepartment">{elem.name}</h1>
    </StyleCardDepartment>
  );
};
