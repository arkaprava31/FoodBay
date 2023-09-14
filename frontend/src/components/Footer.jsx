import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-1 my-2 border-top">
                <p className="col-md-4 mb-0 mx-5 text-primary">© 2023 FoodBay</p>

                <ul className="nav col-md-4 justify-content-end me-5">
                    <li className="nav-item"><Link target="_blank" to="https://arkaprava-chakraborty.netlify.app/" className="nav-link px-2 text-primary">Made with ❤️ by Arkaprava</Link></li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;
