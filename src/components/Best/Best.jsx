import React from 'react';
import {Typography, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import Chart from "react-apexcharts";

const useStyles = makeStyles({
    wrap: {
        width: 1700,
        background: 'white',
        marginBottom: 200,
        margin: '0 auto'
    },
    item: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    item2: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Compact-bol',
        width: 600,

    },
    wrapCharts: {
        width: '100%',
        display: 'flex',
        marginTop: 70
    },
    chartName: {
        fontFamily: 'Compact-reg'
    },
    "@media (max-width: 1717px) and (min-width: 1448px)": {
      wrap: {
        width: 1300
      },
      item: {
        width: '40%'
      },
      wrapCharts: {
        justifyContent: 'space-between'
      }
    },
    "@media (max-width: 1447px) and (min-width: 1089px)": {
      wrap: {
        width: 1000
      },
      item: {
        width: '50%',
      },
      wrapCharts: {
        justifyContent: 'space-between'
      },
      title: {
        width: '100%'
      }
    },
    "@media (max-width: 1088px) and (min-width: 601px)": {
      wrap: {
        width: '80%',
        marginTop: -100,
        marginBottom: 50
      },
      item: {
        width: '100%',
      },
      wrapCharts: {
        justifyContent: 'space-between',
        flexDirection: 'column'
      },
      title: {
        width: '100%'
      },
      item2: {
        width:  '100%'
      }
    },
    "@media (max-width: 600px) and (min-width: 401px)": {
      wrap: {
        width: '95%',
        marginTop: -100,
        marginBottom: 50
      },
      item: {
        width: '50%',
      },
      item2: {
        width: '100%',
      },
      wrapCharts: {
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
      },
      title: {
        width: '100%'
      }
    },
    "@media (max-width: 400px) and (min-width: 300px)": {
      wrap: {
        width: '95%',
        marginTop: -150,
        marginBottom: 50
      },
      item: {
        width: '60%',
      },
      wrapCharts: {
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: -60
      },
      title: {
        width: '100%'
      },
      item2: {
        width: '100%'
      }
    }
});

const config = {
    options: {
        colors: ['#E04A55'],
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: [1, 3, 6, 8, 9, 10, 13]
        }
      },
      series: [
        {
          name: "rating",
          data: [100, 90, 80, 70, 60, 50, 40]
        }
      ],
}

const config2 = {
    options: {
        colors: ['#E04A55'],
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5, 7, 8]
        }
      },
      series: [
        {
          name: "rating",
          data: [40, 50, 30, 70, 60, 90, 100]
        }
      ],
}

const config3 = {
    options: {
        colors: ['#E04A55'],
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5, 7, 8]
        }
      },
      series: [
        {
          name: "rating",
          data: [40, 20, 30, 70, 60, 40, 100]
        }
      ],
}

const config4 = {
    options: {
        colors: ['#E04A55'],
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5, 7, 8]
        }
      },
      series: [
        {
          name: "rating",
          data: [20, 30, 40, 50, 40, 30, 20]
        }
      ],
}

const Best = () => {
    const classes = useStyles();
    return (
        <Box className={classes.wrap} id="best">
            <Box className={classes.item2}>
                <Typography className={classes.title} variant="h2">Best series</Typography>
            </Box>
            <Box className={classes.wrapCharts}>
                <Box className={classes.item}>
                    <Typography className={classes.chartName} variant='h4'>
                        Season 1
                    </Typography>
                    <Chart
                        options={config.options}
                        series={config.series}
                        type="bar"
                        width="170%"
                        className={classes.chart}
                        />
                    </Box>
                <Box className={classes.item}>
                    <Typography className={classes.chartName} variant='h4'>
                        Season 2
                    </Typography>
                    <Chart
                        options={config2.options}
                        series={config2.series}
                        type="bar"
                        width="170%"
                        />
                </Box>
            </Box>
            <Box className={classes.wrapCharts}>
                <Box className={classes.item}>
                    <Typography className={classes.chartName} variant='h4'>
                        Season 3
                    </Typography>
                    <Chart
                        options={config3.options}
                        series={config3.series}
                        type="bar"
                        width="170%"
                        />
                    </Box>
                <Box className={classes.item}>
                    <Typography className={classes.chartName} variant='h4'>
                        Season 4
                    </Typography>
                    <Chart
                        options={config4.options}
                        series={config4.series}
                        type="bar"
                        width="170%"
                        />
                </Box>
            </Box>
        </Box>
    )
}

export {Best};