import Project from "../Forms/Project"
import crowdFund from '../../images/crowdfund.png'
import easyBank from '../../images/easybank.png'
import sunnySide from '../../images/sunnyside.png'
import autoCar from '../../images/autocar.png'
import onePage from '../../images/onepage.png'
import blogR from '../../images/blogr.png'
import calculadora from '../../images/calculadora.png'
import startBoot from '../../images/startboot.png'
import susCloner from '../../images/suscloner.png'

import styles from './Service.module.css'
export default function Service(){
    return(
        <div className={styles.container}>
            <h1>Projetos</h1>
            <div className={styles.list}></div>
                <div className={styles.box_projects}>
                    <Project 
                        image={crowdFund}
                        nameProject="Crowdfund"
                        linkProject="https://jorgeramirobritoportfolio.com/crowdfunding/"
                        text="O propósito deste site é dar ideias de como construir um setup bonito, confortavel e
                        organizado.  
                        desenvolvido de acordo com o designer publicado no Frontend Mentor.
                        "/>
                    <Project 
                        image={easyBank} 
                        nameProject="Easybank"
                        linkProject="https://jorgeramirobritoportfolio.com/easybank/"
                        text="Landing Page de um Banco digital, uma loja única para gastar, economizar, fazer 
                        orçamentos, investir e muito mais."/>
                    
                    <Project 
                        image={sunnySide} 
                        nameProject="Sunnyside"
                        linkProject="https://jorgeramirobritoportfolio.com/sunnyside/"
                        text="desenvolvi esta landing page de acordo com o que foi pedido no site Frontend Mentor 
                        (site criado com o proposito de eu patricar o que aprendi sobre programação)"/>
                    
                    <Project 
                        image={autoCar} 
                        nameProject="Auto Car"
                        linkProject="https://jorgeramirobritoportfolio.com/"
                        text="Uma loja digital focada apenas em carros. Aqui nós te ajudamos com ideias para deixar 
                        seu veículo mais, rápido, bonito e confortavel. "/>
                    
                    <Project 
                        image={onePage} 
                        nameProject="One Page"
                        linkProject="https://jorgeramirobritoportfolio.com/"
                        text="Landing Page fornecida pelo site SMART BOOTSTRAP para colocar em pratica o que foi 
                        aprendido."/>
                        
                
                    <Project 
                        image={blogR} 
                        nameProject="Blogr"
                        linkProject="https://jorgeramirobritoportfolio.com/blogr-landing-page/"
                        text="Modelo de Landing Page de um blog (designer baseado no que foi publicado na pagina
                            Frontend Mentor)"
                        />
                    
                    <Project 
                        image={calculadora} 
                        nameProject="Calculadora"
                        linkProject="https://jorgeramirobritoportfolio.com/"
                        text="Uma calculadora digital criada para treinar minhas habilidades em programação."/>
                    
                    <Project 
                        image={startBoot} 
                        nameProject="Start Boot"
                        linkProject="https://jorgeramirobritoportfolio.com/"
                        text="Landing Page fornecida pelo site SMART BOOTSTRAP para colocar em pratica o que foi
                        aprendido."/>
                    
                    <Project 
                        image={susCloner} 
                        nameProject="SUS Cloner"
                        linkProject="https://jorgeramirobritoportfolio.com/"
                        text="Testei minhas minhas habilidades em HTML E CSS recriando a pagina do SUS."/>  
                </div>      
        </div>
    )

}