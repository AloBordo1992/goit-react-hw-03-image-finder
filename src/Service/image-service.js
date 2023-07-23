import axios from 'axios';

const API_KEY = '31248055-e075bd58b7f60ee40b8d7aef1';

axios.defaults.baseURL = 'https://pixabay.com/api/';

async function fetchImg(searchValue, page) {
  try {
    const { data } = await axios.get('?', {
      params: {
        key: API_KEY,
        q: searchValue,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
        page: page,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
}
export { fetchImg };
