import {UsersActions, UsersActionTypes, UsersState} from "../../types/userTypes";


export const getUsersAC = (data: any) => ({type: UsersActionTypes.GET_USERS, data: data})
export const isLoadingAC = (boolean: boolean) => ({type: UsersActionTypes.IS_LOADING, isLoading: boolean})
export const setCurrPageAC = (page: number) => ({type: UsersActionTypes.SET_CURR_PAGE, page})
export const setStatusAC = (status: string)=>({type: UsersActionTypes.SET_STATUS, status})
export const setGenderAC = (gender: string)=>({type: UsersActionTypes.SET_GENDER, gender})
export const setSearchNameAC = (searchName: string)=>({type: UsersActionTypes.SET_SEARCH_NAME, searchName})

let initialState: UsersState = {
    users: [],
    isLoading: false,
    info: null,
    currPage: 1,
    gender: '',
    status: '',
    searchName: ''
}

const usersReducer = (state = initialState, action: UsersActions): UsersState => {
    switch (action.type) {
        case UsersActionTypes.GET_USERS:
            return {...state, users: action.data.results, info: action.data.info}
        case UsersActionTypes.IS_LOADING:
            return {...state, isLoading: action.isLoading}
        case UsersActionTypes.SET_CURR_PAGE:
            return {...state, currPage: action.page}
        case UsersActionTypes.SET_STATUS:
            return {...state, status: action.status}
        case UsersActionTypes.SET_GENDER:
            return {...state, gender: action.gender}
        case UsersActionTypes.SET_SEARCH_NAME:
            return {...state, searchName: action.searchName}
        default:
            return state
    }
}

export default usersReducer