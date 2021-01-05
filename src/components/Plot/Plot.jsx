import React from 'react';
import './Plot.sass';
import {Typography, Box,} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import ReactPlayer from "react-player"

const useStyles = makeStyles({
    root: {
        width: 1700,
        margin: '0 auto',
        display: 'flex',
        marginTop: 200,
        marginBottom: 200
    },
    item: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    text: {
        width: 600,
        fontFamily: 'Compact-bol'
    },
    descr: {
        width: 600,
        fontFamily: 'Compact-reg',
        marginTop: 70
    },
    video: {
        width: 700,
        height: 400,
        background: 'lightgrey',
    },
    wrapHead: {
        // background: 'pink',
    },
    "@media (max-width: 1717px) and (min-width: 1521px)": {
        item: {
            width: '40%',
        },
        root: {
            width: 1300,
            justifyContent: 'space-between'  
        }
    },
    "@media (max-width: 1520px) and (min-width: 1448px)": {
        item: {
            width: '30%',
        },
        root: {
            width: 1000,
            justifyContent: 'space-between'  
        }
    },
    "@media (max-width: 1447px) and (min-width: 1018px)": { 
        item: {
            width: '100%',
            alignItems: 'flex-start'
        },
        root: {
            width: 1000,
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: 'center'
        },
        text: {
            fontFamily: 'Compact-bol',
            width: '100%',
        },
        descr: {
            fontFamily: 'Compact-reg',
            marginTop: 70,
            width: '100%',
        },
        video: {
            marginTop: '70px'
        }
    },
    "@media (max-width: 1017px) and (min-width: 801px)": { 
        item: {
            width: '100%',
            alignItems: 'flex-start'
        },
        root: {
            width: '80%',
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: 'center'
        },
        text: {
            fontFamily: 'Compact-bol',
            width: '100%',
        },
        descr: {
            fontFamily: 'Compact-reg',
            marginTop: 70,
            width: '100%',
        },
        video: {
            marginTop: '70px'
        }
    },
    "@media (max-width: 800px) and (min-width: 601px)": { 
        item: {
            width: '100%',
            alignItems: 'flex-start'
        },
        root: {
            width: '80%',
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: 'center'
        },
        text: {
            fontFamily: 'Compact-bol',
            width: '100%',
        },
        descr: {
            fontFamily: 'Compact-reg',
            marginTop: 70,
            width: '100%',
        },
        video: {
            width: 500,
            height: 300,
            marginTop: '70px'
        }
    },
    "@media (max-width: 600px) and (max-height: 500px)": {
        root: {
            // marginTop: 250
        }
    },
    "@media (max-width: 600px) and (min-width: 459px)": { 
        item: {
            width: '100%',
            alignItems: 'flex-start'
        },
        root: {
            width: '95%',
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 100
             
        },
        text: {
            fontFamily: 'Compact-bol',
            width: '100%',
        },
        descr: {
            fontFamily: 'Compact-reg',
            marginTop: 70,
            width: '100%',
        },
        video: {
            width: 400,
            height: 225,
            marginTop: '70px'
        },
        wrapHead: {
            // marginTop: -150 
        },
    },
    "@media (max-width: 458px) and (min-width: 326px)": { 
        item: {
            width: '100%',
            alignItems: 'flex-start'
        },
        root: {
            width: '95%',
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 100
        },
        text: {
            fontFamily: 'Compact-bol',
            width: '100%',
        },
        descr: {
            fontFamily: 'Compact-reg',
            marginTop: 70,
            width: '100%',
        },
        video: {
            width: 300,
            height: 225,
            marginTop: '70px'
        },
        wrapHead: {
            // marginTop: -150 
        },
    },
    "@media (max-width: 325px) and (min-width: 300px)": { 
        item: {
            width: '100%',
            alignItems: 'flex-start'
        },
        root: {
            width: '95%',
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: 'center',
            // marginTop: -20
        },
        text: {
            fontFamily: 'Compact-bol',
            width: '100%',
        },
        descr: {
            fontFamily: 'Compact-reg',
            marginTop: 70,
            width: '100%',
        },
        video: {
            width: 270,
            height: 200,
            marginTop: '70px'
        },
        wrapHead: {
            marginTop: -150
        }
    },
})

const Plot = () => {
    const classes = useStyles();

    return (
        <Box className={classes.wrapHead}>
            <Box className={classes.root} id="plot">
                <Box className={classes.item}>
                    <Typography className={classes.text} variant="h2">The story</Typography>
                    <Typography className={classes.descr} variant="h4">Money Heist is a crime drama on Netflix - originally called La Casa de Papel. Money Heist season 3 has just been released by the streaming service. The plot reads: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan."</Typography>
                </Box>
                <Box className={classes.item}>
                    <Box className={classes.video}>
                        <ReactPlayer width={'100%'} height={'100%'} controls={true} url="https://www.youtube.com/watch?v=ZAXA1DV4dtI" />
                    </Box>
                </Box>
            </Box>
        </Box>

        
    )
}

export {Plot};