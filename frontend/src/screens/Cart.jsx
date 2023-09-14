import React from 'react';
import { useCartData, useDispatchCart } from '../components/ContextReducer';
import { Link, useNavigate } from 'react-router-dom';

const backend_server = "http://localhost:5050/";

let val = 0;

export default function Cart() {

    let navigate = useNavigate();

    let data = useCartData();
    const dispatch = useDispatchCart();
    if (data.length === 0) {
        return (
            <div>
                <div className='d-flex justify-content-end'>
                    <Link to={"/"}><button className='btn text-white bg-danger mt-2 me-2 fw-bolder'>X</button></Link>
                </div>
                <div className='mt-5 w-100 text-center fs-3 fw-bolder'>Your Cart is Empty!</div>
            </div>
        )
    }

    const handleCheckOut = async () => {
        let userEmail = localStorage.getItem("userEmail");
        let response = await fetch(backend_server + "api/cartdata", {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                email: userEmail,
                order_data: data
            })
        });

        if (response.status === 200) {
            dispatch({
                type: "DROP"
            });
        }

        val = 1;

        navigate("/myorders")
    }
    let totalPrice = data.reduce((total, food) => total + food.price, 0)

    const handleOrder = () => {
        val = 0;

        navigate("/myorders")
    }

    return (
        <div>
            <div className='d-flex justify-content-end'>
                <Link to={"/"}><button className='btn text-white bg-danger mt-2 me-2 fw-bolder'>X</button></Link>
            </div>
            <div className='container m-auto mt-2 table-responsive  table-responsive-sm table-responsive-md' >
                <table className='table table-hover '>
                    <thead className='text-primary fs-4 fw-bolder text-center'>
                        <tr>
                            <th scope='col' >#</th>
                            <th scope='col' >Name</th>
                            <th scope='col' >Quantity</th>
                            <th scope='col' >Option</th>
                            <th scope='col' >Amount</th>
                            <th scope='col' ></th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((food, index) => (
                            <tr className='fw-bolder text-center'>
                                <th scope='row' >{index + 1}</th>
                                <td >{food.name}</td>
                                <td>{food.qty}</td>
                                <td>{food.size}</td>
                                <td>{food.price}</td>
                                <td >
                                    <button type="button" className="btn p-0" onClick={() => { dispatch({ type: "REMOVE", index: index }) }}>
                                        <i className="fa-solid fa-trash" style={{ color: "red" }}></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                <div><h1 className='fs-2 fw-bolder'>Total Price: Rs {totalPrice}</h1></div>
                <div>
                    <button className='btn text-white bg-primary mt-2 fw-bolder' onClick={handleCheckOut}>Place Order</button>
                    <button className='btn text-dark bg-warning mt-2 fw-bolder mx-3' onClick={handleOrder}>Order Status</button>
                </div>
            </div>
        </div>
    )
}

const MyOrder = () => {

    return (
        <div>
            {!val
                ? <div>
                    <div className='d-flex justify-content-end'>
                        <Link to={"/"}><button className='btn text-white bg-danger mt-2 me-2 fw-bolder'>X</button></Link>
                    </div>
                    <div>
                        <div className='mt-5 w-100 text-center fs-3 fw-bolder'>You haven't ordered yet 🫤, Go place some orders!!!</div>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <Link to={"/cart"}><button className='btn text-white bg-primary mt-2 fw-bolder'>Go Back</button></Link>
                    </div>
                </div>
                :
                <div>
                    <div className='d-flex justify-content-center h-75'>
                        <div className='mt-5 text-center fs-3 fw-bolder p-5 w-50 bg-success text-white rounded'>Yay!!! Order Placed 😋</div>
                    </div>
                    <div className='d-flex justify-content-center mt-5'>
                        <Link to={"/"}><button className='btn text-white bg-primary mt-2 fw-bolder'>Home</button></Link>
                    </div>
                </div>
            }


        </div>

    );
};

export { MyOrder };