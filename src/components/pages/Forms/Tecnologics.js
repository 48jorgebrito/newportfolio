import styles from './Tecnologics.module.css'


export default function Tecnologics({image, text, color}){
    return(
        <div className={`${styles.container} ${styles[color]}`}>
            <img src={image}/>
            <p>{text}</p>
        </div>
    )
}