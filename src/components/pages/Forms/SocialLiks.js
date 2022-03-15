import styles from './SocialLiks.module.css'

export default function SocialLiks({socialIcons, direct}){

    function links(){
        window.location.href = direct 
    }

    return(
        <div className={styles.social_liks} onClick={links}>
            {socialIcons}
        </div>
    )
}