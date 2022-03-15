import styles from './Project.module.css'
import { FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiJavascript} from 'react-icons/si'



export default function Project({image,nameProject,linkProject,text}){

    function links(){
        window.location.href = linkProject
    }
    return(
        
        <div className={styles.project_content}>
           <div className={styles.img_content}>
               
                <img src={image} className={styles.img} onClick={links}/>
               
                     
                
           </div>

           <div className={styles.project_description}>
               <h2  className={styles.h2} onClick={links}>{nameProject} </h2>
               
               <div className={styles.box_skills}> 
                   <FaHtml5 className={styles.logo_html}/> 
                    <FaCss3Alt className={styles.logo_css}/> 
                    <SiJavascript className={styles.logo_javaScript}/> 
                </div>
                
                <p className={styles.project_p}>{text}</p>
           </div>
        </div>

    )
}