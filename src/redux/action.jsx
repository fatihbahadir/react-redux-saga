import { ADD_TO_CART, CHANGE_QUANTITY, EMPTY_CART, REMOVE_FROM_CART } from "./constant"

export const addToCart = (data) => {
    console.warn("action is called", data)
    return {
        type: ADD_TO_CART,
        data
    }
}

export const changeQty = (id, qty) => {
    console.warn("action is called", id, qty)
    return {
        type: CHANGE_QUANTITY,
        data: {
            id,
            qty
        }
    }
}


export const removeFromCart = (data) => {
    console.warn("action is called", data)
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const emptyCart = () => {
    return {
        type: EMPTY_CART,
        data: []
    }
}