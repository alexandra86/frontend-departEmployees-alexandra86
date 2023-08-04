import React from "react";
import spinnerImage from "../../img/spinner.png";
import { StyledLoading } from "./style";

export const Loading = () => {
  return (
    <StyledLoading>
      <img src={spinnerImage} alt="Carregando" className="carregando" />
    </StyledLoading>
  );
};
