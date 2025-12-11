import Header from "../Components/Header"
import Footer from "../Components/Footer"

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}