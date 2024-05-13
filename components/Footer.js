import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";  // Make sure this is correctly imported
import logo from "../images/logo2.png";

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-section logo-section">
                <img src={logo} alt="Company Logo" />
                <p>Leading the way in car rental services.</p>
            </div>
            <div className="footer-section links-section">
                <h4>Quick Links</h4>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
            <div className="footer-section social-media-section">
                <h4>Follow Us</h4>
                <a href="https://facebook.com"><i className="fab fa-facebook-f"></i> Facebook</a>
                <a href="https://twitter.com"><i className="fab fa-twitter"></i> Twitter</a>
                <a href="https://instagram.com"><i className="fab fa-instagram"></i> Instagram</a>
            </div>
            <div className="footer-section contact-section">
                <h4>Contact Us</h4>
                <p>Email: contact@example.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
        </footer>
    );
}
