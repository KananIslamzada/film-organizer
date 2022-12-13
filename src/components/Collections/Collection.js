import { memo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from 'uuid'
import Button from "../Ui/Button";
import classes from "./Collection.module.css";
import CollectionItem from "./CollectionItem";
import { clear } from "../../store";
import { addCollection } from "../../store";

const Collection = () => {
    const [input, setInput] = useState("");

    const list = useSelector((state) => state.movieSlice.movieList);
    const dispatch = useDispatch();

    const handler = (e) => {
        setInput(e.target.value);
    };

    const cId = useRef(uuid());
    const formHandler = (e) => {
        e.preventDefault();

        const data = {
            id: cId.current,
            collectionName: input,
            movieList: list
        };

        setInput("");
        dispatch(addCollection(data));
        dispatch(clear());
    };



    return (
        <form onSubmit={formHandler} className={classes.container}>
            <input
                value={input}
                onChange={handler}
                type="text"
                placeholder="Collection Name"
            />
            <ul className={classes.ul}>
                {list.map((movie) => (
                    <CollectionItem name={movie.name} id={movie.id} key={movie.id} />
                ))}
            </ul>
            <Button off={!input}>Save Collection</Button>
        </form>
    );
};

export default memo(Collection);
