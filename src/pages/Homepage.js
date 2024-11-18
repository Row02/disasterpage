import React from 'react';
import styles from './Homepage.module.css'
import Navbar from '../pages/Navbar'

export default function Homepage(){
    return(
        <>
            <div className={styles.container}>
                <Navbar/>
                <div className={styles.firstContent}>
                    <h1>Be Prepared.</h1>
                    <h1>Stay Safe.</h1>
                    <h1>Take Action Today.</h1>
                    <p>Stay updated with the latest incident reports and alerts from the Santa Ana, <br/>Pampanga MDRRMO.</p>
                </div>
                <div className={styles.secondContent}>
                    <div className={styles.cardContainer}>
                        <div className={styles.mini} style={{fontSize:"1rem", color:"#4b8cf7"}}>Real-Time Alerts for Santa Ana</div>
                        <div className={styles.header} style={{fontSize:"3rem", color:"black", fontWeight:"bold"}}>Urgent Disaster Updates</div>
                        <div className={styles.context}>Access critical information and stay prepared with the latest updates from the Municipal Disaster Risk Reduction and Management Office.</div>
                        <div className={styles.buttons}>
                            <div className={styles.learnMore}>Learn More</div>
                            <div className={styles.viewResource}>View Resources</div>
                        </div>
                    </div>
                </div>  
            </div>
        </>
    );
}