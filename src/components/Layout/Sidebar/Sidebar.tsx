import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Sidebar.module.css';
import { useAuth } from '../../Contexts/AuthContext';

const Sidebar: React.FC =() => {
    const {logout} = useAuth();
    
    return (
        <div className={styles.sidebar}>
            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <NavLink to= "/">
                            <h3>Home</h3>
                        </NavLink>
                    </li>
                </ul>

                <h3>Currículo</h3>
                <ul>
                    <li>
                    <NavLink to= "/curriculo/informacoes/cadastro">
                        Cadastrar Informações
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to= "/curriculo/experiencia/cadastro">
                        Cadastrar Experiências
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to= "/curriculo/experiencia/listar">
                        Listar Experiências
                    </NavLink>
                    </li>
                </ul>

                <h3>Portfólio</h3>
                <ul>
                    <li>
                        <NavLink to= "/portfolio/cadastro">
                            Cadastrar Portfólio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to= "/portfolio/listagem">
                            Listar Portfólio
                        </NavLink>
                    </li>
                </ul>

                <ul>
                    <li>
                        <NavLink onClick={logout} to= "/login">
                            <h3>Logout</h3>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>

    );
};

export default Sidebar;