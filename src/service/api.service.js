import axios from "axios";
// const apiKey = import.meta.env
const api = 'https://youtube-v31.p.rapidapi.com'
const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'x-rapidapi-key': '90f281d048msh0fee3414dbfc426p15ff5ajsnd9e5a8540ec0',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
};

export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${api}/${url}`, options)
        return response.data
    }
}
