import React from 'react';
import {Box, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import Img from '../../assets/images/footer.png';
import {Link} from 'react-scroll';

const useStyles = makeStyles({
    footer: {
        width: '100%',
        height: 300,
        background: '#191919'
    },
    wrap: {
        width: 1500, 
        height: 300,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    item: {
        width: 400,
        height: 300,
    },
    text: {
        color: 'white',
        marginTop: 10,
        cursor: 'pointer',
        textDecoration: 'underline'
    },
    img: {
        width: 400,
        height: 500,
        backgroundImage: `url(${Img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
        transform: 'scale(0.5, 0.5)',
        marginTop: -100
    },
    "@media (max-width: 1517px) and (min-width: 1101px)": {
        wrap: {
            width: 1000
        }
    },
    "@media (max-width: 1100px) and (min-width: 838px)": {
        wrap: {
            width: 800
        }
    },
    "@media (max-width: 837px) and (min-width: 420px)": {
        wrap: {
            width: '80%',
            flexDirection: 'column',
            height: 800,
            alignItems: 'center',
            justifyContent: 'center'
        },
        footer: {
            height: 800,
        },
        item: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }
    },
    "@media (max-width: 419px) and (min-width: 300px)": {
        wrap: {
            width: '100%',
            flexDirection: 'column',
            height: 800,
            alignItems: 'center',
            justifyContent: 'center'
        },
        footer: {
            height: 800,
        },
        item: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        img: {
            width: '100%',
            height: 500,
            // marginLeft: -30,
            // margin: '0 auto'
            // background: 'red'
        }
    }
})

const Footer = () => {
    const classes = useStyles();

    return (
        <Box className={classes.footer}>
            <Box className={classes.wrap}>
                <Box className={classes.item}>
                    <Typography style={{fontFamily: 'Compact-bol', marginTop: 30, color: 'white'}} variant="h4">Navigation:</Typography>
                    <Link smooth={true} to="plot">
                        <Typography style={{fontFamily: 'Compact-reg'}} className={classes.text} variant="h4">Plot</Typography>
                    </Link>
                    <Link smooth={true} to="best">
                        <Typography style={{fontFamily: 'Compact-reg'}} className={classes.text} variant="h4">Best series</Typography>
                    </Link>
                    <Link smooth={true} to="photos">
                        <Typography style={{fontFamily: 'Compact-reg'}} className={classes.text} variant="h4">Photos</Typography>
                    </Link>
                    <Link smooth={true} to="actors">
                        <Typography style={{fontFamily: 'Compact-reg'}} className={classes.text} variant="h4">Actors</Typography>
                    </Link>
                </Box>
                <Box className={classes.item}>
                    <Typography style={{fontFamily: 'Compact-bol', marginTop: 30, color: 'white'}} variant="h4">Developer this site:</Typography>
                    <Typography style={{fontFamily: 'Compact-reg'}} className={classes.text} variant="h4">
                        <a rel="noreferrer" style={{color: 'white'}} target="_blank" href="https://www.instagram.com/daptellum.dev/">Daptellum</a>
                    </Typography>
                </Box>
                <Box className={classes.item} style={{display: 'block', justifyContent: 'center', alignItems: 'flex-end',}}>
                    <Box className={classes.img} />
                </Box>
            </Box>
        </Box>
    )
}

export {Footer};