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
                <div className={styles.thirdContent}>
                    <div className={styles.leftCard}></div>
                    <div className={styles.rightCard}>
                        <div className={styles.mini} style={{fontSize:"1.5rem", color:"#4b8cf7", fontWeight:"bold"}}>Stay Updated</div>
                        <div className={styles.header} style={{fontSize:"3rem", color:"black", fontWeight:"bold"}}>Latest Disaster News</div>
                        <div className={styles.context} style={{fontSize:"1.5rem", color:"#374151"}}>Get the most recent updates on ongoing disaster situations affecting Santa Ana. Stay informed with accurate and timely information.</div>
                        <div className={styles.subHeader}>
                            <div className={styles.features}>
                                <div className={styles.icon}></div>
                                <div className={styles.messageHeader} style={{fontSize:"1rem", color:"black", fontWeight:"bold"}}>Real-Time Notifications</div>
                                <div className={styles.message} style={{fontSize:"1rem", color:"#374151"}}>Receive instant alerts on your device for any new disaster updates.</div>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.icon}></div>
                                <div className={styles.messageHeader} style={{fontSize:"1rem", color:"black", fontWeight:"bold"}}>Location-Based Alerts</div>
                                <div className={styles.message} style={{fontSize:"1rem", color:"#374151"}}>Get alerts specific to your area to stay safe and informed.</div>
                            </div>
                            <div className={styles.features}>
                                <div className={styles.icon}></div>
                                <div className={styles.messageHeader} style={{fontSize:"1rem", color:"black", fontWeight:"bold"}}>Community Support</div>
                                <div className={styles.message} style={{fontSize:"1rem", color:"#374151"}}>Join community efforts and volunteer to aid those affected by disasters.</div>
                            </div>
                        </div>
                        <div className={styles.discoverMore}>Discover More</div>
                    </div>
                </div>  
                <div className={styles.fourthContent}>
                    <div className={styles.fourthHeader} style={{fontSize:"2.5rem", color:"black", fontWeight:"bold"}}>Disaster Management Initiatives</div>
                    <div className={styles.fourthSubHeader} style={{fontSize:"1rem", color:"#374151"}}>Explore our gallery showcasing the efforts and responses in managing disasters effectively.</div>
                    <div className={styles.gallery}>
                        <img src="" alt='' className={styles.imageWrap}></img>
                        <img src="" alt='' className={styles.imageWrap}></img>
                        <img src="" alt='' className={styles.imageWrap}></img>
                        <img src="" alt='' className={styles.imageWrap}></img>
                        <img src="" alt='' className={styles.imageWrap}></img>
                        <img src="" alt='' className={styles.imageWrap}></img>
                    </div>
                </div>
                <div className={styles.fifthContent}>
                    <div className={styles.cardContent}>
                        <div className={styles.cardText} style={{fontSize:"1.5rem", color:"white", fontWeight:"bold"}}>The Municipal Disaster Hub has been an invaluable resource in keeping our community
                            informed and prepared during emergencies. Their timely updates and comprehensive resources have made a significant
                            difference.
                        </div>
                        <div className={styles.cardAuthor} style={{marginTop:"1.5rem", fontWeight:"bold"}}>Yrwynn Maliwat</div>
                        <div className={styles.cardDetails}>Resident of Santa Ana</div>
                    </div>
                </div>
                <div className={styles.sixthContent}>
                    <div className={styles.leftCardSix}>
                        <div className={styles.sixthHeader} style={{fontSize:"3.5rem", color:"#0f172a", fontWeight:"bolder", lineHeight:"1", marginBottom:"1rem"}}>Santa Ana Community Alert</div>
                        <div className={styles.miniHeader} style={{fontSize:"1.2rem", fontWeight:"bold", color:"#0f172a", marginBottom:"1rem"}}>Stay informed, Stay safe</div>
                        <div className={styles.sixthContext} style={{fontSize:"1rem", color:"#0f172a", marginBottom:"2rem"}}>Join us in our mission to ensure the safety and preparedness of every Santa Ana
                            resident. Discover the latest disaster news and essential updates right here.
                        </div>
                        <div className={styles.sixthButtons} style={{marginBottom:"2rem"}}>
                            <div className={styles.preparednessButton}>Get Preparedness Tips</div>
                            <div className={styles.exploreMDRRMOButton}>Explore MDRRMO Resources</div>
                        </div>
                        <div className={styles.icons}>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                    <div className={styles.rightCardSix}></div>
                </div>
                <div className={styles.seventhContent}>
                    <div className={styles.aboveContent}>
                        <div className={styles.aboveLeft}>
                            <div className={styles.seventhHeader} style={{fontSize:"4rem", color:"#0f172a", fontWeight:"bold"}}>Contact the MDRRMO</div>
                            <div className={styles.seventhText} style={{fontSize:"1rem", color:"#0f172a"}}>Reach out to us for quick reporting and inquiries. We're here to help 24/7.</div>
                        </div>
                        <div className={styles.aboveRight}></div>
                    </div>
                    <div className={styles.belowContent}>
                        <div className={styles.sections}>
                            <div className={styles.secTitle}>SANTA ANA OFFICE</div>
                            <div className={styles.secText}>Monday-Sunday 24/7</div>
                        </div>
                        <div className={styles.sections}>
                            <div className={styles.secTitle}>Our Address</div>
                            <div className={styles.secText}>Santa Ana, Pampanga</div>
                        </div>
                        <div className={styles.sections}>
                            <div className={styles.secTitle}>Get in touch</div>
                            <div className={styles.secText}>+63 912 3456 789</div>
                        </div>
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