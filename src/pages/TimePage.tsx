import React from "react";

export const TimePage = () => {
    const date = new Date(Date.now());
    return (
        <>
            <p style={{fontSize: 20}}>{date.toLocaleTimeString() + " " + date.toLocaleDateString()}</p>
        </>
    );
}