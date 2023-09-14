import React, { useEffect, useRef, useState } from 'react';
import { useDispatchCart } from './ContextReducer';

const Card = (props) => {

    const foodOptions = props.itemOption;
    const priceOptions = Object.keys(foodOptions);

    const foodItems = props.items;

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");

    const priceRef = useRef();

    useEffect(() => {
        setSize(priceRef.current.value)
    }, [])

    let finalprice = qty * parseInt(foodOptions[size]);

    const dispatch = useDispatchCart();

    const handleAddtoCart = async () => {

        await dispatch({
            type: "ADD",
            id: foodItems._id,
            name: foodItems.name,
            price: finalprice,
            qty: qty,
            size: size
        })
        alert("Added to Cart!");
    }

    return (
        <div className="card m-3" style={{ "width": "20rem", "maxHeight": "450px" }}>
            <img src={foodItems.img} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title fw-bolder">{foodItems.name}</h5>
                <p className="card-text fw-bolder wrappingText">{foodItems.description}</p>
                <div className="container w-100">
                    <select className="m-2 h-100 bg-primary text-white rounded p-1" onChange={(e) => { setQty(e.target.value) }}>
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option value={i + 1}>{i + 1}</option>
                            )
                        })}
                    </select>
                    <select className='m-2 h-100 bg-primary text-white rounded fw-bolder p-1' ref={priceRef} onChange={(e) => { setSize(e.target.value) }}>
                        {
                            priceOptions.map((data) => {
                                return <option value={data}>{data}</option>
                            })
                        }
                    </select>
                    <div className="d-inline fs-6 fw-bolder">
                        Rs. {finalprice}
                    </div>
                    <hr />
                    <button className='bg-primary text-white p-2 fw-bolder w-100 rounded' onClick={handleAddtoCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
