import React from 'react';
import CountUp from 'react-countup';

 const Cards = ({ data : { confirmed, recovered, deaths, lastUpdate }}) => {

    if(!confirmed){
        return 'Loading ......'
    }
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
            <div className="col">
                <div className="card text-center">
                    <div className="card-body bg-primary text-light">
                        <h5 className="card-title">Infected</h5>
                        <p className="card-text">
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            />
                        </p>
                        <p className="card-text">Number of active cases of COVID-19 so far</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted ">Last updated {new Date(lastUpdate).toDateString()}</small>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card text-center">
                    <div className="card-body bg-success text-light">
                        <h5 className="card-title">Recovered</h5>
                        <p className="card-text"> <CountUp 
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                            /></p>
                        <p className="card-text">Number of recovered cases of COVID-19 so far</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted ">Last updated {new Date(lastUpdate).toDateString()}</small>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card text-center">
                    <div className="card-body bg-danger text-light">
                        <h5 className="card-title">Death</h5>
                        <p className="card-text"> <CountUp 
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                            /></p>
                        <p className="card-text">Number of death cases of COVID-19 so far</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted ">Last updated {new Date(lastUpdate).toDateString()}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;