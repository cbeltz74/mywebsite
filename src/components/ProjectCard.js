import "./projectCard.css";
import screenshot from "../assets/photos/screenshot_taskmate.jpg";

export const ProjectCard = () => {

  return (
    <>
        <section className="project">
            <h2>Project Name</h2>
            <section className="project-card">
                <section className="projSS">
                    <img src={screenshot} alt="Project screenshot" />
                </section>

                <section className="projDesc">
                    <h3>Project Description:</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem vero impedit tempora? Quae aut assumenda saepe impedit praesentium fuga repellat perferendis? Fuga aliquam culpa officia nihil in? In, assumenda et!</p>
                </section>
                
                <section className="projTech">
                    <h3>Technology used:</h3>
                    <ul>
                        <li>CSS</li>
                        <li>Flexbox</li>
                        <li>CSS Grid</li>
                        <li>React</li>
                        <li>React Router </li>
                    </ul>
                </section>
            </section>
        </section>


    </>
  )
}
