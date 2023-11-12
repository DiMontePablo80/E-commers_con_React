/* eslint-disable react/prop-types */

import Item from '../item/Item'

const ItemList = ({productos}) => {
    return (
        <div>
        {
            productos.map((prod)=>(
                <Item key={prod.id} producto={prod}/>))
        }
            
        </div>
    );
};

export default ItemList;