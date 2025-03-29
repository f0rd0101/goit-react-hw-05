import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const YOUR_ACCESS_KEY =  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2U3YmNmNTA5ZjEyZTA2NWQzZjJlY2Q4NzczMWMxNSIsIm5iZiI6MTc0MzI4MzMzOC4xOTM5OTk4LCJzdWIiOiI2N2U4NjQ4YTVmOTNhOWZkMjVkZGNmZTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7Tbu_0OGL6WLIDsEUyoGcR_GPHvIN2PIAoFy090VZ3Q'
const options ={
  headers: {
    Authorization: `Bearer ${YOUR_ACCESS_KEY}`,
  },
};

 const fetchTrendMovies = async () => {
  const {data} = await axios.get("trending/movie/day", options);
return data.results; 
};

 
  export const fetchMovieById = async (movieId) => {
    const {data} = await axios.get(`/movie/${movieId}`, options);
  return data; 
  };


  export const fetchCastsById = async (movieId) => {
    const {data} = await axios.get(`movie/${movieId}/credits`, options);
  return data.cast; 
  };


export const fetchReviewsById = async (movieId) => {
  const {data} = await axios.get(`movie/${movieId}/reviews`, options);
  return data.results; 
  };


export const fetchMovieByQuery = async (query) => {
  const {data} = await axios.get(`search/movie?query=${query}`, options);
  return data.results; 
  };

  export default fetchTrendMovies;


