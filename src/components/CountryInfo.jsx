import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import formatNumber from "../helper/formatting";
import { useState } from "react";

function CountryInfo({ info, index }) {
  const isDark = useSelector((state) => state.global.isDark);
  const [population] = useState(formatNumber(info.population));
  const countires = useSelector((state) => state.filter.countries);
  return (
    <div>
      <Link
        to={`country/?id=${countires.findIndex((e) => e.name === info.name)}`}
      >
        <div
          className={`shadow-lg rounded-lg overflow-hidden ${
            isDark ? "bg-dark-mod-el" : "bg-light-mod-bg"
          }`}
        >
          <div
            style={{
              backgroundImage: `url(${info.flags.png || info.flags.svg})`,
            }}
            className="h-[200px] overflow-hidden bg-no-repeat bg-center bg-cover"
          ></div>
          <div className="p-6">
            <p className="mb-2 font-bold text-lg text-ellipsis">{info.name}</p>
            <p>
              <b>population:</b> <span>{population}</span>
            </p>
            <p>
              <b>region:</b> <span>{info.region}</span>
            </p>
            <p>
              <b>population:</b> <span>{info.capital}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CountryInfo;
