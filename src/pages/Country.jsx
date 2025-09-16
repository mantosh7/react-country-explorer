import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/countryDataApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const res = await getCountryData();
            setCountries(res.data);
            setLoading(false);
            console.log(res.data);
        };
        fetchData();
    }, []);

    if (loading) return <Loader />

    // search logic
    const filteredCountries = countries.filter((country) => {
        if(search)
            return country.name.common.toLowerCase().includes(search.toLowerCase()) ;
        else 
            return country ;

    }) ;

    return <div className="country-container">

        <SearchFilter
            search={search}
            setSearch={setSearch}
        />


        <ul className="country-card">
            {filteredCountries.map((currCountry, index) => {
                return (
                    <CountryCard country={currCountry} key={index} />
                );
            })}
        </ul>
    </div>
}
