import React, { Component } from 'react';
import styles from './Homepage.module.css'
import Navbar from '../pages/Navbar'
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import imageMap from '../assets/imageMap.jpg'

export default function Homepage(){

    const navigate = useNavigate();

    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        };
        scrollToTop();
    }, []);

    const Controls = ({ zoomIn, zoomOut, resetTransform }) => {
        return (
            <div className={styles.tools}>
                <button className={styles.zoomButton} onClick={() => zoomIn()}>Zoom In</button>
                <button className={styles.zoomButton} onClick={() => zoomOut()}>Zoom Out</button>
                <button className={styles.resetButton} onClick={() => resetTransform()}>Reset</button>
            </div>
        );
    };
    

    return(
        <>
            <div className={styles.container}>
                <Navbar/>
                <div className={styles.firstContent}>
                    <p style={{textShadow: '1px 1px 2px black', fontSize:"2.5rem", fontWeight:"bold"}}>Centralized Online Hub for Information and Resources of the Municipality of Santa Ana, Pampanga MDRRMO</p>
                    <div className={styles.spanHolder}>
                        <span style={{textShadow: '2px 2px 4px black', fontWeight:"bold"}}>Be Prepared.</span>
                        <span style={{textShadow: '2px 2px 4px black', fontWeight:"bold"}}>Stay Safe.</span>
                        <span style={{textShadow: '2px 2px 4px black', fontWeight:"bold"}}>Take Action Today.</span>
                    </div>
                </div>
                <div className={styles.thirdContent}>
                    <div className={styles.leftCard}>
                        <TransformWrapper
                            initialScale={1}
                            initialPositionX={0}
                            initialPositionY={0}
                        >
                            {({ zoomIn, zoomOut, resetTransform }) => (
                                <>
                                    <Controls zoomIn={zoomIn} zoomOut={zoomOut} resetTransform={resetTransform} />
                                    <TransformComponent>
                                        <img
                                            src={imageMap}
                                            alt="imageMap"
                                            className={styles.imageMap}
                                        />
                                    </TransformComponent>
                                </>
                            )}
                        </TransformWrapper>
                    </div>

                    <div className={styles.rightCard}>
                        <div className={styles.mini} style={{fontSize:"1.5rem", color:"#4b8cf7", fontWeight:"bold"}}>Stay Updated</div>
                        <div className={styles.header} style={{fontSize:"3rem", color:"black", fontWeight:"bold"}}>Evacuation Location</div>
                        <div className={styles.context} style={{fontSize:"1.5rem", color:"#374151"}}>The locations of the evacuation centers for each barangay in Santa Ana, Pampanga.</div>
                        <div className={styles.subHeader}>
                            {/* <div className={styles.features}>
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
                            </div> */}
                        </div>
                        {/* <div className={styles.discoverMore} onClick={() => navigate('/preparedness')}>Discover More</div> */}
                    </div>
                </div>  
                {/* <div className={styles.fourthContent}>
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
                </div> */}
                <div className={styles.fifthContent}>
                    <div className={styles.cardContent}>
                        <div className={styles.cardText} style={{fontSize:"1.5rem", color:"white", fontWeight:"bold"}}>The Municipal Disaster Hub has been an invaluable resource in keeping our community
                            informed and prepared during emergencies. Their timely updates and comprehensive resources have made a significant
                            difference.
                        </div>
                        <div className={styles.cardAuthor} style={{marginTop:"1.5rem", fontWeight:"bold"}}>Marites S. Franco</div>
                        <div className={styles.cardDetails}>Head of Santa Ana Pampanga MDRRMO</div>
                    </div>
                </div>
                <div className={styles.sixthContent}>
                    <div className={styles.leftCardSix}>
                        <div className={styles.sixthHeader} style={{fontSize:"3.5rem", color:"#0f172a", fontWeight:"bolder", lineHeight:"1", marginBottom:"1rem"}}>Santa Ana Community Alert</div>
                        <div className={styles.miniHeader} style={{fontSize:"1.2rem", fontWeight:"bold", color:"#0f172a", marginBottom:"1rem"}}>Stay informed, Stay safe</div>
                        <div className={styles.sixthContext} style={{fontSize:"1rem", color:"#0f172a", marginBottom:"2rem"}}>Ensure the safety and preparedness of every resident in
                            Santa Ana, Pampanga
                        </div>
                        <div className={styles.sixthButtons} style={{marginBottom:"2rem"}}>
                            <div className={styles.preparednessButton} onClick={() => navigate('/preparedness')}>Get Preparedness Tips</div>
                            <div className={styles.exploreMDRRMOButton} onClick={() => navigate('/resources')}>Explore MDRRMO Resources</div>
                        </div>
                        {/* <div className={styles.icons}>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </div> */}
                    </div>
                    <div className={styles.rightCardSix}></div>
                </div>
                <div className={styles.seventhContent}>
                    <div className={styles.aboveContent}>
                        <div className={styles.aboveLeft}>
                            <div className={styles.seventhHeader} style={{fontSize:"4rem", color:"#0f172a", fontWeight:"bold"}}>Contact our Rescue Team</div>
                            <div className={styles.seventhText} style={{fontSize:"1rem", color:"#0f172a"}}>Reach out to us for quick reporting and inquiries. We're here to help 24/7.</div>
                            <div className={styles.sectionHolder}>
                                <div className={styles.sections}>
                                    <div className={styles.secTitle}>SANTA ANA OFFICE</div>
                                    <div className={styles.secText}>Monday-Sunday 24/7</div>
                                </div>
                                <div className={styles.sections}>
                                    <div className={styles.secTitle}>Our Address</div>
                                    <div className={styles.secText}>Jose Abad Santos Ave, Santa Ana, Pampanga</div>
                                </div>
                                <div className={styles.sections}>
                                    <div className={styles.secTitle}>Get in touch</div>
                                    <div className={styles.secText}>+63 997 788 4690</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.aboveRight}></div>
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
                            {/* <i class="fa-brands fa-twitter"></i> */}
                            {/* <i class="fa-brands fa-facebook"><a href='https://www.facebook.com/mdrrmo.staana.7'></a></i> */}
                            {/* <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-reddit"></i> */}
                        </div>
                        <div className={styles.allRights}>© 2024 Municipal Disaster Hub, Santa Ana. All Rights Reserved.</div>
                    </div>
                </div>
            </div>
        </>
    );
}