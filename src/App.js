import styles from './App.module.css'
import Sidebar from './components/pages/layout/Sidebar'
import Content from './components/pages/layout/Content'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router className={styles.container}>
      <Sidebar/>
      
        
          <Content/>
        
      
    </Router>
  )
}

export default App
