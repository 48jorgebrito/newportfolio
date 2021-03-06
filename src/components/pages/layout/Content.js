import styles from './Content.module.css'
import Home from './Home.js'
import About from './About.js'
import Skills from './Skills'
import Contact from './Contact'
import Service from './Service'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function Content(){
    return(
        <div className={styles.container}>
          
          <Home/>
          <About/>  
          <Skills/>    
          <Service/>
          <Contact/>
        </div>
        
    )
}