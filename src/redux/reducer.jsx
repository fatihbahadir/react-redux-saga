import { ADD_TO_CART, CHANGE_QUANTITY, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data=[], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const isExists = data.find(el => el.id === action.data.id)
            if (isExists) {
                action.data.quantity += 1;
                return [...data]
            }
            else {
                action.data.quantity = 1;
                return [action.data, ...data]
            }
        case CHANGE_QUANTITY:
            const item = data.find(el => el.id === action.data.id)
            item.quantity = parseInt(action.data.qty)
            return [...data]
        case REMOVE_FROM_CART:
            console.warn(REMOVE_FROM_CART, action)
            const remainingItems = data.filter((item)=>item.id !== action.data)
            return [...remainingItems]
        case EMPTY_CART:
            console.warn(EMPTY_CART, action)
            data = []
            return [...data]
        default:
            return data
    }
}