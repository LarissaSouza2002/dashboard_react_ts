import React, {useEffect} from "react";
import styles from "./ListarPortfolio.module.css";
import { useNavigate } from "react-router-dom";
import { Portfolio, getPortfolio, deletePortfolio } from "../../../Services/portfolioService";

const ListarPortfolio: React.FC =() =>{
    const navigate = useNavigate();
    const [portfolio, setPortfolio] = React.useState<Portfolio[]>([]);

    const fetchPortfolio = async () =>{
        try {
            const portfolio = await getPortfolio();
            setPortfolio(portfolio);
        } catch (error) {
            console.log('Erro ao buscar Portfólios', error);
            
        }
    }
        
    useEffect(() => {
        fetchPortfolio();
    }, 
    []);
    
    const handleEdit = async (portfolio: Portfolio) =>{
        navigate("/portfolio/cadastro", {state: portfolio});
    };
    
    const handleDelete = async (id: number) =>{
        try {
            await deletePortfolio(id);
            fetchPortfolio();
            alert("Portfolio excluido com sucesso!")
        } catch (error) {
            console.log('Erro ao excluir portfolio');
            alert("Ocorreu um erro ao excluir o portfolio.");
        }
    };


    return(
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Image</th>
                    <th>Link</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {portfolio.map((itemPortfolio, index) => (
                <tr key={index}>
                    <td>{itemPortfolio.descricao}</td>
                    <td><img src={itemPortfolio.image} alt={itemPortfolio.descricao} className={styles.image}/></td>
                    <td><a href={itemPortfolio.link} target="_blank" rel="noreferrer">{itemPortfolio.link}</a></td>
                    <td>
                        <button onClick={() => handleEdit(itemPortfolio)}> Editar </button>
                        <button onClick={() => handleDelete(itemPortfolio.id)}> Excluir </button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListarPortfolio;
