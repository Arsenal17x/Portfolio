import React from 'react';
import './Services.css'; // Assuming you'll create a CSS file for styling

const Services = () => {
    return (
        <div id="services">
            <div className="container">
                <h1 className="sub-title">My Services</h1>
                <div className="services-list">
                    <div>
                        <i className="fa-solid fa-code"></i>
                        <h2>Web Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis corrupti, hic,
                            quia ratione dolor inventore animi atque reiciendis ex quidem quo.
                        </p>
                        <a href="#">Learn More</a>
                    </div>
                    <div>
                        <i className="fa-solid fa-crop"></i>
                        <h2>UI/UX Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis corrupti, hic,
                            quia ratione dolor inventore animi atque reiciendis ex quidem quo.
                        </p>
                        <a href="#">Learn More</a>
                    </div>
                    <div>
                        <i className="fa-brands fa-app-store"></i>
                        <h2>App Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis corrupti, hic,
                            quia ratione dolor inventore animi atque reiciendis ex quidem quo.
                        </p>
                        <a href="#">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;