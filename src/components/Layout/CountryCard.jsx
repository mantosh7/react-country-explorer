import {NavLink} from "react-router-dom" ;
import {FaLongArrowAltRight} from "react-icons/fa" ;

export const CountryCard = ({ country }) => {
  const { capital, flags, name, population, region } = country;

  return (
    <li className="country-list-box">
      <div className="image-container">
        <img src={flags.svg} alt={`${name.common} flag`} />
      </div>
      <h1>{name.common}</h1>
      <p>Population: <span>{population.toLocaleString()}</span></p>
      <p>Region: <span>{region}</span></p>
      <p>Capital: <span>{capital ? capital.join(", ") : "N/A"}</span></p>

      <NavLink to={`/country/${name.common}`}>
        <button>Read More <FaLongArrowAltRight className="right-arrow"/></button>
      </NavLink>
    </li>
  );
};
