import React from 'react'

const Categories = ({categoryy,setInfo}) => {
const setLunch = () =>{
    const newItem = categoryy.filter((lunch)=> lunch.category === 'lunch')
    setInfo(newItem);
}

return(
    <div className="category">
        <button className="btn" onClick={setLunch}>
            Lunch
        </button>
    </div>
)
}

export default Categories;