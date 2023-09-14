import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const backend_server = "http://localhost:5050/";

const Login = () => {

    let navigate = useNavigate();

    const [creds, setCreds] = useState({
        email: "",
        password: "",
    });

    const handlesubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(backend_server + "api/login", {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify({
                    email: creds.email,
                    password: creds.password
                })
            })

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            let json = await response.json();
            console.log(json);

            if (!json.success) {
                alert("Enter Valid Credentials");
            }

            setCreds({
                email: "",
                password: "",
            });
            localStorage.setItem("userEmail",creds.email);
            localStorage.setItem("authtoken",json.auth);
            console.log(localStorage.getItem("authtoken"));
            navigate("/");
        }
        catch (err) {
            console.log(err);
        }
    }

    function onchange(event) {
        setCreds({ ...creds, [event.target.name]: event.target.value });
    }
    return (
        <div className='container w-50 mt-4_5'>
            <form onSubmit={handlesubmit}>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label fw-bolder">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={creds.email} onChange={onchange} autocomplete="off"/>
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label fw-bolder">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={creds.password} onChange={onchange} />
                </div>

                <button type="submit" className="m-3 btn btn-primary fw-bolder">login</button>

                <Link to={'/createuser'}><button type="submit" className="m-3 btn btn-warning fw-bolder">Don't have an account?</button></Link>

                <span className="mx-2">
                    <Link to={"/"} className='text-dark fw-bolder' style={{textDecoration: "none", fontStyle: "italic"}}>Go to home</Link>
                </span>
            </form>
        </div>
    );
};

export default Login;

