import React, {useEffect, useState} from "react";
import styles from "./CadastrarInformacoes.module.css";
import * as Yup from "Yup";
import { Formik, Form} from "formik";
import Input from "../../../components/Forms/Input/Input";
import Textarea from "../../../components/Forms/Textarea/Textarea";
import { Informacoes, updateInformacoes, getInformacoes} from "../../../Services/informacoesService";

const CadastrarInformacoes: React.FC = () => {
  const [informacoes, setInformacoes] = useState<Informacoes>({} as Informacoes);
  /*Definindo Valores*/
  const initialValues: Informacoes = {
    id: 1,
    foto: '',
    nome: '',
    cargo: '',
    resumo: '',
  };

  const validationSchema = Yup.object().shape({
    foto: Yup.string().required('Campo Obrigatório'),
    nome: Yup.string().required('Campo Obrigatório'),
    cargo: Yup.string().required('Campo Obrigatório'),
    resumo: Yup.string().required('Campo Obrigatório'),
  });

  const fetchInformacao = async () => {
    try {
      const informacao = await getInformacoes();
      setInformacoes(informacao);
    } catch (error) {
      console.error('Erro ao buscar informações:', error);
    }
      };
    
      useEffect(() => {
        fetchInformacao();
      }, 
      );


  //lógica de envio para o Back
  const onSubmit = async (
    values: Informacoes,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      await updateInformacoes(values);
      setInformacoes(values);
      console.log(values);
      alert('Informações enviadas com sucesso!');

    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('Ocorreu um erro ao enviar o formulário. Tente novamente.');
    }
  
  };

  return (
    <div className={styles.formWrapper}>
      <Formik
        initialValues={informacoes}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <h2 className={styles.title}>Cadastrar Informações</h2>

            <Input
              label="Foto"
              name="foto"
              errors={errors.foto}
              touched={touched.foto}
            />

            <Input
              label="Nome"
              name="nome"
              errors={errors.nome}
              touched={touched.nome}
            />

            <Input
              label="Cargo"
              name="cargo"
              errors={errors.cargo}
              touched={touched.cargo}
            />
            
            <Textarea
              label="Resumo"
              name="resumo"
              errors={errors.resumo}
              touched={touched.resumo}
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

export default CadastrarInformacoes;
