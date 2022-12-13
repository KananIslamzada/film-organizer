import { memo } from "react";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../store";

import classes from "./CollectionItem.module.css";

const CollectionListItem = ({ name, id }) => {
    const dispatch = useDispatch();
    const clickHandler = () => {
        console.log(id);
        dispatch(deleteMovie(id));
    };
    return (
        <li className={classes.li}>
            <span>{name}</span>{" "}
            <button type="button" onClick={clickHandler}>
                X
            </button>
        </li>
    );
};

export default memo(CollectionListItem);
