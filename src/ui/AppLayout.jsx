import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCountries } from "../slice/filterSlice";
import Loading from "./Loading";

function AppLayout() {
  const isDark = useSelector((state) => state.global.isDark);
  const { countries } = useSelector((state) => state.filter);
  const [isLoading, setIsloading] = useState("idle");
  const dispatch = useDispatch();
  useEffect(
    function () {
      if (countries.length !== 0) return;
      async function gettingData() {
        try {
          setIsloading("loading");

          const res = await fetch("../../public/data/data.json");

          if (!res.ok) throw new Error("failled to fetch data");

          const data = await res.json();
          dispatch(fetchCountries(data));
          setIsloading("idle");
        } catch (e) {
          console.error(e.message);
          setIsloading("error");
        }
      }
      gettingData();
    },
    [countries, dispatch]
  );

  return (
    <div
      className={`${
        isDark
          ? "bg-dark-mod-bg text-dark-txt-light-el"
          : "bg-light-mod-bg text-light-mod-txt"
      } min-h-screen`}
    >
      {isLoading === "loading" && <Loading />}
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
