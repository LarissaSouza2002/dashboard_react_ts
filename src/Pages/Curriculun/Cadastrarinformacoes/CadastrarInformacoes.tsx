import React from 'react';

const CadastrarInformacoes: React.FC = () =>{
    return(
        <div>
            <h1>Cadastrar Informações!</h1>
            <form action="">
                <h2>Informações Pessoais</h2>
                <fieldset>
                    <label htmlFor='nome'>Nome</label>
                    <input type='text' name='nome' id='nome'/>
                </fieldset>
            </form>
        </div>
    );
};

export default CadastrarInformacoes;