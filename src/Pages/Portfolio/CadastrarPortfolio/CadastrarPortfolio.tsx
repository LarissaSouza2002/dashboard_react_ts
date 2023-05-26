import React from "react";
import styles from "./CadastrarPortfolio.module.css";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import Input from "../../../components/Forms/Input/Input";
import {
  Portfolio,
  createOrUpdatePortfolio,
} from "../../../Services/portfolioService";

const CadastroPortfolio: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const portfolio = location.state as Portfolio | undefined;

  /*Definindo Valores*/
  const initialValues: Portfolio = portfolio || {
    id: 0,
    link: "",
    image: "",
    descricao: "",
  };

  const validationSchema = Yup.object().shape({
    link: Yup.string().required("Campo Obrigatório"),
    image: Yup.string().required("Campo Obrigatório"),
    descricao: Yup.string().required("Campo Obrigatório"),
  });

  const onSubmit = async (
    values: Portfolio,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      await createOrUpdatePortfolio(values);
      console.log(values);
      resetForm();
      navigate("/portfolio/listagem");
      alert("Formulário enviado com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro ao enviar o formulário. Tente de novo!");
    }
  };

  return (
    <div className={styles.formWrapper}>
      <Formik
        initialValues={portfolio || initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <h2 className={styles.descricao}>Cadastrar Informações</h2>
            <Input
              label="Descrição"
              name="descricao"
              errors={errors.descricao}
              touched={touched.descricao}
            />
            <Input
              label="Imagem"
              name="image"
              errors={errors.image}
              touched={touched.image}
            />
            <Input
              label="Link"
              name="link"
              errors={errors.link}
              touched={touched.link}
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

export default CadastroPortfolio;
