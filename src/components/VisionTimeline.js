import React from 'react';
import "../styles/VisionTimeline.css";

function VisionTimeline() {
    const milestones = [
        { year: "2023", event: "Launch of New Services" },
        { year: "2025", event: "Expansion to New Markets" },
        { year: "2030", event: "Achieving Global Reach" }
    ];

    return (
        <div className="timeline-container">
            {milestones.map((milestone, index) => (
                <div key={index} className="milestone">
                    <h3>{milestone.year}</h3>
                    <p>{milestone.event}</p>
                </div>
            ))}
        </div>
    );
}

export default VisionTimeline;
