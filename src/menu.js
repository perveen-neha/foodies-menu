import React from "react";

const Menu = ({ items}) => {
  
  return (
    <div>
      <div className="section-center">
        {items.map((item) => {
          return (
            <>
              {/* <h1>{item.title}</h1> */}
                
              <img
                className="photo"
                src={item.img}
                alt="{item.title}"
              />
              <div className="info-container">
                <h4 className="info-container">{item.title}</h4>
                <h4 className="info-container">${item.price}</h4>
              </div>
              <div className="info-container">
                <p>{item.desc}</p>
              </div>
            </>
          );
        })}
      </div>
      
    </div>
  );
};

export default Menu;
