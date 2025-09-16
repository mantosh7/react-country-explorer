import countryFacts from "../api/countryData.json";
export const About = () => {
    return (
        <div className="about-container">
            <div className="about-heading">
                <h1>Here are the Interesting Facts</h1>
                <br />
                <h1>we're proud of</h1>
            </div>

            <div className="about-card-container">
                <div className="card-holder">

                    {countryFacts.map((countryData) => {
                        const { id, country, capital, population, interestingFacts } = countryData;
                        return (
                            <div className="card"  key={id}>
                                <p className="card-title">{country}</p>
                                <p>
                                    <span className="card-description">Capital:</span>
                                    {capital}
                                </p>

                                <p>
                                    <span className="card-description">Population:</span>
                                    {population}
                                </p>

                                <p>
                                    <span className="card-description">Interesting Fact:</span>
                                    {interestingFacts}
                                </p>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
