import React, { useState, useEffect } from 'react';
import removeItem from './utils/removeItem';

const Counter = (props) => {
    const [itemCount, setItemCount] = useState(1);

    const handleChange = (e) => {
        if (e.target.innerText === '+') {
            setItemCount(itemCount + 1);
        } else if (e.target.innerText === '-') {
            if (itemCount === 1) {
                removeItem(
                    e,
                    props.items,
                    props.setAddedProducts,
                    props.setCartItems
                );
            } else {
                setItemCount(itemCount - 1);
            }
        }
    };

    useEffect(() => {
        const newItem = props.cartItems.map((elem) => {
            if (elem.id === props.item.id) {
                elem.itemCount = itemCount;
            }
            return elem;
        });
        props.setCartItems(newItem);
    });

    return (
        <div className="increment-decrement">
            <button value={props.item.id} onClick={handleChange}>
                -
            </button>
            <span>{itemCount}</span>
            <button
                value={props.item.id}
                onClick={handleChange}
                disabled={props.item.inventory === itemCount}
            >
                +
            </button>
        </div>
    );
};

export default Counter;
