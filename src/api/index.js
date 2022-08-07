import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
    
  },
  headers: {
    'X-RapidAPI-Key': '1f6a025e9dmsh12ab6e1eadf4072p150a94jsn4abbac1cbf65',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


export const getPlacesData = async () => {
    try {
        //request
        const {data : {data}} = await axios.get(URL, options);

        return data;
    } catch (error) {
        console.log(error);
    }
}