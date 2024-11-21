import React from 'react';
import styles from './Preparedness.module.css'
import Navbar from '../pages/Navbar'

export default function Preparedness(){
    return(
        <>
            <div className={styles.container}>
                <Navbar/>
                <div className={styles.firstContainer}>
                    <div className={styles.firstCard}>
                        <div className={styles.mini} style={{fontSize:"1rem", color:"#4b8cf7", fontWeight:"bold"}}>Stay Informed, Stay Safe</div>
                        <div className={styles.header} style={{fontSize:"4rem", color:"#0f172a", fontWeight:"bold", lineHeight:"1.1"}}>Disaster <br/>Preparedness Guide</div>
                        <div className={styles.context} style={{fontSize:"1rem", color:"#374151", marginTop:"1rem"}}>Essential strategies and resources for Santa Ana residents to effectively prepare for potential disasters.</div>
                    </div>
                </div>
                <div className={styles.secondContainer}>
                    <div className={styles.aboveContent}>
                        <div className={styles.aboveTitle} style={{fontWeight:"bold", fontSize:"2rem", color:"black"}}>Preparedness Steps</div>
                        <div className={styles.aboveText}>Comprehensive steps to ensure safety during fires, floods, typhoons, and earthquakes.</div>
                    </div>
                    <div className={styles.belowContent}>
                        <div className={styles.cardInfo}>Fire Safety Precautions</div>
                        <div className={styles.cardInfo}>Flood Preparedness Measures</div>
                        <div className={styles.cardInfo}>Typhoon Safety Tips</div>
                        <div className={styles.cardInfo}>Earthquake Readiness Guidelines</div>
                    </div>
                </div>
                <div className={styles.thirdContent}>
                    <div className={styles.cardContent}>
                        <div className={styles.cardText} style={{fontSize:"1.5rem", color:"white", fontWeight:"bold"}}>The Municipal Disaster Hub has been an invaluable resource in keeping our community
                            informed and prepared during emergencies. Their timely updates and comprehensive resources have made a significant
                            difference.
                        </div>
                        <div className={styles.cardAuthor} style={{marginTop:"1.5rem", fontWeight:"bold"}}>Yrwynn Maliwat</div>
                        <div className={styles.cardDetails}>Resident of Santa Ana</div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.aboveFooter}>
                        <div className={styles.navLinks}>
                            <span>Municipal Disaster Hub</span>
                            <span>Emergency Help</span>
                            <span>MDRRMO Resources</span>
                            <span>Contact Us</span>
                        </div>
                    </div>
                    <div className={styles.belowFooter}>
                        <div className={styles.iconLinks}>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-reddit"></i>
                        </div>
                        <div className={styles.allRights}>© 2023 Municipal Disaster Hub, Santa Ana. All Rights Reserved.</div>
                    </div>
                </div>
            </div>
        </>
    );
}