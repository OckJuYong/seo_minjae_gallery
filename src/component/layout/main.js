import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './main.css';

const Main = () => {
  const [hoveredYear, setHoveredYear] = useState(null);

  const handleMouseEnter = (year) => {
    setHoveredYear(year);
  };

  const handleMouseLeave = () => {
    setHoveredYear(null);
  };

  const settings = {
    dots: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <div className='footer_page_container'>
      <Slider {...settings}>
        {[2020, 2021, 2022, 2023, 2024].map((year) => (
          <div
            key={year}
            onMouseEnter={() => handleMouseEnter(year)}
            onMouseLeave={handleMouseLeave}
            className='circle-container'
          >
            <div className={`circle ${hoveredYear === year ? 'hovered' : ''}`}>
              <div className='circle-content'>{year}</div>
            </div>
            {hoveredYear === year && ReactDOM.createPortal(
              <div className='tooltip'>
                      {year} - 1 :
                <br />{year} - 2 :
                <br />{year} - 3 :
                <br />{year} - 4 :
                <br />{year} - 5 :
              </div>,
              document.body
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Main;
