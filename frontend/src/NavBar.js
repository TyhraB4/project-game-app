import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="nav">
            <Link to="/" className="Home">
                Arcade
            </Link>
            <ul>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/profile">Profile</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}