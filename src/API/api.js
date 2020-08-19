import axios from 'axios';

const API_URL = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) =>{
    let selectedCountryUrl = API_URL;

    if(country){
        selectedCountryUrl = `${API_URL}/countries/${country}`
    }
    try{
        //we can straight return data like this from the response object. rather than data.confirmed and vice versa..

        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(selectedCountryUrl);

        //const modifiedData = { confirmed, recovered, deaths, lastUpdate }

        return { confirmed, recovered, deaths, lastUpdate };

    }catch(err){
        console.log(err)
    }
}

//for daily data which we can use for charts

export const fetchDailyData = async () =>{
    try {
        const { data } = await axios.get(`${API_URL}/daily`);
        // console.log(data)
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))

        return modifiedData;
    } catch (error) {
        
    }
}

//for country data..

export const fetchCountries = async () =>{
    try {
        const {data :{ countries }} = await axios.get(`${API_URL}/countries`)
        return countries.map( (country )=> country.name )
    } catch (error) {
        
    }
} 