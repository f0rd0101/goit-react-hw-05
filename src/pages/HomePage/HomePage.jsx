import React, { useEffect, useState } from 'react'
import { fetchTrendMovie } from '../../MovieTrend'
import MovieList from '../MovieList/MovieList'


const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([])

  useEffect(()=>{
    async function getTrendMovies() {

        try{
          const movies = await fetchTrendMovie()
          setTrendMovies(movies)
        }
        catch(error){
         console.log(error);
         
        }
    }
    getTrendMovies()
  },[])
  return (
    <div >
     <h1>Trending Today!</h1>
    <MovieList movies ={trendMovies}/>
    </div>
  )
}
export default HomePage
