export interface UserProps {
    id?: number,
    status?: string,
    gender?: string,
    image?: string
}

interface Info {
    count?: number,
    pages: number,
    next?: string | null,
    prev?: string | null
}

export interface UsersState {
    users: UserProps[],
    isLoading: boolean,
    info: Info | null,
    currPage: number,
    gender: string,
    status: string,
    searchName: string
}

export interface getUsersAC {
    data: any,
    type: UsersActionTypes.GET_USERS,
}

export interface isLoadingAC {
    type: UsersActionTypes.IS_LOADING,
    isLoading: boolean
}

export interface setCurrPageAC {
    type: UsersActionTypes.SET_CURR_PAGE,
    page: number
}

export interface setStatusAC {
    type: UsersActionTypes.SET_STATUS,
    status: string
}

export interface setGenderAC {
    type: UsersActionTypes.SET_GENDER
    gender: string
}

export interface setSearchNameAC {
    type: UsersActionTypes.SET_SEARCH_NAME,
    searchName: string
}

export enum UsersActionTypes {
    GET_USERS = 'GET_USERS',
    IS_LOADING = 'IS_LOADING',
    SET_CURR_PAGE = 'SET_CURR_PAGE',
    SET_STATUS = 'SET_STATUS',
    SET_GENDER = 'SET_GENDER',
    SET_SEARCH_NAME = 'SET_SEARCH_NAME'
}

export type UsersActions = getUsersAC | isLoadingAC | setCurrPageAC | setStatusAC | setGenderAC | setSearchNameAC