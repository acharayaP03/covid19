import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'

import { Line, Bar  } from 'react-chartjs-2';
import { fetchDailyData } from '../../API/api';

const Charts = ({ data:{ confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect( () =>{
        const fetchDailyApi = async () =>{
            setDailyData( await fetchDailyData());
        }

        fetchDailyApi();
        
    }, []);

    const lineChart = (
        dailyData.length ? 
        (
            <Line data={ 
                {
                    labels: dailyData.map(({ date }) => date),
                    datasets: [
                        {
                            data: dailyData.map(({ confirmed }) => confirmed ),
                            label: 'INFECTED TILL DATE',
                            borderColor: '#3333ff',
                            fill: true
                        }, 
                        {
                            data: dailyData.map(({ deaths }) => deaths ),
                            label: 'DEATHS SO FAR',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255, 0, 0)',
                            fill: true
                        }
                    ]
                }
            }
        />)
        : null     
    );

    const barChart = (
        confirmed 
            ? (
                <Bar 
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                'rgba(0, 0, 255, 0.5',
                                'rgba(0, 255, 0, 0.5',
                                'rgba(255, 0, 0, 0.5',
                            ],
                            data: [confirmed.value, recovered.value, deaths.value ]
                        }]
                    }}
                    options={{
                        legend: { display: false},
                        title: { display: true, text: ` Current State in ${country}`}
                    }}
                />
            )
            : null
    )

    return (
        <div className="row">
            <div className="col mt-5">
                { country ? barChart : lineChart }
            </div>
        </div>
    )
}

// Charts.propTypes = {

// }

export default Charts
