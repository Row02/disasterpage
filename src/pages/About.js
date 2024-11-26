import styles from './About.module.css'
import Navbar from '../pages/Navbar'
import contact from '../assets/contact.png'
import { useNavigate } from 'react-router-dom';

export default function About() {

    const navigate = useNavigate();

    return(
        <>
            <div className={styles.container}>
                <Navbar/>
                <div className={styles.headContainer}>
                    <span style={{fontSize:"3.5rem", fontWeight:"bold", color:"white", textShadow: "2px 2px 4px black", marginBottom:"2rem"}}>Contact our Team</span>
                    <div className={styles.pictureContainer}>
                        <img src={contact} alt='Contact Us' className={styles.picture}></img>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.aboveFooter}>
                        <div className={styles.navLinks}>
                            <span onClick={() => navigate('/')}>Municipal Disaster Hub</span>
                            <span onClick={() => navigate('/resources')}>MDRRMO Resources</span>
                        </div>
                    </div>
                    <div className={styles.belowFooter}>
                        <div className={styles.iconLinks}>
                            {/* <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-reddit"></i> */}
                        </div>
                        <div className={styles.allRights}>© 2024 Municipal Disaster Hub, Santa Ana. All Rights Reserved.</div>
                    </div>
                </div>
            </div>
        </>
    );
}