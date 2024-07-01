import axios from "axios"
import { PRODUCT_LIST, SEARCH_PRODUCT } from "./constant"

// actions cannot handle the async operations, saga can

export const productList = () => {
    return {
        type: PRODUCT_LIST,
    }
}


export const productSearch = (query) => {
    console.log(query)
    return {
        type: SEARCH_PRODUCT,
        query
    }
}