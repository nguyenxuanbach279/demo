import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth.slice";
import { testReducer } from "./reducers/test.slice";


const rootReducer = combineReducers({
    test: testReducer,
    auth: authReducer
})

export default rootReducer;