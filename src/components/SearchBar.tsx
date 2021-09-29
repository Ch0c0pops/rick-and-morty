import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import TextField from '@mui/material/TextField';
import styles from '../styles/searchBar.module.scss';
import {useDispatch} from "react-redux";
import {setGenderAC, setSearchNameAC, setStatusAC} from "../Redux/reducers/usersReducer";
import {ChangeEvent} from "react";

export default function SearchBar() {

    const dispatch = useDispatch()
    const [gender, setGender] = React.useState<string>("");
    const [status, setStatus] = React.useState<string>("");
    const [searchTimeOut, setSearchTimeOut] = React.useState<any>(false)

    const searchGenderHandler = (event: SelectChangeEvent) => {
        event.preventDefault()
        event.stopPropagation()
        setGender(event.target.value as string);
        dispatch(setGenderAC(event.target.value))
    };
    const searchStatusHandler = (event: SelectChangeEvent) => {
        event.preventDefault()
        event.stopPropagation()
        setStatus(event.target.value as string);
        dispatch(setStatusAC(event.target.value))
    };
    const searchNameHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        event.preventDefault()
        event.stopPropagation()

        if (searchTimeOut !== false) {
            clearTimeout(searchTimeOut)
        }
        setSearchTimeOut(setTimeout(() => dispatch(setSearchNameAC(event.target.value)), 1000))
    }

    return (<div className={styles.searchBar}>
            <Box>
                <FormControl sx={{minWidth: 150}} style={{marginLeft: "5px"}}>
                    <InputLabel id="demo-simple-select-label" color="secondary">Пол</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={gender}
                        label="Пол"
                        color="secondary"
                        onChange={searchGenderHandler}
                    >
                        <MenuItem value={''}>любой</MenuItem>
                        <MenuItem value={'male'}>мужской</MenuItem>
                        <MenuItem value={'female'}>женский</MenuItem>
                        <MenuItem value={'genderless'}>бесполый</MenuItem>
                        <MenuItem value={'unknown'}>неизвестен</MenuItem>
                    </Select>

                </FormControl>


                <FormControl sx={{minWidth: 150}} style={{marginLeft: "10px"}}>

                    <InputLabel id="demo-simple-select-label" color="secondary">Статус</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Статус"
                        color="secondary"
                        onChange={searchStatusHandler}
                    >
                        <MenuItem value={''}>любой</MenuItem>
                        <MenuItem value={'alive'}>живой</MenuItem>
                        <MenuItem value={'dead'}>мертвый</MenuItem>
                        <MenuItem value={'unknown'}>неизвестно</MenuItem>
                    </Select>

                </FormControl>
            </Box>
            <TextField style={{marginLeft: "10px"}} id="outlined-basic" label="Поиск персонажа" variant="outlined"
                       color="secondary" onChange={searchNameHandler}/>
        </div>

    );
}