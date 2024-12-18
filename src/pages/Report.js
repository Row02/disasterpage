import React, { useState } from 'react';
import styles from './Report.module.css';
import Navbar from './Navbar';
import { db } from '../firebase/firebase';
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

export default function Report() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        disasterType: '',
        message: '',
        incidentTime: '',
        location: '',
        picture: '', // Store Base64 image data here
    });

    const handleChange = (e) => {
        const { id, value, files } = e.target;
        if (id === "picture" && files.length > 0) {
            const file = files[0];
            convertToBase64(file); // Convert image to Base64
        } else {
            setFormData({ ...formData, [id]: value });
        }
    };

    // Convert the image file to Base64
    const convertToBase64 = (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData((prevData) => ({
                ...prevData,
                picture: reader.result, // Store Base64 result
            }));
        };
        reader.readAsDataURL(file); // Convert file to Base64
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Save report data to Firestore, including Base64 image string if available
            await addDoc(collection(db, "tickets"), formData);
            alert("Report submitted successfully!");
            setFormData({
                name: '',
                email: '',
                phone: '',
                disasterType: '',
                message: '',
                incidentTime: '',
                location: '',
                picture: '', // Reset picture field
            });

            navigate('/');
        } catch (error) {
            console.error("Error submitting report: ", error);
            alert("Failed to submit the report. Please try again.");
        }
    };

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.formContainer}>
                <h2 className={styles.formTitle}>Report an Incident</h2>
                <form className={styles.reportForm} onSubmit={handleSubmit}>
                    {/* Existing form fields */}
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="disasterType">Disaster Type</label>
                        <select
                            id="disasterType"
                            value={formData.disasterType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Disaster Type</option>
                            <option value="Fire">Fire</option>
                            <option value="Flood">Flood</option>
                            <option value="Typhoon">Typhoon</option>
                            <option value="Earthquake">Earthquake</option>
                        </select>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="message">Message/Description</label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Provide a brief description..."
                            required
                        ></textarea>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="picture">Upload Picture</label>
                        <input
                            type="file"
                            id="picture"
                            accept="image/*"
                            onChange={handleChange}
                        />
                        <small className={styles.helperText}>Upload an image (optional)</small>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="incidentTime">Time of the Incident</label>
                        <input
                            type="datetime-local"
                            id="incidentTime"
                            value={formData.incidentTime}
                            onChange={handleChange}
                            min="2023-01-01T00:00"
                            max="2099-12-31T23:59"
                            required
                        />
                        <small className={styles.helperText}>Select the date and time of the incident.</small>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            id="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Enter the location"
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Submit Report
                    </button>
                </form>
            </div>
        </div>
    );
}
