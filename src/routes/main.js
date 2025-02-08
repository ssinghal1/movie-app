import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ExplorePage from "../pages/ExplorePage";
import DetailsPage from "../pages/DetailsPage";
import SearchPage from "../pages/SearchPage";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Home /> },
            { path: ":explore", element: <ExplorePage /> },
            { path: ":explore/:id", element: <DetailsPage /> },
            { path: "search", element: <SearchPage /> }
        ]
    }
]);

export default router