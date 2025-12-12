export default function DetailsCard({ movies }) {
    return (
        <div className="col d-flex align-items-center" key={movies.id}>
            <div className="card">
                <img src={`../../public/movies_cover/${movies.image}`} alt="cover" className="card-img-top" />
            </div>
            <div className="card-body p-2">
                <h1>Title: {movies.title}</h1>
                <h6><i className="bi bi-person-video3 me-2"></i> {movies.director}</h6>
                <h6><i className="bi bi-tags me-2"></i> {movies.genre}</h6>
                <h6><i className="bi bi-calendar-event me-2"></i> {movies.release_year}</h6>
                <h6><i className="bi bi-card-text me-2"></i> {movies.abstract}</h6>
            </div>
        </div>
    )
}