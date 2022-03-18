import styles from './sidebar.module.css'
import PhotoPerfil from '../../images/perfil.jpg'
import Navbar from '../Forms/Navbar'
import { useState } from 'react'
import {FiMenu} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'

import { SocialLiks } from '../Forms/SideBarData'

export default function Sidebar(){
    const [openMenu, setOpenMenu] = useState (false)

    const clickMenu = () =>{
        setOpenMenu(!openMenu)
    }
    return(
        <div className={`${styles.container} ${openMenu !== true? " "  : styles.container_active }`}>
            
            
            <button className={`${styles.menu} ${openMenu !== true? " "  : styles.menu_active }`} onClick={clickMenu}>
                {openMenu!== true ? <FiMenu/> :<AiOutlineClose/> }
            </button>
                    
            <div className={styles.perfil}>
                <div className={styles.avatar}>
                <img className={styles.img_perfil} src={PhotoPerfil}/> 
                </div>
                <h2>Ramiro Brito</h2>
                        
                <div className={styles.containerSocialLiks}>
                    
                    {SocialLiks.map((val, index)=>{
                        return(
                            <div className={styles.social_liks}  key={index}
                                onClick={()=>{
                                window.location.href = val.redirect
                            }} >
                                {val.socialIcons}
                            </div> 
                        )

                    })}
                    
                </div>
            </div>

            <Navbar />

            <div className={styles.box_p}>
                <p className={styles.p}>Todos os direitos reservados</p>
                <p className={styles.p}>Ramiro Brito 2022.</p>
            </div>
            
        </div>
    )
}