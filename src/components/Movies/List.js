import classes from "./List.module.css";
import Item from "./MovieItem";

import { useSelector } from "react-redux";
import { memo, useEffect, useState } from "react";

const List = () => {
    const [data, setData] = useState([]);
    const name = useSelector((state) => state.movieSlice.movieName);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?s=${name}&apikey=1cf8eb23`)
            .then((res) => res.json())
            .then((data) => setData(data.Search ?? []));
    }, [name]);

    return (
        <ul className={classes.ul}>
            {data.map((movie) => (
                <Item
                    name={movie.Title + " " + movie.Year}
                    img={movie.Poster}
                    id={movie.imdbID}
                    key={movie.imdbID}
                />
            ))}
        </ul>
    );
};

export default memo(List);
