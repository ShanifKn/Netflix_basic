import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../Constants/constants";
import axios from "../axios";
import "./Css/RowPost.css";
import YouTube from "react-youtube";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [UrlId, setUrlId] = useState("");

  useEffect(() => {
    axios.get(props.url).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        if (res.data.results !== 0) {
          setUrlId(res.data.results[0]);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="row">
      <h2 className="title">{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            alt="poster"
            src={`${imageUrl + obj.backdrop_path}`}
          />
        ))}
      </div>
      {UrlId && <YouTube videoId={UrlId.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
