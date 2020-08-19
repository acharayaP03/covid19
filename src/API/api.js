import axios from 'axios';

const API_URL = 'https://covid19.mathdro.id/api';

export const fetchData = async () =>{
    try{
        //we can straight return data like this from the response object. rather than data.confirmed and vice versa..

        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(API_URL);

        //const modifiedData = { confirmed, recovered, deaths, lastUpdate }

        return { confirmed, recovered, deaths, lastUpdate };

    }catch(err){

    }
}