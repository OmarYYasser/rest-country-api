import formatNumber from "../helper/formatting";
import CountryBorderParent from "./CountryBorderParent";

function CountryShowInfo({ country }) {
  const population = formatNumber(country?.population);
  

  return (
    <div className="pt-12 flex items-start gap-12 md:gap-24 flex-col lg:items-center lg:flex-row">
      <div className="w-[32rem] max-w-full self-center lg:self-start">
        <img
          className="w-full"
          src={country.flags.png || country.flags.svg}
          alt={`${country.name} flag`}
        />
      </div>
      <div className="flex-1 w-full">
        <h2 className="text-3xl font-bold">{country.name}</h2>
        <div className="flex lg:justify-between justify-start lg:flex-row flex-col lg:self-start">
          <div>
            <p>Native Name: {country?.nativeName}</p>
            <p>Population: {population}</p>
            <p>Region: {country?.region}</p>
            <p>Sub Region: {country?.subregion}</p>
            <p>Capital: {country?.capital}</p>
          </div>
          <div>
            <p>Top Level Domain: {country?.topLevelDomain}</p>
            <p>
              Currencies:{" "}
              {country?.currencies.map((curr, i) =>
                i !== 0 ? `, ${curr.name}` : curr.name
              )}
            </p>
            <p>
              languages:{" "}
              {country?.languages.map((lang, i) =>
                i !== 0 ? `, ${lang.name}` : lang.name
              )}
            </p>
          </div>
        </div>

        <CountryBorderParent country={country} />
      </div>
    </div>
  );
}

export default CountryShowInfo;
