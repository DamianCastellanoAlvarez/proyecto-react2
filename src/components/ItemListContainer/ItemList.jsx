import React from "react";
import Item from "./Item";


function ItemList ({ prop }) {
    return (
    <>
        {prop.map((productos) => {
            <Item productos={productos}/>
        })}
    </>
)           
}

export default ItemList
