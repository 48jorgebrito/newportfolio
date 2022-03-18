import styles from './Navbar.module.css'
import { BtnNavBar } from './SideBarData'

export default function Navbar (){

   

    return(
        <nav className={styles.navbar}>
            <ul>
                {BtnNavBar.map((val, key)=>{
                    return(
                        <li key={key} onClick={()=>{
                            window.location.href = val.id
                        }}>
                            <div className={`${styles.social_icons} `}>
                                {val.icon }
                            </div>
                            <div>
                                {val.nome }
                            </div> 
                        </li>
                )
                })} 
                  
            </ul> 
        </nav>
    )
}