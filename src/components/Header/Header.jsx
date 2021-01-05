import React from 'react';
import { Typography, Box, Button} from "@material-ui/core";
import './Header.sass';
import { makeStyles } from '@material-ui/styles';
import {Link} from 'react-scroll';

const useStyles = makeStyles({
    btn: {
        fontFamily: 'Compact-bol', 
        fontSize: 30, 
        borderRadius: 100, 
        borderWidth: 6, 
        borderColor: '#E04A55', 
        borderStyle: 'solid', 
        width: 230, 
        color: '#E04A55',
        '&:hover': {
            background: 'black',
            borderColor: 'black',
        }   
    },
    descr: {
        color: 'white'
    },
    title: {
        color: '#E04A55'
    },
    "@media ( min-width: 1001px )": {
        btn: {
            fontFamily: 'Compact-bol', 
            fontSize: 35, 
            borderRadius: 100, 
            borderWidth: 8, 
            borderColor: '#E04A55', 
            borderStyle: 'solid', 
            width: 260, 
            color: '#E04A55',
            '&:hover': {
                background: 'black',
                borderColor: 'black',
            }   
        },
        descr: {
            color: 'white',
            fontSize: 70
        },
        title: {
            color: '#E04A55',
            fontSize: 130
        },
    },
    "@media ( max-width: 1000px ) and ( min-width: 591px )" : {
        descr: {
            textAlign: 'center',
            width: '100%'
        },
        title: {
            textAlign: 'center',
            width: '100%'
        }
    },
    // "@media ( max-width: 590px ) and ( min-width: 447px )" : {
    //     descr: {
    //         textAlign: 'center',
    //         width: '100%',
    //         fontSize: 40
    //     },
    //     title: {
    //         textAlign: 'center',
    //         width: '100%',
    //     }
    // },
    "@media ( max-width: 590px ) and ( min-width: 477px )" : {
        descr: {
            textAlign: 'center',
            width: '100%',
            fontSize: 40
        },
        title: {
            textAlign: 'center',
            width: '100%',
            fontSize: 70
        }
    },
    "@media ( max-width: 476px ) and ( min-width: 401px )" : {
        descr: {
            textAlign: 'center',
            width: '100%',
            fontSize: 35,
        },
        title: {
            textAlign: 'center',
            width: '100%',
            fontSize: 60
        },
        btn: {
            width: 170,
            fontSize: 20
        }
    },
    "@media ( max-width: 400px ) and ( min-width: 348px )" : {
        descr: {
            textAlign: 'center',
            width: '100%',
            fontSize: 35,
            marginTop: 20
        },
        title: {
            textAlign: 'center',
            width: '100%',
            fontSize: 60,
        },
        btn: {
            width: 170,
            fontSize: 20
        }
    },
    "@media ( max-width: 347px ) and ( min-width: 300px )" : {
        descr: {
            textAlign: 'center',
            width: '100%',
            fontSize: 35,
            paddingLeft: 10,
            paddingRight: 10,
        },
        title: {
            textAlign: 'center',
            width: '100%',
            fontSize: 60
        },
        btn: {
            width: 170,
            fontSize: 20
        }
    }
});

const Header = () => {
    const classes = useStyles();
    return (
        <Box className="header">
            <Box className="header_main">
                <Box display="flex" alignItems="center" justifyContent="center" className="header_main_blur">
                    <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="flex-start" className="header_main-wrap">
                        <Typography className={classes.title} variant="h1">Money Heist</Typography>
                        <Typography className={classes.descr} variant="h2">Watch a detailed review of the series “Money Heist” right here</Typography>
                        <Link className="main_btn" smooth={true} to="plot">
                            <Button className={classes.btn} variant="outlined">LEARN MORE</Button>                        
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Box className="header_bg" />
        </Box>
    )
}

export {Header};