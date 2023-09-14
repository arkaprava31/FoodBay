import React from 'react';
import { Link } from 'react-router-dom';
import { useCartData } from './ContextReducer';

const Nav = () => {

    const data = useCartData();

    function clicked() {
        localStorage.removeItem("authtoken");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-2 fw-bolder" to="/">FoodBay</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active fs-5 fw-bolder" aria-current="page" to="/">Home</Link>
                            </li>
                            {/* {
                                (localStorage.getItem("authtoken"))
                                    ? <li className="nav-item">
                                        <Link className="nav-link active fs-5 fw-bolder" aria-current="page" to="/myorders">My Orders</Link>
                                    </li>
                                    : ""
                            } */}
                        </ul>
                        {
                            (!localStorage.getItem("authtoken"))
                                ?
                                <div className="d-flex">
                                    <Link className="btn bg-white text-primary fs-6 fw-bolder mx-2" to="/login">Login</Link>
                                    <Link className="btn bg-white text-primary fs-6 fw-bolder mx-2" to="/createuser">SignUp</Link>
                                </div>
                                :
                                <div>
                        
                                { (!data.length)
                                    ?
                                        <div className="d-flex">
                                            <Link className="btn bg-white text-primary fs-6 fw-bolder mx-2" to="/cart">My Cart</Link>
                                            <Link className="btn bg-danger text-white fs-6 fw-bolder mx-2" to="/login" onClick={clicked}>logout</Link>
                                        </div>
    
                                    :
                                        <div className="d-flex">
                                            <Link className="btn bg-warning text-dark fs-6 fw-bolder mx-2" to="/cart">My Cart</Link>
                                            <Link className="btn bg-danger text-white fs-6 fw-bolder mx-2" to="/login" onClick={clicked}>logout</Link>
                                        </div>
                                    }

                                </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
