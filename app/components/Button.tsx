import styles from "./Button.module.css";

export function Button(){
    return(
        <div>
            <button type="button" className={styles.error}>
                Destroy
            </button>
        </div>
    );
}