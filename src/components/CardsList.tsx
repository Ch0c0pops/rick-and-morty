import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getUsersThunk} from "../Redux/thunk/usersThunk";
import {useTypedUseSelector} from "../Redux/store";
import Card from "./Card";
import {UserProps} from "../types/userTypes";
import styles from "../styles/userList.module.scss";
import Loader from "./Loader";

const CardsList: React.FC = () => {
    const {users, isLoading, currPage, gender, status, searchName} = useTypedUseSelector(state => state.usersData)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersThunk({currPage, gender, status, searchName}))
    }, [searchName, currPage, gender, status])


    if (isLoading) {
        return <Loader/>
    }
    return (
        <div className={styles.cardsList}>
            {users.map((user: UserProps) => <Card key={user.id} user={user}/>)}
        </div>
    )
};

export default CardsList