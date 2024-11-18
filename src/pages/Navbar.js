import styles from './Navbar.module.css'
import logo from '../assets/logo.png'

export default function Navbar(){
    return(
        <div className={styles.header}>
            <img src={logo} alt='Logo' className={styles.logo}></img>
            <div className={styles.navBar}>
                <div className={styles.navItem}>Home Page</div>
                <div className={styles.navItem}>Preparedness Tips</div>
                <div className={styles.navItem}>MDRRMO Resource</div>
            </div>
            <div className={styles.reportButton}>Report Now</div>
        </div>
    );  
}