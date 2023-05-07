import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import CadastrarInformacoes from "./Pages/Curriculun/Cadastrarinformacoes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/curriculo/informacoes/cadastro" element={<CadastrarInformacoes />} />
        {/* <Route path="/curriculo/cadastro/experiencia-academica" element={<CadastroExperienciaAcadêmica />} />
        <Route path="/curriculo/cadastro/experiencia-profissional" element={<CadastroExperienciaProfissional />} />
        <Route path="/portfolio/cadastro" element={<CadastroPortfolio/>} />
      <Route path="/portfolio/listagem" element={<ListaPortfolio/>} /> */}
      </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
