import { Link, NavLink } from "react-router-dom"
import "./header.css";

export const Header = () => {
  return (
    <header>
            <Link to="/" className="title-link">
                <img src="" alt="" />
                <span className="title">Colin Beltz</span>
            </Link>
            <nav className="navigation">
                <NavLink to="/projects" className="link">
                    Projects
                </NavLink>
                <NavLink to="/about" className="link">
                    About Me
                </NavLink>
                <NavLink to="/career" className="link">
                    Career
                </NavLink>            
            </nav>
    </header>
  )
}
