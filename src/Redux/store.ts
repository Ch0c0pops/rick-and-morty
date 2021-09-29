import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import usersReducer from "./reducers/usersReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";

const reducers = combineReducers({
    usersData: usersReducer,
})
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))


export type RootState = ReturnType<typeof reducers>
export const useTypedUseSelector: TypedUseSelectorHook<RootState> = useSelector

export default store