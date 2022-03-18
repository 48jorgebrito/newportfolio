import styles from './Contact.module.css'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {BsPhone} from 'react-icons/bs'
import {TiLocationOutline} from 'react-icons/ti'
export default function Contact(){
    return(
        <div id='contato' className={styles.container}>
            <h1>Contato</h1>
            <div className={styles.list}></div>
            
            <div className={styles.box_contact}>
                <div className={styles.box_contact_left}>
                    <div className={styles.contact_single}>
                        
                        <div className={styles.icons}>
                            <TiLocationOutline />
                        </div>

                        <div>
                            <h2>Localização:</h2>
                            <p>AV Mato Grosso, Chacara Brasil, Turu, São Luis-MA </p> 
                        </div>
                    </div>

                    <div className={styles.contact_single}>
                        
                        <div className={styles.icons}>
                            <HiOutlineMailOpen />
                        </div>
                        
                        <div>
                            <h2>Email:</h2>
                            <p>jorgeramirobrito19@gmail.com </p> 
                        </div>
                    </div>

                    <div className={styles.contact_single}>
                        
                        <div className={styles.icons}>
                            <BsPhone />
                        </div>
                        
                        <div>
                            <h2>Celular:</h2>
                            <p>(98) 9 8785-3167 </p> 
                        </div>

                    </div>
                    
                </div>
                
                <form className={styles.box_contact_rigth}>
                        <input className={styles.input} type="text" placeholder='Nome'/>
                        <input className={styles.input} type="email" placeholder='Email'/>
                        <textarea className={styles.input} placeholder='Mensagem'></textarea>
                        <input className={styles.btn} type='submit'/>
                 </form>
                
            </div>
        </div>
    )

}