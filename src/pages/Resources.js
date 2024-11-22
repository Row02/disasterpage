import React from 'react';
import styles from './Resources.module.css';
import Navbar from '../pages/Navbar';
import inventory from '../assets/inventory.pdf';

export default function Resources(){
    return(
        <>
            <div className={styles.container}>
                <Navbar/>
                <div className={styles.firstContainer}>
                    <div className={styles.firstCard}>
                        <div className={styles.header} style={{fontSize:"4rem", color:"#0f172a", fontWeight:"bold", lineHeight:"1.1"}}>MDRRMO <br/>Resources</div>
                        <div className={styles.context} style={{fontSize:"1rem", color:"#374151", marginTop:"1rem"}}>Explore the comprehensive resources and aid provided by the Santa Ana MDRRMO to support our community in times of need.</div>
                    </div>
                </div>
                <div className={styles.secondContainer}>
                    <div className={styles.titleHeader} style={{fontSize:"3rem", fontWeight:"bold", color:"black"}}>Essential Resources</div>
                    <div className={styles.titleText} style={{fontSize:"1rem", color:"#0f172a", marginBottom:"2rem"}}>View our extensive collection of rescue equipment, medical supplies, and other essential resources ready to aid in disaster situations.</div>
                    <embed src={inventory} type='application/pdf' width='100%' height='600px' style={{overflow:"scroll"}}></embed>
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