import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {NavLink} from 'react-router-dom';
import styles from '../styles/nav.module.scss';

export default function Nav() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar color="secondary" position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Рик и Морти
                    </Typography>
                    <NavLink className={styles.nav} to='/'>
                        <Button color="inherit">Главная</Button>
                    </NavLink>

                    <Button color="inherit" disabled>|||</Button>
                    <NavLink className={styles.nav} to='/about'>
                        <Button color="inherit">Обо мне</Button>
                    </NavLink>

                </Toolbar>
            </AppBar>
        </Box>
    );
}