import { FaMagnifyingGlass } from "react-icons/fa6";
import { Field, Form, Formik } from "formik";
import { Toaster } from "react-hot-toast";
import s from "./MoviesPage.module.css";
import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import { fetchMovieByQuery } from "../../services/api";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieByQuery(query);
      setMovies(data);
    };
    getData();
  }, [query]);

  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      return setSearchParams({});
    }
    searchParams.set("query", newQuery);
    setSearchParams(searchParams);
  };

  const initialValues = {
    query: "",
  };

  const handleSubmit = (values) => {
    handleChangeQuery(values.query);
    values.query = ""; 
  };


  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className={s.search}>
        <Toaster />
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={s.searchBar}>
            <button type="submit" className={s.searchBtn}>
              <FaMagnifyingGlass />
            </button>
            <Field
              className={s.searchInput}
              name="query"
              type="text"
              placeholder="Search movies..."
            />
          </Form>
        </Formik>
      </div>
      <div className={s.moviesWrap}>
        <MovieList movies={filteredMovies} />
      </div>
    </>
  );
};

export default MoviesPage;
