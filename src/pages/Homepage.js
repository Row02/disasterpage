import React, { Component } from 'react';
import styles from './Homepage.module.css'
import Navbar from '../pages/Navbar'
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
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

    const [mapSrc, setMapSrc] = useState(
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123263.9333542932!2d120.66948473552337!3d15.10344349382701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396fbb1da334319%3A0x51f69699c0243f68!2sSanta%20Ana%2C%20Pampanga!5e0!3m2!1sen!2sph!4v1733055550749!5m2!1sen!2sph"
    );
    
    const handlePinClick = (newSrc) => {
        setMapSrc(newSrc);
        const thirdContent = document.querySelector(`.${styles.thirdContent}`);
        if (thirdContent) {
            thirdContent.scrollIntoView({behavior: "smooth", block: "start"});
        }
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
                        <iframe
                        src={mapSrc}
                        className={styles.mapFrame}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    <div className={styles.rightCard}>
                        <div className={styles.mini} style={{ fontSize: "1.5rem", color: "#4b8cf7", fontWeight: "bold" }}>
                        Stay Updated
                        </div>
                        <div className={styles.header} style={{ fontSize: "3rem", color: "black", fontWeight: "bold" }}>
                        Evacuation Location
                        </div>
                        <div className={styles.context} style={{ fontSize: "1.5rem", color: "#374151" }}>
                        The locations of the evacuation centers for each barangay in Santa Ana, Pampanga.
                        </div>
                        <div className={styles.buttonContainer}>
                            <button
                                className={styles.pinButton}
                                onClick={() => handlePinClick("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123263.9333542932!2d120.66948473552337!3d15.10344349382701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396fbb1da334319%3A0x51f69699c0243f68!2sSanta%20Ana%2C%20Pampanga!5e0!3m2!1sen!2sph!4v1733225263080!5m2!1sen!2sph")}
                            >
                                Santa Ana
                            </button>
                            <button
                                className={styles.pinButton}
                                onClick={() => handlePinClick("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.3536156686637!2d120.70957809999999!3d15.138912500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396fbb1da334319%3A0xef8d5c0ed75be467!2s4PQ5%2BHR8%2C%20Santa%20Ana%2C%20Pampanga!5e0!3m2!1sen!2sph!4v1733225369976!5m2!1sen!2sph")}
                            >
                                San Pablo Evacuation Center
                            </button>
                            <button
                                className={styles.pinButton}
                                onClick={() => handlePinClick("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481.5013858431256!2d120.74325086547694!3d15.102717664527152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396fbb1da334319%3A0xe430393fceebaa64!2s4P3V%2B3CP%2C%20Santa%20Ana%2C%20Pampanga!5e0!3m2!1sen!2sph!4v1733225493291!5m2!1sen!2sph")}
                            >
                                San Agustin Evacuation Center
                            </button>
                            <button
                                className={styles.pinButton}
                                onClick={() => handlePinClick("https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3852.0845584641897!2d120.765685309923!3d15.098667664629494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s7Q723QX9%2BF86!5e0!3m2!1sen!2sph!4v1733225664232!5m2!1sen!2sph")}
                            >
                                San Bartolome Evacuation Center
                            </button>
                            <button
                                className={styles.pinButton}
                                onClick={() => handlePinClick("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d962.943212924848!2d120.77121030039797!3d15.115842664195334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396fbb1da334319%3A0x504d0758a65bfa97!2s4Q8C%2B8PQ%2C%20Santa%20Ana%2C%20Pampanga!5e0!3m2!1sen!2sph!4v1733225751917!5m2!1sen!2sph")}
                            >
                                San Isidro Evacuation Center
                            </button>
                            <button
                                className={styles.pinButton}
                                onClick={() => handlePinClick("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1926.066991153887!2d120.76326967023937!3d15.095942664698335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396fbb1da334319%3A0x8d58f2f9c97cd98a!2s3QW7%2B9R%2C%20Santa%20Ana%2C%20Pampanga!5e0!3m2!1sen!2sph!4v1733227068754!5m2!1sen!2sph")}
                            >
                                San Joaquin Evauation Center
                            </button>
                            <button
                                className={styles.pinButton}
                                onClick={() => handlePinClick("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.2655251422107!2d120.76725320992273!3d15.088687664881562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396fba5543ec2e9%3A0x35fbdce85608ff62!2s094%20San%20Jose%20Rd%2C%20Santa%20Ana%2C%20Pampanga!5e0!3m2!1sen!2sph!4v1733227109012!5m2!1sen!2sph")}
                            >
                                San Jose Evacuation Center
                            </button>
                            <button
                                className={styles.pinButton}
                                onClick={() => handlePinClick("https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3852.3510718795465!2d120.76037280992256!3d15.083967665000692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s7Q723QM7%2BH5P!5e0!3m2!1sen!2sph!4v1733228292002!5m2!1sen!2sph")}
                            >
                                San Juan Evacuation Center
                            </button>
                            <button
                                className={styles.pinButton}
                                onClick={() => handlePinClick("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.9321512384313!2d120.77715410992303!3d15.10706766441724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396fbb1da334319%3A0x7f45fd436862275d!2s4Q4H%2BRVH%2C%20Santa%20Ana%2C%20Pampanga!5e0!3m2!1sen!2sph!4v1733228370143!5m2!1sen!2sph")}
                            >
                                San Nicolas Evacuation Center
                            </button>
                            <button
                                className={styles.pinButton}
                                onClick={() => handlePinClick("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.443621393146!2d120.76523210992266!3d15.078859665129695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396fbb7c332f9c7%3A0xb9f003aa7fd4a9a0!2s055%20San%20Pedro%20Rd%2C%20Santa%20Ana%2C%20Pampanga!5e0!3m2!1sen!2sph!4v1733228509397!5m2!1sen!2sph")}
                            >
                                San Pedro Evacuation Center
                            </button>
                            <button
                                className={styles.pinButton}
                                onClick={() => handlePinClick("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.8940364955097!2d120.76690410992309!3d15.109167664364103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396fbb1da334319%3A0x29b028f1b6eb7cc7!2s4Q59%2BMQ9%2C%20Santa%20Ana%2C%20Pampanga!5e0!3m2!1sen!2sph!4v1733228544657!5m2!1sen!2sph")}
                            >
                                San Roque
                            </button>
                            <button
                                className={styles.pinButton}
                                onClick={() => handlePinClick("https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3852.1927892219464!2d120.7784804!3d15.0926997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396fba1e787f22b%3A0x73dfa78bea01d986!2sSanta%20Lucia%20Barangay%20Hall%20%2F%20Basketball%20Court!5e0!3m2!1sen!2sph!4v1733228870097!5m2!1sen!2sph")}
                            >
                                Santa Lucia
                            </button>
                            <button
                                className={styles.pinButton}
                                onClick={() => handlePinClick("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.500987439176!2d120.77235720992255!3d15.07569266520953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396fbb1da334319%3A0xb1f196582f7ff5a7!2s3QGF%2B7X%2C%20Santa%20Ana%2C%20Pampanga!5e0!3m2!1sen!2sph!4v1733228611487!5m2!1sen!2sph")}
                            >
                                Santa Maria Evacuation Center
                            </button>
                            <button
                                className={styles.pinButton}
                                onClick={() => handlePinClick("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1925.9570010030986!2d120.76951967023963!3d15.10806766439195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396fbb1da334319%3A0x9bc445f8e80f6d21!2s4Q5C%2B68%2C%20Santa%20Ana%2C%20Pampanga!5e0!3m2!1sen!2sph!4v1733228942172!5m2!1sen!2sph")}
                            >
                                Santiago Evacuation Center
                            </button>
                            <button
                                className={styles.pinButton}
                                onClick={() => handlePinClick("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.6756845702193!2d120.73873220992346!3d15.12119266406008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396fbb1da334319%3A0x35b659c2ccee1756!2s4PCR%2BFG%2C%20Santa%20Ana%2C%20Pampanga!5e0!3m2!1sen!2sph!4v1733229142303!5m2!1sen!2sph")}
                            >   Sto. Rosario Evacuation Center
                            </button>
                        </div>
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