import React from 'react';

import styles from './footer.module.css';

const Footer: React.FC = () => {
return (
<footer className={styles.footer}>
    <span>&copy; {new Date().getFullYear()} O site PERICIATECNICA.ORG é dedicado à produção de artes para os profissionais atuantes do judiciário. Todos os direitos reservados para o site PERICIATECNICA.ORG - ano 2023.</span>
</footer>
);
};

export default Footer;