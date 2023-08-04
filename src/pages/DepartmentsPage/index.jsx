import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { StyledDepartmentPage } from "./style";
import logoDepartment from "../../img/LogoDepart.png";
import { CardDepartment } from "../../components/CardDepartments";
import { useNavigate } from "react-router-dom";

export const DepartmentsPage = () => {
  const { user, newLoading, setUser } = useContext(AuthContext);
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch("http://localhost/api/departments");
        const data = await response.json();
        setDepartments(data);
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      }
    };

    fetchDepartments();
  }, []);

  const goHomeClick = () => {
    navigate("/home");
  };

  return (
    <>
      {newLoading && <div>Carregando...</div>}
      {user && (
        <StyledDepartmentPage>
          <header className="headerHome">
            <img
              src={logoDepartment}
              alt="logo de DepartEmployees"
              className="logoDepart"
            />
            <button className="btComeBackLogin" onClick={goHomeClick}>
              Home
            </button>
          </header>

          <div className="areaUser">
            <div className="hello">
              <h2 className="areaWelcome">Olá! &#128521;</h2>
            </div>
            <p className="areaWelcome">{user.firstName}</p>
          </div>

          <div className="areaInformation">
            <div className="areaDepartment">
              <h3 className="titleDepartment">&#128202; Departamentos</h3>
            </div>
            <ul className="ulCardContact">
              {departments.map((elem) => (
                <CardDepartment key={elem.id} elem={elem} />
              ))}
            </ul>
          </div>
        </StyledDepartmentPage>
      )}
    </>
  );
};
