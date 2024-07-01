import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import productSaga from "./productSaga";
import createSagaMiddleWare from "redux-saga";

const sagaMiddleware = createSagaMiddleWare();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSaga);

export default store;
