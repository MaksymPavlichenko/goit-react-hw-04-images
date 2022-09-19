import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '26914341-54aa11636e5e71a26cca98a98';

async function createRequest(name, page = 1) {
    const params = {
        url: URL,
        params: {
            key: KEY,
            page: page,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: false,
            q: name,
            per_page: 12, 
        },
    };
    return await axios(params);
}

export { createRequest };