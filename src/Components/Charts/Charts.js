import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'

import { Line, Bar  } from 'react-chartjs-2';
import { fetchDailyData } from '../../API/api';

const Charts = props => {
    const [dailyData, setDailyData] = useState([]);

    useEffect( () =>{
        const fetchDailyApi = async () =>{
            setDailyData( await fetchDailyData());
        }

        fetchDailyApi();
        
    }, [dailyData]);

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

    return (
        <div className="row">
            <div className="col mt-5">
                {lineChart}
            </div>
        </div>
    )
}

// Charts.propTypes = {

// }

export default Charts
