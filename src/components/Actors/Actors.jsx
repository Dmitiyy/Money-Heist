import React, {useState} from 'react';
import {Typography, Box, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import data from './data';
import GridList from '@material-ui/core/GridList';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles({
    actors: {
        width: 1700,
        marginBottom: 200,
        margin: '0 auto'
    },
    wrap: {
        width: '100%',
        display: 'flex'
    },
    wrap50: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center'
    },
    title: {
        width: 600,
        fontFamily: 'Compact-bol'
    },
    content: {
        width: '100%',
        marginTop: 70,
        paddingLeft: 120,
        paddingRight: 120
    },
    margin: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    item: {
        width: 250,
        height: 400,
        background: 'white'
    },
    media: {
        height: 280,
    },
    name: {
        fontFamily: 'Compact-reg',
        color: 'white'
    },
    btnAll: {
        width: 230,
        height: 60,
        background: '#E04A55',
        borderRadius: 100,
        color: 'white',
        fontFamily: 'Compact-bol',
        fontSize: 20,
        transition: 'all 0.25s',
        margin: '0 auto',
        '&:hover': {
            color: 'black'
        }
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    paper: {
        backgroundColor: 'white',
        border: '2px solid #000',
        outline: 'none',
        width: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evemly',
        alignItems: 'center'
    },
    "@media (max-width: 1717px) and (min-width: 1518px)": {
        actors: {
            width: 1500,
            paddingLeft: 150,
            paddingRight: 150
        },
        itemCard: {
            marginBottom: 30
        },
    },
    "@media (max-width: 1517px) and (min-width: 1318px)": {
        actors: {
            width: 1300,
            paddingLeft: 150,
            paddingRight: 150
        },
        itemCard: {
            marginBottom: 30
        },
    },
    "@media (max-width: 1317px) and (min-width: 1118px)": {
        actors: {
            width: 1100,
            paddingLeft: 150,
            paddingRight: 150
        },
        itemCard: {
            marginBottom: 30
        },
        btnAll: {
            marginTop: 30
        }
    },
    "@media (max-width: 1117px) and (min-width: 818px)": {
        actors: {
            width: '100%',
            // paddingLeft: 50,
            // paddingRight: 50,
            marginBottom: 50
        },
        itemCard: {
            marginBottom: 30
        },
        btnAll: {
            marginTop: 30
        },
        title: {
            width: 430
        }
    },
    "@media (max-width: 817px) and (min-width: 784px)": {
        actors: {
            width: '100%',
            // paddingLeft: 50,
            // paddingRight: 50,
            marginBottom: 50
        },
        itemCard: {
            marginBottom: 30,
            marginRight: 5
        },
        btnAll: {
            marginTop: 30
        },
        paper: {
            width: 300,
            height: 300,
            overflow: 'scroll'
        }
    },
    "@media (max-width: 783px) and (min-width: 664px)": {
        actors: {
            width: '80%',
            // paddingLeft: 50,
            // paddingRight: 50,
            marginBottom: 50
        },
        itemCard: {
            marginBottom: 30,
            marginRight: 5
        },
        btnAll: {
            marginTop: 30
        },
        paper: {
            width: 300,
            height: 300,
            overflow: 'scroll'
        }
    },
    "@media (max-width: 663px) and (min-width: 608px)": {
        actors: {
            width: '90%',
            // paddingLeft: 50,
            // paddingRight: 50,
            marginBottom: 50
        },
        itemCard: {
            marginBottom: 30,
            marginRight: 5
        },
        btnAll: {
            marginTop: 30
        },
        paper: {
            width: 300,
            height: 300,
            overflow: 'scroll'
        }
    },
    "@media (max-width: 607px) and (min-width: 300px)": {
        actors: {
            width: '95%',
            // paddingLeft: 50,
            // paddingRight: 50,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column', 
            alignItems: 'center',
            marginBottom: 50
        },
        margin: {
            width: 270,
        },
        itemCard: {
            marginBottom: 30,
            marginRight: -10
        },
        btnAll: {
            marginTop: 30
        },
        content: {
            width: 270,
            paddingLeft: 0,
            paddingRight: 0
        },
        title: {
            width: 140
        },
        paper: {
            width: 300,
            height: 300,
            overflow: 'scroll'
        }
    }
})

const Actors = () => {
    const classes = useStyles();
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [descr, setDescr] = useState('');

    const firstData = active ? data : data.filter((item, i) => {
        return i < 10; 
    })

    const handleActive = () => {
        setActive(!active);
    }
    
    return (
        <Box className={classes.actors} id="actors">
            <Box className={classes.wrap}>
                <Box className={classes.wrap50}>
                    <Typography className={classes.title} variant="h2">Actors</Typography>
                </Box>
                <Box className={classes.wrap50}></Box>
            </Box>
            <Box className={classes.content}>
                <Box className={classes.margin}>
                    <GridList style={{height: active ? 1245 : 830, width: '100%', justifyContent: 'space-between'}} cols={4} cellHeight={180} className={classes.gridList}>
                        {
                            firstData.map((tile, i) => {
                                return (
                                    <Card onClick={() => {
                                        setName(tile.name);
                                        setImg(tile.avatar);
                                        setDescr(tile.descr);
                                        setOpen(true);
                                    }} style={{width: 250, height: 360, background: '#E04A55'}} className={classes.itemCard} key={tile.id + i}>
                                        <CardActionArea>
                                            <CardMedia className={classes.media} image={tile.avatar} title="photo" />
                                            <CardContent>
                                                <Typography className={classes.name} variant="h4">{tile.name.length > 15 ? tile.name.slice(0, 17) + '...' : tile.name}</Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                )
                            })
                        }
                    </GridList>
                    <Button onClick={handleActive} className={classes.btnAll} variant="contained">{active ? 'HIDE ALL' : 'SEE ALL'}</Button>
                </Box>
            </Box>
            <Modal 
            className={classes.modal}
            open={open}
            onClose={() => setOpen(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}>
                <Fade in={open}>
                    <Box className={classes.paper}>
                        <Box style={{width: 250, height: 330, backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} />
                        <Typography style={{marginTop: 20, marginBottom: 20}} variant="h2">{name}</Typography>
                        <Typography style={{fontFamily: 'Compact-reg'}} variant="h4">{descr}</Typography>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    )
}

export {Actors};