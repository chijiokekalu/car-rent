import React from 'react';
import '../styles/HeroSection.css';
import background from "../videos/background.mp4";

function HeroSection() {
    const phoneNumber = "08050890638";
    const waLink = `https://wa.me/${phoneNumber}`;

    return (
        <div className="hero-container">
            <video src={background} autoPlay loop muted />
            <h1>Reliable Car Rent in Town</h1>
            <p>Find the best rental prices on luxury, economy, and family rental cars.</p>
            <button onClick={() => alert('Contact us at: ' + phoneNumber)}>Call Us</button>
            <button onClick={() => window.location.href = waLink}>Rent Now</button>
        </div>
    );
}

export default HeroSection;
