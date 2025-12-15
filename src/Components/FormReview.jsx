import { useState, useEffect } from "react"
import axios from "axios"

export default function FormReview({ movieId, onSuccess }) {

    const initialFormState = {
        name: "",
        vote: "",
        text: ""
    }

    const [formData, setFormData] = useState(initialFormState)

    function handleSubmit(e) {
        e.preventDefault()
        axios.post(`http://localhost:3007/api/movies/${movieId}/reviews`, formData)
            .then((response) => {
                setFormData(initialFormState)
                onSuccess && onSuccess();
            })
            .catch((error) => {
                console.log(error.response?.data || error);
            })
    }

    return (
        <form>

            <div className="mb-3">
                <label htmlFor="rating" className="form-label">Vote</label>
                <select
                    className="form-select"
                    name="vote"
                    id="vote"
                    value={formData.vote}
                    onChange={(e) => setFormData({ ...formData, vote: e.target.value })}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input className="form-control" type="text" name="name" value={formData.name} id="name" placeholder="add your name" onChange={(e) => setFormData({ ...formData, name: e.target.value })}>
                </input>
                {/* <span className={toggle ? 'd-none' : 'text-danger'}>Campo obbligatorio...</span> */}
            </div>
            <div className="mb-3">
                <label htmlFor="text" className="form-label">Review</label>
                <textarea className="form-control" name="text" value={formData.text} id="text" rows="5" placeholder="add your review" onChange={(e) => setFormData({ ...formData, text: e.target.value })}></textarea>
                {/* <span className={textToggle ? 'd-none' : 'text-danger'}>Campo obbligatorio...</span> */}
            </div>

            <button
                type="submit"
                className="btn btn-dark"
                onClick={handleSubmit}>
                Submit
            </button>

        </form>
    )
}