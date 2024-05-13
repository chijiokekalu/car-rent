import React from 'react';
import '../styles/ServiceCard.css';

function ServiceCard({ service }) {
    const waLink = `https://wa.me/${service.contactNumber}`;

    return (
        <div className="service-card">
            <img src={service.image} alt={service.name} className="service-image" />
            <div className="service-info">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <button onClick={() => window.location.href = waLink}>Rent Now</button>
            </div>
        </div>
    );
}

export default ServiceCard;
