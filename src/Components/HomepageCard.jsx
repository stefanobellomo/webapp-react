import { useNavigate } from "react-router-dom"

export default function HomepageCard({ movie }) {

    const navigate = useNavigate()

    function handleClick(movie) {
        navigate(`/DetailsPage/${movie}`)
    }

    return (
        <div className="col" key={movie.id}>
            <div className="card">
                <img src={`../../movies_cover/${movie.image}`} alt="cover" className="card-img-top" />
            </div>
            <div className="card-body p-2">
                <h1>{movie.title}</h1>
                <h6>{movie.director}</h6>
                <h6>{movie.genre}</h6>
                <button className="btn btn-dark" onClick={() => handleClick(movie.id)}>Details film</button>
            </div>
        </div>
    )
}