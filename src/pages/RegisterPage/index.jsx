import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledRegisterPage } from "./style";
import { registerSchema } from "./registerSchema";
import logo from "../../img/logoDepart.png";
import { Loading } from "../../components/Loading";
import InputMask from "react-input-mask";

export const RegisterPage = () => {
  const { loading, NewRegister, setLoading } = useContext(AuthContext);

  const navigate = useNavigate();

  const goLoginClick = () => {
    navigate("/");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      department_id: "",
    },
    resolver: yupResolver(registerSchema),
  });
  const submit = async (data) => {
    setLoading(true);
    setTimeout(async () => {
      const information = { ...data };
      await NewRegister(information);

      reset();
    }, 1000);
  };
  return (
    <StyledRegisterPage>
      <section className="secApresentation">
        <img src={logo} alt="imagem de costumer contact" className="logo" />
      </section>
      <section className="secRegister">
        <div className="areaRegisterAndGoToLogin">
          <h1 className="titleRegister">Cadastro</h1>
          <button className="btGoToLogin" onClick={goLoginClick}>
            Retornar para o login
          </button>
        </div>
        <form
          className="formRegister"
          onSubmit={handleSubmit(submit)}
          noValidate
        >
          <label htmlFor="firstName" className="lbRegister">
            Nome
          </label>
          <input
            type="text"
            placeholder="Digite aqui seu nome"
            className="iptRegister"
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="areaError">{errors.firstName.message}</p>
          )}

          <label htmlFor="lastName" className="lbRegister">
            Sobrenome
          </label>
          <input
            type="text"
            placeholder="Digite aqui seu nome"
            className="iptRegister"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="areaError">{errors.lastName.message}</p>
          )}
          <label htmlFor="email" className="lbRegister">
            Email
          </label>
          <input
            type="email"
            placeholder="Digite aqui seu email"
            className="iptRegister"
            {...register("email")}
          />
          {errors.email && <p className="areaError">{errors.email.message}</p>}
          <label htmlFor="password" className="lbRegister">
            Senha
          </label>
          <input
            type="password"
            placeholder="Digite aqui sua senha"
            className="iptRegister"
            {...register("password")}
          />
          {errors.password && (
            <p className="areaError">{errors.password.message}</p>
          )}
          <label htmlFor="phone" className="lbRegister">
            Telefone
          </label>
          <InputMask
            type="text"
            mask="(99) 99999-9999"
            placeholder="Digite aqui seu telefone"
            className="iptRegister"
            {...register("phone")}
          />
          {errors.phone && <p className="areaError">{errors.phone.message}</p>}

          <label htmlFor=" department_id" className="lbRegister">
            Departamento
          </label>
          <select
            name=" department_id"
            id=" department_id"
            className="iptRegister"
            {...register(" department_id")}
          >
            <option value="">Selecione</option>
            <option value="financeiro">Financeiro</option>
            <option value="compras">Compras</option>
            <option value="marketing">Marketing</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="logística">Logística</option>
          </select>
          {errors.department_id && (
            <p className="areaError">{errors.department_id.message}</p>
          )}
          <button type="submit" className="btRegister" disabled={loading}>
            {loading ? <Loading /> : "Cadastrar"}
          </button>
        </form>
      </section>
    </StyledRegisterPage>
  );
};
