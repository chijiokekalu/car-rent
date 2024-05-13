import React from 'react';
import ImpactChart from './ImpactChart';
import VisionTimeline from './VisionTimeline';
import '../styles/MissionSection.css';

function VisionImpactSection() {
    return (
        <div className="vision-impact-container">
            <div className="vision-section" style={{ backgroundImage: 'url(/images/car6.jpg)' }}>
                <h2>Our Vision</h2>
                <p>To be the leading car rental service in the industry, recognized for our innovation and commitment to customer satisfaction.</p>
            </div>
            <div className="impact-section">
                <h2>Our Impact</h2>
                <p>Through our services, we've enabled thousands of people to safely and efficiently travel, fostering greater connectivity and understanding across communities.</p>
                <ImpactChart />
            </div>
        </div>
    );
}

export default VisionImpactSection;
