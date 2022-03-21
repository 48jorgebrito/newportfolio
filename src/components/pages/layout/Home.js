import styles from './Home.module.css'
import  {useState} from 'react'

export default function Home(){
    const txt = 'Desenvolvedor Front-End'
    const [letra, setLetra] = useState([])
                
                window.onload = function typeWriter(){
                  const txtArray = txt.split('')
                   
                    txtArray.forEach((val, index)=>{
                      setTimeout(()=>{
                        setLetra((item)=> item += val)
                            console.log(letra)
                      }, 120 * index)
                     
                }) 
    
                }  
    return(
        <div className={styles.container} id="home">
           
            <div className={styles.blanket}>
               <h1>Ramiro Brito</h1>
                <p>{letra}</p>  
            </div>
            
        </div>
        
    )
}