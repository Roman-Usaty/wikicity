import React, { useEffect } from "react";

export const TimePage = () => {
    const date = new Date(Date.now());
    useEffect(() => {

    }, [date]);
    return (
        <>
            <p style={{fontSize: 20}}>{date.toLocaleTimeString() + " " + date.toLocaleDateString()}</p>
        </>
    );
}