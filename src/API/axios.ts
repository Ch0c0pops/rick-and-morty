import axios from "axios";
import {getUsersProps} from "../Redux/thunk/usersThunk";

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
})

let rmAPI = {
    getUsers({currPage, status, gender, searchName}: getUsersProps) {

        if (searchName) {
            return instance.get(`/character/?page=${currPage}&name=${searchName}`)
        }
        if (status && gender) {
            return instance.get(`/character/?page=${currPage}&status=${status}&gender=${gender}`)
        }
        if (status) {
            return instance.get(`/character/?page=${currPage}&status=${status}`)
        }
        if (gender) {
            return instance.get(`/character/?page=${currPage}&gender=${gender}`)
        }
        return instance.get(`/character/?page=${currPage}`)
    }
}

export default rmAPI

