import React, { useEffect, useState } from "react";
import { useSelector} from "react-redux";
import GetGeoIdTime from "../api/time";
import { RootState } from "../store/store";

export const TimePage = () => {
    const city = useSelector((state: RootState) => state.city.value);
    const [geoId, setGeoId] = useState<string>("");

    const getGeoId = async (city:string) => {
        setGeoId(await GetGeoIdTime(city));
    }

    useEffect(() => {
        if (geoId === "") {
            getGeoId(city);
        }
    });

    return (
        <>
            <iframe title="time" frameBorder="no" scrolling="no" width="280" height="150" src={`https://yandex.ru/time/widget/?geoid=${geoId}&lang=ru&layout=horiz&type=digital&face=serif`}></iframe>
           
        </>
    );
}