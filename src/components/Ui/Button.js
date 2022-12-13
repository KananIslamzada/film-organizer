import { memo } from "react";
import classes from "./Button.module.css";

const Button = ({ children, onClick, off }) => {
    return (
        <button disabled={off} onClick={onClick} className={classes.button}>
            {children}
        </button>
    );
};

export default memo(Button);
