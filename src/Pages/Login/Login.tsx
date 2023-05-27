import React from "react";
import styles from "./Login.module.css";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { login as loginService} from "../../Services/authService";
import { useAuth } from "../../components/Contexts/AuthContext";
import Input from "../../components/Forms/Input";
import Button from "../../components/Common/Button";
import Title from "../../components/Common/Title";
import { Formik, Form } from "formik";

interface LoginValues {
    email: string;
    password: string;
}

const initialValues: LoginValues = {
    email: "",
    password: "",
}

const validationSchema = Yup.object().shape({
    email: Yup.string()
    .email("E-mail inválido!")
    .required("O E-mail é obrigatório!!"),

    password: Yup.string()
    .min(6, "A senha deve conter no mmínimo 6 caracteres.")
    .required("A senha é obrigatória!"),
});


const Login: React.FC = () => {
    const navigate = useNavigate();
    const {login} = useAuth();

    const onSubmit = async (values: LoginValues) =>{
        try {
            const user = await loginService(values.email, values.password);
            login(user);
            navigate("/");
            console.log(values);
        } catch (error) {
            console.log(error);
            alert("Erro ao realizar login.")
            
        }
    };

    return (
        <div className={styles.loginWrapper}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >

                {({errors, touched}) => (
                    <Form className={styles.form}>

                    <Title>Meu Site Pessoal</Title>

                    <Input
                            label="Email"
                            name="email"
                            type="email"
                            errors={errors.email}
                            touched={touched.email}
                            />

                        <Input
                            label="Password"
                            name="password"
                            type="password"
                            errors={errors.password}
                            touched={touched.password}
                            />

                    <Button type="submit">Login</Button>
                    </Form>
                    
                    )}
            </Formik>
</div>
    );
};

export default Login;
