import { React, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { HomeContext } from "../../contexts/HomeContext.jsx";
import { registerTaskSchema } from "./registerTaskSchema.js";
import { StyledContainerModal } from "./style.js";
import { createPortal } from "react-dom";

export const RegisterTaskModal = () => {
  const { handleModal, RegisterTask, loading } = useContext(HomeContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      title: "",
      description: "",
      due_date: "",
    },
    resolver: yupResolver(registerTaskSchema),
  });

  const submit = async (data) => {
    const information = { ...data };
    await RegisterTask(information);

    reset();
  };

  const modalContent = (
    <StyledContainerModal>
      <div className="modalContent">
        <div className="headerModal">
          <h2 className="titleModal">Criar Tarefa</h2>
          <button onClick={() => handleModal()} className="btCloseModal">
            X
          </button>
        </div>
        <form className="formModal" onSubmit={handleSubmit(submit)} noValidate>
          <label htmlFor="title" className="labelModal">
            Nome
          </label>
          <input
            type="text"
            name="title"
            placeholder="Digite seu nome"
            className="inputModal"
            {...register("title")}
          />
          {errors.title && <p className="areaError">{errors.title.message}</p>}

          <label htmlFor="description" className="labelModal">
            Descrição
          </label>
          <input
            type="description"
            name="description"
            placeholder="Digite seu nome"
            className="inputModal"
            {...register("description")}
          />
          {errors.description && (
            <p className="areaError">{errors.description.message}</p>
          )}
          <label htmlFor="due_date" className="labelModal">
            Data limite
          </label>
          <input
            type="due_date"
            name="due_date"
            placeholder="Digite seu nome"
            className="inputModal"
            {...register("due_date")}
          />
          {errors.due_date && (
            <p className="areaError">{errors.due_date.message}</p>
          )}

          <button type="submit" className="btRegisterModal" disabled={loading}>
            {loading ? "Criando..." : "Criar"}
          </button>
        </form>
      </div>
    </StyledContainerModal>
  );
  return createPortal(modalContent, document.getElementById("modal-root"));
};
