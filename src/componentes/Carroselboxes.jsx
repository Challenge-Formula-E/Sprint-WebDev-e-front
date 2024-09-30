import React, { useState } from 'react';
import '../styles/boxes.css'; 
import lock from '../assets/lock.png'; 

const Carroselboxes = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const carouselItems = [
        { id: 1, text: 'E-ECO', prize: 'Prize 1', value: 10000 },
        { id: 2, text: 'E-NITRO', prize: 'Prize 2', value: 30000 },
        { id: 3, text: 'E-VOLT', prize: 'Prize 3', value: 50000 },
        { id: 4, text: 'E-FLASH', prize: 'Prize 4', value: 100000 },
        { id: 5, text: 'E-HYPE', prize: 'Prize 5', value: 120000 },
        { id: 6, text: 'E-MASTER', prize: 'Prize 6', value: 140000 },
    ];

    const totalItems = carouselItems.length;

    const nextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    const prevItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    };

    return (
        <div className="carousel-container">
            <div className="carousel">
                <button onClick={prevItem} className="carousel-button">◀</button>
                
                <div className="carousel-item-container">
                    <div className="carousel-item">
                        {carouselItems[currentIndex].text}
                    </div>
                    <div className="locked-item">
                        <img src={lock} alt="Lock" className="lock-icon" />
                        <span>{carouselItems[(currentIndex + 1) % totalItems].text}</span>
                    </div>
                </div>

                <button onClick={nextItem} className="carousel-button">▶</button>
            </div>
            
            <div className="boxes">
                <div className="box">
                    {carouselItems[currentIndex].prize}<br />
                    {carouselItems[currentIndex].value}
                </div>
                <div className="box">
                    {carouselItems[(currentIndex + 1) % totalItems].prize}<br />
                    {carouselItems[(currentIndex + 1) % totalItems].value}
                </div>
                <div className="box">
                    {carouselItems[(currentIndex + 2) % totalItems].prize}<br />
                    {carouselItems[(currentIndex + 2) % totalItems].value}
                </div>
            </div>
        </div>
    );
};

export default Carroselboxes;
