import styles from './sidebar.module.css'
import PhotoPerfil from '../../images/perfil.jpg'
import {FaLinkedinIn, FaInstagram, FaGithub, FaFacebookF, FaWhatsapp} from 'react-icons/fa'
import Navbar from '../Forms/Navbar'
import SocialLiks from '../Forms/SocialLiks'
import { useState } from 'react'
import {FiMenu} from 'react-icons/fi'

export default function Sidebar(){
    const [openMenu, setOpenMenu] = useState (false)

    const clickMenu = () =>{
        setOpenMenu(!openMenu)
        
    }
    return(
        <div className={`${styles.container} ${openMenu !== true? " " : styles.container_active}`}>
            <div className={styles.menu} onClick={clickMenu}>
                <FiMenu/>
            </div>
            <div className={styles.perfil}>
                <div className={styles.avatar}>
                   <img className={styles.img_perfil} src={PhotoPerfil}/> 
                </div>
                <h2>Ramiro Brito</h2>
                <div className={styles.social_liks}>
                    <SocialLiks 
                        socialIcons={<FaLinkedinIn/>}
                        direct="https://www.linkedin.com/in/ramiro-brito-49609121b/"/>

                    <SocialLiks 
                        socialIcons={<FaGithub/>}
                        direct="https://github.com/48jorgebrito"/>

                    <SocialLiks 
                        socialIcons={<FaWhatsapp/>}
                        direct="https://api.whatsapp.com/send/?phone=5598987853167&text&app_absent=0"/>    

                    <SocialLiks 
                        socialIcons={<FaInstagram/>}
                        direct="https://www.instagram.com/ramirobritto"/>

                    <SocialLiks 
                        socialIcons={<FaFacebookF/>}
                        direct="https://www.facebook.com/ramiro.brito.92/"/>
                        
                    
                </div>

            </div>

            <Navbar/>
            <div className={styles.box_p}>
                <p className={styles.p}>Todos os direitos reservados</p>
                <p className={styles.p}>Ramiro Brito 2022.</p>
            </div>
            
        </div>
    )
}