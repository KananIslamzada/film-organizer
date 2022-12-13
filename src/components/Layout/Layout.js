import { memo } from "react";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>{children}</main>
        </>
    );
};

export default memo(Layout);
