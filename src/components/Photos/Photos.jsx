import React, { useState} from 'react';
import { Box, } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import Bg from '../../assets/images/bgs.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import './Photos.sass';
import SwiperCore, { Navigation} from 'swiper';
import Slider1 from '../../assets/images/slider1.jpg';
import Slider2 from '../../assets/images/slider2.jpg';
import Slider3 from '../../assets/images/slider3.jpg';
import Slider4 from '../../assets/images/slider4.jpg';

SwiperCore.use([Navigation]);

const useStyles = makeStyles({
    photos: {
        width: '100%',
        height: 800,
        backgroundImage: `url(${Bg})`,
        marginBottom: 200,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
        backgroundSize: 'cover' 
    },
    blur: {
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        // backdropFilter: 'blur(10px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    center: {
        width: 1000,
        height: 500,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    item1: {
        widht: '100%',
        height: '100%',
        backgroundImage: `url(${Slider1})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
        backgroundSize: 'cover' 
    },
    item2: {
        widht: '100%',
        height: '100%',
        backgroundImage: `url(${Slider2})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
        backgroundSize: 'cover' 
    },
    item3: {
        widht: '100%',
        height: '100%',
        backgroundImage: `url(${Slider3})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
        backgroundSize: 'cover' 
    },
    item4: {
        widht: '100%',
        height: '100%',
        backgroundImage: `url(${Slider4})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
        backgroundSize: 'cover' 
    },
    wrapBtnPrev: {
        width: 100,
        height: 100,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        cursor: 'pointer',
        transform: 'scale(0.8, 0.8)',
    },
    btn1: {
        width: 69,
        height: 10,
        background: 'white',
        transform: 'rotate(-36.5deg)'
    },
    btn2: {
        width: 69,
        height: 10,
        background: 'white',
        transform: 'rotate(36.5deg)'
    },
    wrapBtnNext: {
        width: 100,
        height: 100,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        cursor: 'pointer',
        // transform: 'scale(0.8, 0.8)',
        transform: 'scale(-1, 1)'
    },
    wrapBtnPrevTrans: {
        width: 100,
        height: 100,
        transform: 'scale(0.8, 0.8)'
    },
    "@media (max-width: 1017px) and (min-width: 718px)": {
        center: {
            width: 700,
            height: 300
        },
        photos: {
            height: 500,
            marginBottom: 50
        }
    },
    "@media (max-width: 717px) and (min-width: 565px)": {
        center: {
            width: '100%',
            height: 300
        },
        photos: {
            height: 500,
            marginBottom: 50
        }
    },
    "@media (max-width: 564px) and (min-width: 401px)": {
        center: {
            width: '80%',
            height: 300
        },
        photos: {
            height: 400,
            marginBottom: 50
        },
        wrapBtnPrev: {
            display: 'none'
        },
        wrapBtnPrevTrans: {
            display: 'none'
        }
    },
    "@media (max-width: 400px) and (min-width: 300px)": {
        center: {
            width: '95%',
            height: 250
        },
        photos: {
            height: 350,
            marginTop: 100,
            marginBottom: 50
        },
        wrapBtnPrev: {
            display: 'none'
        },
        wrapBtnPrevTrans: {
            display: 'none'
        }
    }
})

const Photos = () => {
    const classes = useStyles();
    const [swiper, setSwiper] = useState(null);

    const params = {
        onInit (swiper) {
          setSwiper(swiper)
        }
    }

    const goNext = () => {
        if (swiper) {
            swiper.slideNext();
        }
    }

    const goPrev = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    }

    return (
        <Box className={classes.photos} id="photos">
            <Box className={classes.blur}>
                <Box className={classes.center}>
                    <Box className={classes.wrapBtnPrev} onClick={goPrev}>
                        <Box className={classes.btn1} />
                        <Box className={classes.btn2} />
                    </Box>
                    <Swiper loop={true} {...params} slidesPerView={1}>
                        <SwiperSlide><Box className={classes.item1} /></SwiperSlide>
                        <SwiperSlide><Box className={classes.item2} /></SwiperSlide>
                        <SwiperSlide><Box className={classes.item3} /></SwiperSlide>
                        <SwiperSlide><Box className={classes.item4} /></SwiperSlide>
                    </Swiper>
                     <Box className={classes.wrapBtnPrevTrans}>
                        <Box className={classes.wrapBtnNext} onClick={goNext}>
                            <Box className={classes.btn1} />
                            <Box className={classes.btn2} />
                        </Box>
                     </Box>
                </Box>
            </Box>
        </Box>
    )
}

export {Photos};