import styles from './Home.module.css'


export default function Home(){

    return(
        <div className={styles.container} id="home">
           
            <div className={styles.blanket}>
               <h1>Ramiro Brito</h1>
                <p>Desenvolvedor Front-End</p>  
            </div>
            
        </div>
        
    )
}