import React from 'react';
import VisionTimeline from './VisionTimeline';

function VisionSection() {
    return (
        <div className="vision-section" style={{ backgroundImage: 'url(/images/car9.jpg)' }}>
            <h2>Our Vision</h2>
            <p>To be the leading car rental service in the industry, recognized for our innovation and commitment to customer satisfaction.</p>
            <VisionTimeline />
        </div>
    );
}

export default VisionSection;
