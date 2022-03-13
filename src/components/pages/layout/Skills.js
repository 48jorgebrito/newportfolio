import styles from './Skills.module.css'
import Tecnologics from '../Forms/Tecnologics'
import Html_image from '../../images/html5-original.svg'
import Css_image from '../../images/css3-original.svg'
import React_image from '../../images/react-original.svg'
import Git_image from '../../images/git-original.svg'
import Js_image from '../../images/javascript-original.svg'




export default function Skills(){
    return(
        <div className={styles.container}>
            <h1>Skills</h1>
           <div className={styles.list}></div>
           
           <div className={styles.box_skills}>
                <Tecnologics 
                    image={Html_image} 
                    text="HTMl é uma linguagem de marcação utilizada na construção de páginas na Web.
                    Documentos HTML podem ser interpretados por navegadores."
                    color="html_border"/>
                <Tecnologics 
                    image={Css_image} 
                    text="O CSS é uma linguagem de folhas de estilos que é utilizada para definir como os
                    documentos escritos na linguagem de marcação HTML."
                    color="css_border"/>
                    
                <Tecnologics 
                    image={Js_image} 
                    text="JavaScript é uma linguagem de programação interpretada estruturada, de script em
                    alto nível com tipagem dinâmica fraca e multiparadigma."
                    color="js_border"/>
                <Tecnologics 
                    image={React_image} 
                    text="React JS é uma biblioteca JavaScript para a criação de interfaces de usuário — ou UI (user interface)."
                    color="react_border"/>
                <Tecnologics 
                    image={Git_image} 
                    text=" GIT é um Sistema de Controle de Versões Distribuído — ou DVCS.
                    Este sistema de controle possue a função de registrar quaisquer alterações feitas em cima de
                    um código, armazenando essas informações e permitindo que, caso seja necessário, um(a) 
                    programador(a) possa regredir a versões anteriores de uma aplicação de modo simples e rápido."
                    color="git_border"/>
           </div>
           
        </div>
    )
}