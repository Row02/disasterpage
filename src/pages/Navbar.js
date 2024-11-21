import styles from './Navbar.module.css'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';

export default function Navbar(){

    const navigate = useNavigate();

    return(
        <div className={styles.header}>
            <img src={logo} alt='Logo' className={styles.logo}></img>
            <div className={styles.navBar}>
                <div className={styles.navItem} onClick={() => navigate('/')}>Home Page</div>
                <div className={styles.navItem} onClick={() => navigate('/preparedness')}>Preparedness Tips</div>
                <div className={styles.navItem}>MDRRMO Resource</div>
            </div>
            <div className={styles.reportButton}>Report Now</div>
        </div>
    );  
}