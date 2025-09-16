import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-left">
                <h1>
                    Explore the World, One Country at a Time.
                </h1>
                <p>
                    Discover the history, culture and beauty of every nation. Sort, serach and filter through countries to find the details you need
                </p>
                <NavLink to="/country">
                    <button>Start Exploring <FaLongArrowAltRight className="right-arrow" /> </button>
                </NavLink>
            </div>
            <div className="hero-right">
                <img src="/images/earth2.jpeg" alt="world beauty" />
            </div>
        </div>
    )
}