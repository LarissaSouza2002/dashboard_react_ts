import { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import styles from './Layout.module.css';

interface Props {
    children: ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.main}>
            <Sidebar />
            <div className={styles.content}>{children}</div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
