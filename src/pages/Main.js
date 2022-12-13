import Collection from "../components/Collections/Collection";
import List from "../components/Movies/List";
import SearchBox from "../components/Search/Search";
import classes from "./Main.module.css";

const MainPage = () => {
    return (
        <div className={classes.container}>
            <div className={classes.leftSide}>
                <SearchBox />
                <List />
            </div>
            <div className={classes.rightSide}>
                <Collection />
            </div>
        </div>
    );
};

export default MainPage;
