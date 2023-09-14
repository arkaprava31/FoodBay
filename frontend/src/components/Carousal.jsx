import React from 'react';

const Carousal = () => {
    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner" id='carousel'>
                <div class="carousel-caption d-none d-md-block" style={{zIndex: "10"}}>
                    {/* <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{background: "rgb(0,0,0,0.5)", color:"white", }}/>
                            <button class="btn btn-outline-success bg-primary text-white" type="submit">Search</button>
                    </form> */}
                </div>
                <div class="carousel-item active">
                    <img src="https://source.unsplash.com/random/100×100/?burger" class="d-block w-100" alt="..." style={{filter:"brightness(30%)", height:"500px", objectFit:"cover"}}/>
                </div>
                <div class="carousel-item">
                    <img src="https://source.unsplash.com/random/100×100/?pastry" class="d-block w-100" alt="..." style={{filter:"brightness(30%)",height:"500px", objectFit:"cover"}}/>
                </div>
                <div class="carousel-item">
                    <img src="https://source.unsplash.com/random/100×100/?barbeque" class="d-block w-100" alt="..." style={{filter:"brightness(30%)",height:"500px", objectFit:"cover"}}/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousal;
