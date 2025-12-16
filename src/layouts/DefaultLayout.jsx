import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { Outlet } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"
import Loader from "../Components/Loader"

export default function DefaultLayout() {

    const { loading } = useGlobalContext()

    return (
        <>
            <Header />
            {loading && <Loader />}
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}