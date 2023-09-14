import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const backend_server = "http://localhost:5050/";

const Signup = () => {

    let navigate = useNavigate();

    const [creds, setCreds] = useState({
        name: "",
        email: "",
        password: "",
        location: ""
    });

    const hanlesubmit = async (event) => {

        event.preventDefault();

        try {
            const response = await fetch(backend_server + "api/createuser", {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify({
                    name: creds.name,
                    email: creds.email,
                    password: creds.password,
                    location: creds.location
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
                name: "",
                email: "",
                password: "",
                location: ""
            });
        }
        catch (err) {
            console.log(err);
        }

        navigate('/login');
    }

    function onchange(event) {
        setCreds({ ...creds, [event.target.name]: event.target.value });
    }
    return (
        <div className='container w-50 mt-4_5'>
            <form onSubmit={hanlesubmit}>
                <div className="mb-3">
                    <label for="name" className="form-label fw-bolder">Name</label>
                    <input type="text" className="form-control" name='name' value={creds.name} onChange={onchange} autocomplete="off"/>
                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label fw-bolder">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={creds.email} onChange={onchange} autocomplete="off"/>
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label fw-bolder">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={creds.password} onChange={onchange} />
                </div>

                <div className="mb-3">
                    <label for="location" className="form-label fw-bolder">Address</label>
                    <input type="text" className="form-control" name='location' value={creds.location} onChange={onchange} autocomplete="off"/>
                </div>

                <button type="submit" className="m-3 btn btn-primary fw-bolder">Create account</button>

                <Link to={'/login'}><button type="submit" className="m-3 btn btn-warning fw-bolder">Already an User?</button></Link>

                <span className="mx-2">
                    <Link to={"/"} className='text-dark fw-bolder' style={{textDecoration: "none", fontStyle: "italic"}}>Go to home</Link>
                </span>
            </form>
        </div>
    );
};

export default Signup;
