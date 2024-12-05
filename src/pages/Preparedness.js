import styles from './Preparedness.module.css'
import Navbar from '../pages/Navbar'
import image1 from '../assets/image1.jpg';
import image4 from '../assets/image4.jpg';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Preparedness(){

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        scrollToTop();
    }, []);

    const navigate = useNavigate();

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };
    
    return(
        <>
            <div className={styles.container}>
                <Navbar/>
                <div className={styles.firstContainer}>
                    <div className={styles.firstCard}>
                        <div className={styles.mini} style={{fontSize:"1rem", color:"white", fontWeight:"bold", textShadow: "2px 2px 4px black"}}>Stay Informed, Stay Safe</div>
                        <div className={styles.header} style={{fontSize:"4rem", color:"white", fontWeight:"bold", lineHeight:"1.1", textShadow: "2px 2px 4px black"}}>Disaster <br/>Preparedness Guide</div>
                        <div className={styles.context} style={{fontSize:"1rem", color:"white", marginTop:"1rem", textShadow: "2px 2px 4px black"}}>Essential strategies and resources for Santa Ana residents to effectively prepare for potential disasters.</div>
                    </div>
                </div>
                <div className={styles.secondContainer}>
                    <div className={styles.aboveContent}>
                        <div className={styles.aboveTitle} style={{fontWeight:"bold", fontSize:"2rem", color:"black"}}>Preparedness Steps</div>
                        <div className={styles.aboveText}>Comprehensive steps to ensure safety during fires, floods, typhoons, and earthquakes.</div>
                    </div>
                    <div className={styles.belowContent}>
                        {[image1, image4].map((img, index) => (
                            <div
                                key={index}
                                className={styles.cardInfo}
                                onClick={() => handleImageClick(img)}
                                style={{ cursor: "pointer" }}
                            >
                                <img src={img} alt={`Poster ${index}`} className={styles.posters} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.thirdContent}>
                    <div className={styles.cardContent}>
                        <div className={styles.cardText} style={{fontSize:"1.5rem", color:"white", fontWeight:"bold"}}>The Municipal Disaster Hub has been an invaluable resource in keeping our community
                            informed and prepared during emergencies. Their timely updates and comprehensive resources have made a significant
                            difference.
                        </div>
                        <div className={styles.cardAuthor} style={{marginTop:"1.5rem", fontWeight:"bold"}}>Marites S. Franco</div>
                        <div className={styles.cardDetails}>Head of Santa Ana Pampanga MDRRMO</div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.aboveFooter}>
                        <div className={styles.navLinks}>
                            <span onClick={() => navigate('/')}>Municipal Disaster Hub</span>
                            <span onClick ={() => navigate('/resources')}>MDRRMO Resources</span>
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
                {isModalOpen && (
                <div className={styles.modal} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt="Zoomed In" className={styles.zoomedImage} />
                        <button className={styles.closeButton} onClick={closeModal}>X</button>
                    </div>
                </div>
                )}
            </div>
        </>
    );
}