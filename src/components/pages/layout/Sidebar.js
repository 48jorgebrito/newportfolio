import styles from './sidebar.module.css'
import PhotoPerfil from '../../images/perfil.jpg'
import {FaLinkedinIn, FaInstagram, FaGithub, FaFacebookF} from 'react-icons/fa'
import Navbar from '../Forms/Navbar'

export default function Sidebar(){
    return(
        <div className={styles.container}>
            <div className={styles.perfil}>
                <div className={styles.avatar}>
                   <img className={styles.img_perfil} src={PhotoPerfil}/> 
                </div>
                <h2>Ramiro Brito</h2>
                <div className={styles.social_liks}>
                    <div>
                         <FaLinkedinIn/>
                    </div>
                    <div>
                         <FaInstagram/>
                    </div>
                    <div>
                         <FaGithub/>
                    </div>
                    <div>
                         <FaFacebookF/>
                    </div>
                </div>

            </div>

            <Navbar/>
        </div>
    )
}