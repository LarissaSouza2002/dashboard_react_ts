import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
    return(
        <header className={styles.header}>
            <div className={styles.foto}>
                <h1> dashboard do meu site pessoal</h1>
            </div>
    </header>
    );
};

export default Header;



{/* <img id="logo" src={logo}/>

<div className="principal">
    <h1 className="titulo-principal"> Fátima Cruz</h1>
    <h2 className="titulo-centralizado"> Perícia Técnica</h2>
</div> */}
{/* <nav>
    <div>
        <Link to="/">Home</Link>
    </div>

    <div>
        <Link to="/portfolio">Portfólio</Link>
    </div>

    <div>
        <Link to="/contato">Contato</Link>
    </div>
</nav> */}