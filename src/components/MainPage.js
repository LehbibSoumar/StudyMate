import React from "react";
import { useLocation } from "react-router-dom";
import NavPage from "./NavPage";
import Sidebar from './Sidebar';

const MainPage = () => {
    const location = useLocation();

    // Vérifie si la route courante est "/login"
    const shouldDisplaySidebar = !["/login", "/register"].includes(
        location.pathname
      );

    return (
        <React.Fragment>
            {/* sidebar section */}
            <section>
                {shouldDisplaySidebar && (
                    <div>
                        <Sidebar />
                    </div>
                )}
            </section>

            {/* main section */}
            <section>
                <div>
                    <NavPage />
                </div>
            </section>
        </React.Fragment>
    );
}

export default MainPage;
