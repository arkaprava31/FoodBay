import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Card from '../components/Cards';
import Footer from '../components/Footer';
import Carousal from '../components/Carousal';

const backend_server = "http://localhost:5050/";

const Home = () => {

    const [foodCategory, setFoodCategory] = useState([]);
    const [foodItems, setFoodItems] = useState([]);

    const loadData = async () => {
        const response = await fetch(backend_server + "api/data", {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST'
        })

        let json = await response.json();
        setFoodCategory(json[1]);
        setFoodItems(json[0]);
        // console.log(json[0], json[1]);
    }

    useEffect(() => {
        loadData()
    }, []);


    return (
        <div>
            <Nav />
            <div className="">
                <Carousal />
            </div>

            <div className="container">
                {
                    foodCategory
                        ? foodCategory.map((data) => {
                            return (
                                <div className='row'>
                                    <div key={data._id} className='w-75 fs-4 m-3 p-2 text-white fw-bold bg-primary rounded-3'>
                                        {data.CategoryName}
                                    </div>
                                    <hr />
                                    {
                                        foodItems
                                            ? foodItems.filter((item) => 
                                                item.CategoryName === data.CategoryName
                                            ).map((filteredData) => {
                                                return (
                                                    <div key={filteredData._id} className='col-12 col-md-6 col-lg-3'>
                                                        <Card 
                                                        items={filteredData}
                                                        itemOption={filteredData.options[0]}
                                                        />
                                                    </div>
                                                )
                                            })
                                            : ""
                                    }
                                </div>
                            )
                        })
                        : ""
                }
            </div>
            <Footer />
        </div>
    );
};

export default Home;
