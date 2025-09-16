import { useEffect, useState } from "react"
import { getIndCountryData } from "../../api/countryDataApi";
import { NavLink, useParams } from "react-router-dom";
import { Loader } from "../UI/Loader";
import {FaLongArrowAltRight} from "react-icons/fa" ;


export const CountryDetails = () => {
    const params = useParams();
    const [country, setCountry] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const res = await getIndCountryData(params.id);
            console.log(res);
            setCountry(res.data[0]);
            setLoading(false);
        }

        fetchData();
    }, [params.id]);

    if (loading) return <Loader />;
    return (

        <div className="country-detail-container">
            <div className="image-container">
                <img src={country.flags.svg} alt="country flag" />
            </div>

            <div className="country-details-card">
                <h1>{country.name.common}</h1>
                <p>Native Names:
                    <span>
                        {Object.keys(country.name.nativeName)
                            .map((key) => country.name.nativeName[key].common)
                            .join(",")
                        }
                    </span>
                </p>
                <p>Population: <span>{country.population.toLocaleString()}</span></p>
                <p>Region: <span>{country.region}</span></p>
                <p>Sub Region: <span>{country.subregion}</span></p>
                <p>Capital: <span>{country.capital ? country.capital.join(", ") : "N/A"}</span></p>
                <p>Top Level Domain: <span>{country.tld[0]}</span></p>
                <p>Currencies: 
                    <span>
                        {Object.keys(country.currencies)
                            .map((curElem) => country.currencies[curElem].name)
                            .join(",")
                        }
                    </span>
                </p>
                <p>Languages: 
                    <span>
                        {Object.keys(country.languages)
                            .map((key) => country.languages[key])
                            .join(",")
                        }
                    </span>
                </p>
            </div>

            <div className="go-back-btn">
                <NavLink to="/country">
                    <button>Go Back <FaLongArrowAltRight className="right-arrow"/></button>
                </NavLink>
            </div>
        </div>
    )
}