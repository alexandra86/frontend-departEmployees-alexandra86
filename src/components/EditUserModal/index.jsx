import { React, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { HomeContext } from "../../contexts/HomeContext.jsx";
import { StyledContainerModal } from "./style.js";
import { createPortal } from "react-dom";
import { editUserSchema } from "./editUserSchema.js";

import InputMask from "react-input-mask";
import { AuthContext } from "../../contexts/AuthContext.jsx";

export const EditUserModal = () => {
  const { handleEditUserModal, editUser, loading } = useContext(HomeContext);

  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user?.phone,
      department: user.department?.name,
    },
    resolver: yupResolver(editUserSchema),
  });

  const submit = async (data) => {
    const information = { ...data };
    await editUser(information);

    reset();
  };

  const modalUserContent = (
    <StyledContainerModal>
      <div className="modalContent">
        <div className="headerModal">
          <h2 className="titleModal">Editar Perfil</h2>
          <button
            onClick={() => handleEditUserModal()}
            className="btCloseModal"
          >
            X
          </button>
        </div>
        <form className="formModal" onSubmit={handleSubmit(submit)} noValidate>
          <label htmlFor="firstName" className="labelModal">
            Nome
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Digite seu nome"
            className="inputModal"
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="areaError">{errors.firstName.message}</p>
          )}

          <label htmlFor="firstName" className="labelModal">
            Sobrenome
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Digite seu nome"
            className="inputModal"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="areaError">{errors.lastName.message}</p>
          )}

          <label htmlFor="email" className="labelModal">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            className="inputModal"
            {...register("email")}
          />
          {errors.email && <p className="areaError">{errors.email.message}</p>}

          <label htmlFor="phone" className="labelModal">
            Telefone
          </label>
          <InputMask
            type="text"
            mask="(99) 99999-9999"
            name="phone"
            placeholder="Digite seu telefone"
            className="inputModal"
            {...register("phone")}
          />
          {errors.phone && <p className="areaError">{errors.phone.message}</p>}

          <label htmlFor=" department_id" className="lbRegister">
            Departamento
          </label>
          <select
            name=" department_id"
            id=" department_id"
            className="inputModal"
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
          <button type="submit" className="btRegisterModal" disabled={loading}>
            {loading ? "Editando..." : "Editar Perfil"}
          </button>
        </form>
      </div>
    </StyledContainerModal>
  );
  return createPortal(
    modalUserContent,
    document.getElementById("modalUserEdit-root")
  );
};
