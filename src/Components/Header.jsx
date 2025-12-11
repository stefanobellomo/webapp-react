import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/" aria-current="page">
                                    Homepage
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}