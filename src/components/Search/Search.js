import { memo, useId, useState } from "react";
import { useDispatch } from "react-redux";
import { renameMovie } from "../../store";

import classes from "./Search.module.css";

const SearchBox = () => {
    const [input, setInput] = useState("");

    const iId = useId();
    const dispath = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispath(renameMovie(input));
    };

    const inputHandler = (e) => {
        setInput(e.target.value);
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor={iId}>Search Movie:</label>
                <br />
                <div className={classes.inputContainer}>
                    <input
                        type="text"
                        id={iId}
                        value={input}
                        onChange={inputHandler}
                        placeholder="Movie Name"
                        className={classes.input}
                    />
                    <button disabled={!input} className={classes.button}>
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default memo(SearchBox);
