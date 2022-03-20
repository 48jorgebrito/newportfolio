import styles from './About.module.css'
import Developer from '../../images/developer.jpg'
export default function About(){
    return(
        <div id='sobre' className={styles.container}> 
           <h1>Sobre</h1>
           <div className={styles.list}></div>
            
            <div className={styles.box_description}>

                <div className={styles.img}> 
                   <img src={Developer}/> 
                </div>

                <div className={styles.description}>
                    <p>
                    Sempre fui Apaixonado por tecnologia, em 2017 conheci o desenvolvimento web e deste 
                    então comecei a desenvolver vários projetos com a finalidade de aprimorar meus conhecimentos 
                    na área. Em 2019 ingressei na faculdade de analise e desenvolvimento de sistemas na Universidade
                    Estácio de Sá, que conclui em dezembro de 2021.
                    </p>
                    <p> 
                        Gosto de ser desafiado a resolver problemas usando logica e por esse motivo escolhi ser programador.  
                    </p>
                    <button className={styles.bnt} onClick={()=>{ window.location.href = "https://jorgeramirobritoportfolio.com/curriculo/"}}>
                        Currículo
                     </button>
                </div>

            </div>   
        </div>
    )
}