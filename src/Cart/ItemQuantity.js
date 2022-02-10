import Counter from './Counter';

import removeItem from './utils/removeItem';

const ItemQuantity = (props) => {
    return (
        <div className="item-quantity">
            <Counter
                itemTotal={props.itemTotal}
                setItemTotal={props.setItemTotal}
                items={props.items}
                item={props.item}
                setAddedProducts={props.setAddedProducts}
                setCartItems={props.setCartItems}
                cartItems={props.cartItems}
            />
            <button
                className="remove-item"
                onClick={(e) =>
                    removeItem(
                        e,
                        props.items,
                        props.setAddedProducts,
                        props.setCartItems
                    )
                }
                value={props.item.id}
            >
                remove
            </button>
        </div>
    );
};

export default ItemQuantity;
