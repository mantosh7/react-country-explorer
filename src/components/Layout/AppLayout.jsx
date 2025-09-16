import { Outlet } from "react-router-dom"
import { Footer } from "../UI/Footer"
import { Header } from "../UI/Header"
import { Hero } from "../UI/Hero"

export const AppLayout = () => {
    return <>
        <Header />
        <Outlet />
        <Footer />
    </>
}