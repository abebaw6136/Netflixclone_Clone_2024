import React, { useEffect, useState } from 'react'; // Ensure this is correct
import './Row.css';
import axios from '../../../utils/axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";

  // Fetch the movies using the provided fetchUrl
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        console.log(request)
        setMovies(request.data.results);
      } catch (error) {
        console.error("Error fetching movies: ", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  // Handle movie click to fetch trailer URL
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || movie?.original_title || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams.get('v'))
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.error("Error fetching trailer: ", error));
    }
  };

  // YouTube player options
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
          />
        ))}
      </div>
      {trailerUrl && (
        <div style={{ padding: '40px' }}>
          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </div>
  );
};

export default Row; 

