import { NavLink } from "react-router-dom"

export const Header = () => {
    return <header>
        <div className="container">
            <div className="header-container">
                <div className="header-left">
                    <NavLink to="/">
                        <h1>WorldAtlas</h1>
                    </NavLink>
                </div>
                <div className="header-right">
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="about">About</NavLink></li>
                            <li><NavLink to="country">Country</NavLink></li>
                            <li><NavLink to="contact">Contact</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
}