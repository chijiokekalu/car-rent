import React from 'react';
import '../styles/Contact.css';  // Ensure CSS is properly linked

function Contact() {
    const googleMapSrc = "https://www.google.com/maps/embed?pb=!YourGoogleMapsLinkHere";  // Replace with your actual Google Maps link

    return (
        <div className="contact-page">
            <div className="map-container">
                <iframe
                    title="location"
                    src={googleMapSrc}
                    frameborder="0"
                    style={{ border: 0, width: '100%', height: '100%' }}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0">
                </iframe>
            </div>
            <div className="form-container">
                <form className="contact-form">
                    <h2>Contact Us</h2>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
