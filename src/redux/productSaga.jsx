// generator function? vs async function ?
import { takeEvery, put, call, select } from "redux-saga/effects";
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant";
import axios from "axios";

const filterProductsByName = (products, query) => {
    return products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );
};

function* getProducts() {
  const res = yield call(axios.get, "http://localhost:3000/products");
  const data = res.data.map((item) => ({
    ...item,
    quantity: 0
  }));
  console.warn(data);
  yield put({
    type: SET_PRODUCT_LIST,
    data,
  });
}

function* searchProducts(action) {
  const state = yield select(state => state.productData);
  let data = filterProductsByName(state, action.query);
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProducts);
}

export default productSaga;
