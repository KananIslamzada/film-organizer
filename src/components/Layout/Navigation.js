import { memo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    return (
        <nav className={classes.nav}>
            <div className={classes.logo}>MustSee</div>
            <div className={classes.links}>
                {isHomePage ? (
                    <NavLink to="/collection">Collections</NavLink>
                ) : (
                    <NavLink to="/">Home</NavLink>
                )}
            </div>
        </nav>
    );
};

export default memo(Navigation);
