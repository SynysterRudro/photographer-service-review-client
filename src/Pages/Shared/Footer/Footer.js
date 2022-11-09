import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                Photo Mania
            </div>
            <div>
                <span className="footer-title">Links</span>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Blogs</a>
                <a className="link link-hover">My reviews</a>
                <a className="link link-hover">Add services</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Find us</span>
                <a className="link link-hover">Facebook</a>
                <a className="link link-hover">Twiiter</a>
                <a className="link link-hover">Linked In</a>
            </div>
        </footer>
    );
};

export default Footer;