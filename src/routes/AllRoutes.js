import { Routes, Route } from "react-router-dom";
import { About, Career, Home, Projects } from "../pages";


export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} title="Home" />
            <Route path="/about" element={<About />} title="About Me" />
            <Route path="/career" element={<Career />} title="Career" />
            <Route path="/projects" element={<Projects />} title="Projects" />
        </Routes>
    </>
  )
}
