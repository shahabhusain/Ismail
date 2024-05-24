// Router.jsx
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import Recent from "../Pages/Recent";
import CaseStudies from "../Pages/CaseStudies";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/case" element={<CaseStudies />} />
        </Route>
        </>
    )
);

export default router;
