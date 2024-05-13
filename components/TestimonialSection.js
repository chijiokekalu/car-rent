import React, { useState, useEffect } from 'react';
import "../styles/TestimonialSection.css";

function TestimonialSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            content: "Amazing service! The vehicles are always in perfect condition and the staff is wonderfully helpful.",
            image: "/images/test1.jpg"
        },
        {
            id: 2,
            name: "Jane Smith",
            content: "I always rent cars from here for my business trips. Reliable and efficient!",
            image: "/images/test2.jpg"
        },
        {
            id: 3,
            name: "Alice Johnson",
            content: "Best rental prices and superb customer service. Highly recommended!",
            image: "/images/test3.jpg"
        },

        {
            id: 3,
            name: "Alice Johnson",
            content: "Best rental prices and superb customer service. Highly recommended!",
            image: "/images/test4.jpg"
        },
        {
            id: 3,
            name: "Alice Johnson",
            content: "Best rental prices and superb customer service. Highly recommended!",
            image: "/images/test5.jpg"
        },
        {
            id: 3,
            name: "Alice Johnson",
            content: "Best rental prices and superb customer service. Highly recommended!",
            image: "/images/test6.jpg"
        },
        {
            id: 3,
            name: "Alice Johnson",
            content: "Best rental prices and superb customer service. Highly recommended!",
            image: "/images/test7.jpg"
        }
    ];


    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const testimonial = testimonials[currentIndex];

    return (
        <div className="testimonials-section">
            <h1>Our Client Testimonials</h1>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.content}</p>
        </div>
    );
}

export default TestimonialSection;
