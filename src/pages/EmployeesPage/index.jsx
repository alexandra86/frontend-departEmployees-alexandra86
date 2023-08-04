import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { StyledDepartmentPage } from "./style";
import logoDepartment from "../../img/LogoDepart.png";
import { useNavigate } from "react-router-dom";
import { CardEmployee } from "../../components/CardEmployee";

export const EmployeesPage = () => {
  const { user, newLoading } = useContext(AuthContext);
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost/api/users");
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      }
    };

    fetchEmployees();
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
            <button className="btComeBackHome" onClick={goHomeClick}>
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
              <h3 className="titleDepartment">&#128064; Funcionários</h3>
            </div>
            <ul className="ulCardContact">
              {employees.map((elem) => (
                <CardEmployee key={elem.id} elem={elem} />
              ))}
            </ul>
          </div>
        </StyledDepartmentPage>
      )}
    </>
  );
};
