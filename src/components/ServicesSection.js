import React from 'react';
import ServiceCard from '../components/ServiceCard'; // Ensure this path is correct based on your project structure

function ServicesSection() {
    const services = [
        { id: 1, name: "Honda Civic", description: "Comfortable, economical, and perfect for city drives.", image: "/images/car1.jpg", contactNumber: "1234567890" },
        { id: 2, name: "Toyota Corolla", description: "Reliable and well-maintained vehicles for family trips.", image: "/images/car2.jpg", contactNumber: "1234567890" },
        { id: 3, name: "Ford Focus", description: "Great all-rounder with modern amenities.", image: "/images/car3.jpg", contactNumber: "1234567890" },
        { id: 4, name: "Chevrolet Impala", description: "Spacious and comfortable for long drives.", image: "/images/car4.jpg", contactNumber: "1234567890" },
        { id: 5, name: "Hyundai Sonata", description: "Stylish and fuel-efficient for city commuting.", image: "/images/car5.jpg", contactNumber: "1234567890" },
        { id: 6, name: "Nissan Altima", description: "Reliable sedan with excellent mileage.", image: "/images/car6.jpg", contactNumber: "1234567890" },
        { id: 5, name: "Hyundai Sonata", description: "Stylish and fuel-efficient for city commuting.", image: "/images/car7.jpg", contactNumber: "1234567890" },
        { id: 6, name: "Nissan Altima", description: "Reliable sedan with excellent mileage.", image: "/images/car8.jpg", contactNumber: "1234567890" },
        { id: 6, name: "Nissan Altima", description: "Reliable sedan with excellent mileage.", image: "/images/car9.jpg", contactNumber: "1234567890" }
    ];

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>What We Serve You With</h1>
            <p style={{}}>Exotic Wheels Rental Limited offers a curated selection of luxury vehicles, ensuring a blend of style, performance, and top-tier service for every journey.</p>


            <div className="services-section">
                {services.map(service => <ServiceCard key={service.id} service={service} />)}
            </div>
        </>
    );
}

export default ServicesSection;