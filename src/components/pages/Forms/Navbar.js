import styles from './Navbar.module.css'
import {BiHome, BiUser} from 'react-icons/bi'
import {ImFilesEmpty} from 'react-icons/im'
import {MdOutlineContacts} from 'react-icons/md'
import {RiUserSettingsLine} from 'react-icons/ri'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


export default function Navbar (){

    

    return(
        <nav className={styles.navbar}>
               <ul>
                   <li> <BiHome className={styles.social_icons}/> Home</li>
                   <li><BiUser className={styles.social_icons}/> Sobre</li>
                   <li><RiUserSettingsLine className={styles.social_icons}/> Skills</li>
                   <li><ImFilesEmpty className={styles.social_icons}/> Projetos</li>
                   <li> <MdOutlineContacts className={styles.social_icons}/>Contato</li>
               </ul>
            </nav>
    )
}