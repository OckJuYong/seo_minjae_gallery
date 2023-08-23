import React, { useState } from 'react';
import './main.css';

const Main = () => {
  const [hoveredCircle, setHoveredCircle] = useState(null);

  const handleMouseEnter = (circleIndex) => {
    setHoveredCircle(circleIndex);
  };

  const handleMouseLeave = () => {
    setHoveredCircle(null);
  };

  return (
    <div className="main_page_container">
      <div className="App">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            className="circle"
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="circle-content">서민재 경력 {index + 2020}</div>
            {hoveredCircle === index && (
              <div className="tooltip">
                {index + 2020}
                    <br/> - 1 올해도 찢었다
                    <br/> - 2 내년도 찢어줭 헤응
                    <br/> - 3 
                    <br/> - 4 
                    <br/> - 5 
            </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;