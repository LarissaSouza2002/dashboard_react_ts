import React from "react";
import styles from './Button.module.css';

interface ButtonProps {
    type?: "button" | "submit";
    // onClick?: () => void;
    // color?: "blue" | "red";
    children: React.ReactNode;
}


const Button: React.FC<ButtonProps> = ({type = "button", children}) => {
    return <button type={type} className={styles.button}>
        {children}
        </button>
};

export default Button;