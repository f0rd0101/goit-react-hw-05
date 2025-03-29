import axios from 'axios'


const YOUR_ACCESS_KEY =  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2U3YmNmNTA5ZjEyZTA2NWQzZjJlY2Q4NzczMWMxNSIsIm5iZiI6MTc0MzI4MzMzOC4xOTM5OTk4LCJzdWIiOiI2N2U4NjQ4YTVmOTNhOWZkMjVkZGNmZTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7Tbu_0OGL6WLIDsEUyoGcR_GPHvIN2PIAoFy090VZ3Q'
const options = {
    headers: {
        Authorization: `Bearer ${YOUR_ACCESS_KEY}`
    }
}
export const fetchTrendMovie = async () => {
    const { data } = await axios.get("https://api.themoviedb.org/3/trending/movie/day", options);
    return data.results;
}
