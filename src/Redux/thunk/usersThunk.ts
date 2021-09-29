import {Dispatch} from "redux";
import rmAPI from "../../API/axios";
import {getUsersAC, isLoadingAC} from "../reducers/usersReducer";

export interface getUsersProps{
    currPage: number,
    gender?: string,
    status?: string,
    searchName?: string
}

export const getUsersThunk= ({currPage, gender,status,searchName}: getUsersProps) => async (dispatch: Dispatch) => {
    try {
        dispatch(isLoadingAC(true))
        let response = await rmAPI.getUsers({currPage,gender,status,searchName})
        dispatch(getUsersAC(response.data))
    } catch (e) {

    } finally {
        dispatch(isLoadingAC(false))
    }
}