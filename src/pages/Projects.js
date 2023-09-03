// import { useEffect, useState } from "react";
import { ProjectCard } from "../components";

export const Projects = () => {

// const [projects, setProjects] = useState([]);

// useEffect(() => {
//   fetch('http://localhost:8000/projects')
// .then(response => response.json())
// .then((data => console.log(data)));
// }, []);

  return (
    <main>
      <h1>Projects</h1>
      <ProjectCard />
    </main>
  )
}
