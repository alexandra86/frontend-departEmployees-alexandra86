import * as yup from "yup";

export const registerTaskSchema = yup.object().shape({
  title: yup
    .string()
    .required("O nome é obrigatório!")
    .min(3, "O nome precisa ter pelo 3 caracteres."),

  description: yup.string().notRequired(),

  due_date: yup.string().required("Campo Obrigatório"),
});
