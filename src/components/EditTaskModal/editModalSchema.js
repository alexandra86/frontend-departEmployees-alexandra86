import * as yup from "yup";

export const editTaskSchema = yup.object().shape({
  title: yup
    .string()
    .notRequired()
    .min(3, "O nome precisa ter pelo 3 caracteres."),

  description: yup.string().notRequired(),

  due_date: yup.string().notRequired(),
});
