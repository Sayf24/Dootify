import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import './App.css';
import { ReactComponent as Icon } from './img/dootify-Logo.svg';
import { Button } from '@material-ui/core';




const NavBar = () => {
    return (
        <AppBar className="navBar" position="static">
            <Toolbar disableGutters>
                <Grid container  justify="space-between" className="navBarGrid" spacing={0} >
                    <Grid item md={3} xs={6} container justify="flex-start">
                        <Typography style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                        }} variant="h3">
                            <Icon title="logo" className="logo"></Icon>ootify
                        </Typography>
                    </Grid>
                    <Grid item md={5} xs={false}></Grid>
                    <Grid item md={4} xs={6}>
                        <ButtonGroup variant="contained" color="secondary" className="navBarButton" size="large" fullWidth>
                            <Button variant="contained" >About Us</Button>
                            <Button variant="contained" color="primary">Settings</Button>
                            <Button variant="contained" style={{
                                backgroundColor: '#C81D25'
                            }}>Log In</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}




export default NavBar;



