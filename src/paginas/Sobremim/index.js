import styles from './Sobremim.module.css';
import bannerPrincipal from 'assets/bannerAlt.png';

export default function Sobremim () {
    return (
        <div className={styles.banner}> 
    
            <p className={styles.paragrafo}> Music Verse é um projeto da Faculdade USJT Desenvolvido em 2023
                por Ana Julia Irineu Nascimento, Brenner Mello Defanti, Gabriel Rezende, Vitor Lopes e Kelwin Martins. 
                A idéia era desenvolver uma rede social voltada para amantes da musica, onde os usúarios pudessem
                compartilhar suas experiências e conhecer outras pessoas que compartilhassem o amor pela música.
                
            </p>
            

            <div className={styles.imagens}>
                <img className={styles.bannerAlt} 
                src={bannerPrincipal} 
                aria-hidden={true}/>
            

            </div>
        
        
        
        
        
        </div>
       

    )

}



