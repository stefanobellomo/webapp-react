export default function DetailsCard({ movies }) {
    return (
        <div className="col d-flex" key={movies.id}>
            <div className="card">
                <img src={`https://placehold.co/200x200?text=${movies.title}`} alt="cover" className="card-img-top " />
            </div>
            <div className="card-body p-2">
                <h1>Title: {movies.title}</h1>
                <h6>Director: {movies.director}</h6>
                <h6>Genre: {movies.genre}</h6>
                <h6>Relase year: {movies.release_year}</h6>
                <h6>Plot: {movies.abstract}</h6>
            </div>
        </div>
    )
}