import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("O nome é obrigatório!")
    .min(3, "O nome precisa ter pelo 3 caracteres.")
    .max(127, "O nome pode ter no máximo 127 caracteres."),

  lastName: yup
    .string()
    .required("O nome é obrigatório!")
    .min(3, "O nome precisa ter pelo 3 caracteres.")
    .max(127, "O nome pode ter no máximo 127 caracteres."),

  email: yup
    .string()
    .required("O email é obrigatório")
    .email("É necessário fornecer um email."),

  password: yup
    .string()
    .required("A senha obrigatória")
    .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
    .min(6, "É necessário uma senha de pelos 6 caracteres"),

  phone: yup.string().notRequired(),

  department_id: yup.string().notRequired(),
});
