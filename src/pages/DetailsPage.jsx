import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import DetailsCard from "../Components/DetailsCard";
import ReviewCard from "../Components/ReviewCard";
import FormReview from "../Components/FormReview";


export default function DetailsPage() {

    const { id } = useParams();

    const [movies, setMovies] = useState([])
    const [reviews, setReviews] = useState([])

    function fetchMovie() {
        axios.get(`http://localhost:3007/api/movies/${id}`)
            .then(res => {
                // or [] perchè così gestisco i casi in cui non ci sono recensioni associate anche se ora non serve
                setReviews(res.data.reviews || []);
                setMovies(res.data)
            });
    }

    useEffect(() => {
        fetchMovie();
    }, [id]);

    // console.log(movies, reviews);
    const navigate = useNavigate()

    return (
        <>
            <div className="container my-4">
                <section className="movie">

                    <DetailsCard movies={movies} onSuccess={fetchMovie} />

                </section>

                <section className="review">
                    <h1 className="my-4">Reviews</h1>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                        {reviews.map(review => (
                            <ReviewCard key={review.id} review={review} />
                        ))}

                        <div className="d-flex justify-content-center">
                            <button className="btn btn-dark" onClick={() => (navigate("/"))}>Torna indietro</button>
                        </div>

                    </div>
                </section>

                <section>
                    <div>
                        <h3>Leave your review</h3>
                        <FormReview movieId={id} />
                    </div>
                </section>
            </div>

        </>
    )
}

