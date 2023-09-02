import { Link, NavLink } from "react-router-dom"
import "./header.css";

export const Header = () => {
  return (
    <header>
        <h1>Colin Beltz</h1>
        <section className="navigation">
            <NavLink to="/" className="link">
                Home
            </NavLink>
            <NavLink to="/projects" className="link">
                Projects
            </NavLink>
            <NavLink to="/career" className="link">
                Career
            </NavLink>
            <NavLink to="/about" className="link">
                About Me
            </NavLink>
        </section>
    </header>
  )
}
