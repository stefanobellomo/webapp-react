import { Link, NavLink } from "react-router-dom"

export default function Footer() {
    return (
        <>
            <div className="container d-flex">
                <div>
                    <h1>Utilies</h1>
                    <ul className="d-flex flex-column p-0">
                        <Link className="social" to="/">Homepage</Link>
                    </ul>
                </div>
                <div className="mx-5">
                    <h1>Social</h1>
                    <ul className="d-flex flex-column p-0 social">
                        <Link className="social" to="/" >
                            <i className="bi bi-facebook me-2"></i>
                            Facebook
                        </Link>
                        <Link className="social" to="/">
                            <i className="bi bi-instagram me-2"></i>
                            Instagram
                        </Link>
                        <Link className="social" to="/">
                            <i className="bi bi-twitter-x me-2"></i>
                            X
                        </Link>
                        <Link className="social" to="/">
                            <i className="bi bi-youtube me-2"></i>
                            YouTube
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}