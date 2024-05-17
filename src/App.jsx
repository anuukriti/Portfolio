import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home";
import Layout from "./Layout";
import Work from "./components/Work";
import About from "./components/About";
import Achievement from "./components/Achievement";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route path="" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/About" element={<About />} />
                <Route path="/Achievement" element={<Achievement />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
}

export default App;
