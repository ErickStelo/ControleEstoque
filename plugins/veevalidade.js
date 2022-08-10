import { extend } from "vee-validate";
import { required, alpha } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "Este campo é obrigatório"
});

extend("alpha", {
  ...alpha,
  message: "Apenas caracteres alfanuméricos são permitidos"
});
