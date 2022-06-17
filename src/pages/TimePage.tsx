import React, { useEffect, useState } from "react";
import { useSelector} from "react-redux";
import { useHttp } from "../hooks/http.hook";
import { RootState } from "../store/store";

export const TimePage = () => {
    const city = useSelector((state: RootState) => state.city.value);
    const [geoId, setGeoId] = useState<string>("");
    const {loading, error, request, clearError} = useHttp();

    const getGeoId = async (city:string) => {
        setGeoId(await request("/api/time/geoid/" + city))
    }

    useEffect(() => {
        if (geoId === "") {
            getGeoId(city);
        }
    });

    if (loading) {
        return (
            <>
                <p>Loading...</p>
            </>
        )
    }

    return (
        <>
            <iframe  frameBorder="no" scrolling="no" width="280" height="150" src={`https://yandex.ru/time/widget/?geoid=${geoId}&lang=ru&layout=horiz&type=digital&face=serif`}></iframe>
           
        </>
    );
}