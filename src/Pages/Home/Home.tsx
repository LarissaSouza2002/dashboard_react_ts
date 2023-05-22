import React from "react";
import styles from './Home.module.css';

const Home: React.FC= () => {
    return(
        <main>
            <h2 className={styles.mainTitle}>Bem vindo ao meu Site!</h2>
            <p className={styles.paragraph}>Esta é a pagina inicial. Navegue pelo menu na barra lateral a esquerda para explorar ( •̀ ω •́ )✧</p>
        </main>
    );
};

export default Home;