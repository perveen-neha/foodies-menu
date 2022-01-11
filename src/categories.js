import React from 'react'

const Categories = ({items,setInfo}) => {

    const setLunch = () =>{
        const newItem = items.filter((lunch)=> lunch.category === 'lunch')
        setInfo(newItem);
        console.log('category:', newItem);
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