 import { Link, useLocation } from "react-router-dom";
    import styles from "./Menu.module.css";

    export default function Menu() {
        const localizacao = useLocation();

        console.log(localizacao);

        return(
            <header>
                <nav className={styles.navegacao}>
                    <Link className={styles.link} to="/"> Inicio </Link>
                    <Link className={styles.link} to="sobremim"> Sobre mim </Link>
                </nav>
            </header>
        )

    }