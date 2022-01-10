import React from "react";

const Menu = ({ items,categoryy,setInfo }) => {
  const setLunch = () => {
    const newItem = categoryy.filter((lunch) => lunch.category === "lunch");
    setInfo(newItem);
  };

  return (
    <div>
      <div className="section-center">
        {items.map((menuItem) => {
          return (
            <>
              {/* <h1>{menuItem.title}</h1> */}

              <img
                className="photo"
                src={menuItem.img}
                alt="{menuItem.title}"
              />
              <div className="info-container">
                <h4 className="info-container">{menuItem.title}</h4>
                <h4 className="info-container">${menuItem.price}</h4>
              </div>
              <div className="info-container">
                <p>{menuItem.desc}</p>
              </div>
            </>
          );
        })}
      </div>
      
      <div className="category">
        <button className="btn" onClick={setLunch}>
          Lunch
        </button>
      </div>
    </div>
  );
};

export default Menu;
