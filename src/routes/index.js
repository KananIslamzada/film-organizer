import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import CollList from "../pages/CollList/CollectionListPage";
import Coll from "../pages/CollPage/CollectionPage";

const RouteContainer = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/collection/" element={<CollList />} />
            <Route path="/collection/:id" element={<Coll />} />
        </Routes>
    );
};

export default RouteContainer;
