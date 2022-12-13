import { memo } from "react";
import { useDispatch } from "react-redux";
import { addStore } from "../../store";
import Button from "../Ui/Button";
import classes from "./MovieItem.module.css";

const MovieListItem = ({ id, img, name }) => {
    const dispatch = useDispatch();

    const buttonClickHandler = (name, id) => {
        const movie = { name, id };
        dispatch(addStore(movie));
    };
    return (
        <li className={classes.listItem}>
            <div className={classes.imgContainer}>
                <img src={img} alt={name + "movie"} />
            </div>
            <div className={classes.nameContainer}>
                <h2 className={classes.name}>{name}</h2>
                <div>
                    <Button
                        onClick={() => buttonClickHandler(name, id)}
                    >
                        Add To Collection
                    </Button>
                </div>
            </div>
        </li >
    );
};

export default memo(MovieListItem);
