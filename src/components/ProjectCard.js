import { useState, useEffect } from "react";
import "./projectCard.css";

export const ProjectCard = () => {


    const [projects, setProducts ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/projects')
      .then(response => response.json())
      .then(data => setProducts(data));
      }, []);

  return (


    <section className="project-wrapper">

    { projects.map((project) => (
        <section key={project.id} className="project-card">
            <section className="projSS">    
                <img src={project.screenshot} alt={`${project.name} screenshot`} />
            </section>

            <section className="projDesc">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <h4>Technology used:</h4>
                <p>{project.technology}</p>
            </section>
            
            <section className="projLinks">
                <h3>Project Links</h3>
                <ul>
                    <a href={project.github}><li>Github</li></a>
                    <a href={project.demo}><li>Demo</li></a>
                </ul>
            </section>
        </section>
    )) }

</section>
  )
}
