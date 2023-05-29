import { useHref } from 'react-router-dom';
import styles from './Banner.module.css';
import bannerPrincipal from 'assets/bannerPrincipal.png';

export default function Banner () {
    return (
        <div className={styles.banner}>
            
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}> Embarque nessa! Music Verse</h1>
                <p className={styles.paragrafo}> Music Verse é uma rede social exclusivamente voltada
                    para o mundo o da música beneficiando músicos e público.
                    Atráves da recém-lançada versão web, a rede funciona,
                    principalmente, como um extenso e direcional canal de divulgação
                    de eventos musicais.
            
                </p>

                <a className={styles.link_rede}> Git Hub </a>
            </div>
            <div className={styles.imagens}>
                <img className={styles.bannerPrincipal} 
                src={bannerPrincipal} 
                aria-hidden={true}/>
            

            </div>

    
        </div>

  
    )

}