import React from 'react'

const Categories = ({items,setInfo,Categoriies}) => {

    const setButton = (category) =>{
        if(category==='all')
        {
            setInfo(items)
            return
        }
        const newItem = items.filter((lunch)=> lunch.category === category)
        setInfo(newItem);
        console.log('category:', newItem);
    }

return(
    <div className="category">
        {Categoriies.map((category)=> { return (
        <button className="btn" onClick={()=>setButton(category)}>
            {category}
        </button>
        )})}
    </div>
)
}

export default Categories;