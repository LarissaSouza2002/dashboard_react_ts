import React from "react"; 
import styles from './Textarea.module.css'
import { Field, ErrorMessage } from "formik";


interface TextareaProps{
    label?: string;
    name: string;
    errors?: string;
    touched?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({label, name, errors, touched}) =>{
    return(
        <div className={styles.formGroup}>
            {label && (
                <label htmlFor={name} className={styles.label}>
                    {label}
                </label>
            )}
            <Field as="textarea" id={name} name={name} className={`${styles.textarea} ${touched && errors && styles.errors}`}/>
            <ErrorMessage name={name} component="div" className={styles.errorMsg}/>
        </div>
    );
};

export default Textarea;
