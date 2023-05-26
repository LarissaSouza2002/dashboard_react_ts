import React from "react";
import styles from "./CadastrarExperiencia.module.css";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import Input from "../../../components/Forms/Input/Input";
import Textarea from "../../../components/Forms/Textarea/Textarea";
import Select from "../../../components/Forms/Select/Select";
import {
  Experiencia,
  createOrUpdateExperiencia,
} from "../../../Services/experienciaService";

const CadastrarExperiencia: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const experiencia = location.state as Experiencia;

  const initialValues: Experiencia = {
    id: 0,
    titulo: "",
    descricao: "",
    tipo: "",
    anoInicio: "",
    anoFim: "",
  };

  const validationSchema = Yup.object().shape({
    titulo: Yup.string().required("Campo Obrigatório"),
    descricao: Yup.string(),
    tipo: Yup.string().required("Campo Obrigatório"),
    anoInicio: Yup.number()
      .required("Campo Obrigatório")
      .typeError("Número Obrigatório"),
    anoFim: Yup.string().required("Campo Obrigatório"),
  });

  const onSubmit = async (
    values: Experiencia,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      await createOrUpdateExperiencia(values);
      console.log(values);
      resetForm();
      navigate("/curriculo/experiencia/listar");
      alert("Formulário enviado com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro ao enviar o formulário. Tente de novo!");
    }
  };

  return (
    <div className={styles.formWrapper}>
      <Formik
        initialValues={experiencia || initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <h2 className={styles.title}>Cadastrar Experincias</h2>
            <Input
              label="Titulo"
              name="titulo"
              errors={errors.titulo}
              touched={touched.titulo}
            />
            <Input
              label="Ano Inicio"
              name="anoInicio"
              errors={errors.anoInicio}
              touched={touched.anoInicio}
            />

            <Input
              label="Ano Fim"
              name="anoFim"
              errors={errors.anoFim}
              touched={touched.anoFim}
            />

            <Textarea
              label="Descrição"
              name="descricao"
              errors={errors.descricao}
              touched={touched.descricao}
            />

            <Select
              label="Tipo de Experiencia"
              name="tipo"
              options={[
                { value: "profissional", label: "Profissional" },
                { value: "academico", label: "Acadêmico" },
              ]}
              errors={errors.tipo}
              touched={touched.tipo}
            />

            <button type="submit" className={styles.button}>
              Salvar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CadastrarExperiencia;
