import React from 'react';
import '../styles/MissionSection.css';  // Ensure this file is updated with the new styles

function MissionSection() {
    return (
        <div className="mission-section">
            <div className="mission-content">
                <h2>Our Mission</h2>
                <p>To provide reliable, innovative, and accessible car rental services that empower our customers to explore with confidence.</p>
            </div>
            <img src="/images/car1.jpg" alt="Our Mission" className="mission-image" />
        </div>
    );
}

export default MissionSection;
