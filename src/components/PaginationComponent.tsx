import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useDispatch} from "react-redux";
import {useTypedUseSelector} from "../Redux/store";
import {setCurrPageAC} from "../Redux/reducers/usersReducer";
import styles from '../styles/pagination.module.scss';

export default function PaginationComponent() {
    const dispatch = useDispatch()
    const currPage = useTypedUseSelector(state => state.usersData.currPage)
    const info = useTypedUseSelector(state => state.usersData.info)

    const clickHandler = (target: any) => {

        let num = Number(target.innerText)

        if (target && target.dataset.testid === "LastPageIcon") {
            num = info!.pages
        }
        if (target && target.dataset.testid === "FirstPageIcon") {
            num = 1
        }
        if (target && target.dataset.testid === "NavigateNextIcon") {
            num = currPage + 1
        }
        if (target && target.dataset.testid === "NavigateBeforeIcon") {
            num = currPage - 1
        }

        dispatch(setCurrPageAC(num))

    }

    return (
        <div className={styles.pagination}>
            <Stack spacing={2} sx={{mx: "auto", width: 450}}>
                <Pagination count={info?.pages || 10} color="secondary" variant="outlined" shape="rounded"
                            showFirstButton showLastButton
                            onClick={(event) => {
                                const btn = event.target as HTMLElement
                                clickHandler(btn)
                            }}/>
            </Stack>
        </div>
    );
}
