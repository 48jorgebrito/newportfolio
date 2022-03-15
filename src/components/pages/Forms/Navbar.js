import styles from './Navbar.module.css'
import {BiHome, BiUser} from 'react-icons/bi'
import {ImFilesEmpty} from 'react-icons/im'
import {MdOutlineContacts} from 'react-icons/md'
import {RiUserSettingsLine} from 'react-icons/ri'
import { useState} from 'react'


export default function Navbar (){

    const [btn, setBtn] = useState(false)

    const clickBtn = () => {
        setBtn(!btn)
        console.log(btn)

    }

    return(
        <nav className={styles.navbar}>
               <ul>
                   <li onClick={clickBtn}><BiHome className={styles.social_icons}/> Home</li>
                   <li onClick={clickBtn}><BiUser className={styles.social_icons}/> Sobre</li>
                   <li onClick={clickBtn}><RiUserSettingsLine className={styles.social_icons}/> Skills</li>
                   <li onClick={clickBtn}><ImFilesEmpty className={styles.social_icons}/> Projetos</li>
                   <li onClick={clickBtn}> <MdOutlineContacts className={styles.social_icons}/>Contato</li>
               </ul>
            </nav>
    )
}