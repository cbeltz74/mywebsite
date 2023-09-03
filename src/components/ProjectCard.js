import "./projectCard.css";
import screenshot from "../assets/photos/screenshot_taskmate.jpg";

export const ProjectCard = () => {

  return (
    <>
        <section className="project-card">
            <section className="projSS">
                <img src={screenshot} alt="Project screenshot" />
            </section>

            <section className="projDesc">
                <h3>Project Name</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem vero impedit tempora? Quae aut assumenda saepe impedit praesentium fuga repellat perferendis? Fuga aliquam culpa officia nihil in? In, assumenda et!</p>
                <h4>Technology used:</h4>
                <p>React, React Router</p>
            </section>
            
            <section className="projLinks">
                <h3>Project Links</h3>
                <ul>
                    <a href="/"><li>Code on Github</li></a>
                    <a href="/"><li>Demo</li></a>
                </ul>
            </section>
        </section>
    </>
  )
}
