import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../Pages/Home";
import CadastrarInformacoes from "../Pages/Curriculun/Cadastrarinformacoes";
import CadastrarExperiencia from "../Pages/Curriculun/CadastrarExperiencia";
import ListarExperiencia from "../Pages/Curriculun/ListarExperiencia";
import CadastroPortfolio from "../Pages/Portfolio/CadastrarPortfolio";
import ListarPortfolio from "../Pages/Portfolio/ListarPortfolio";
import { useAuth } from "../components/Contexts/AuthContext";


const AuthRoutes: React.FC = () => {
    const {authenticated, isLoading} = useAuth();

    if (isLoading) {
        return (
        <p>Carregando...</p>
        )
    }
    if (!authenticated) {
        return <Navigate to="/login"/>
    }
    return(
    <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/curriculo/informacoes/cadastro" element={<CadastrarInformacoes/>} />
            <Route path="/curriculo/experiencia/cadastro" element={<CadastrarExperiencia/>} />
            <Route path="/curriculo/experiencia/listar" element={<ListarExperiencia/>} />
            <Route path="/portfolio/cadastro" element={<CadastroPortfolio/>} />
            <Route path="/portfolio/listagem" element={<ListarPortfolio/>} />
            </Routes>
    </Layout>
    )
}

export default AuthRoutes;