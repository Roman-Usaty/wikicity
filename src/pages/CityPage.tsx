import React, { useState } from "react";
import { Typography, Input, Divider } from 'antd';
import "../styles/citypages.css";

const { Search } = Input;
const { Title, Paragraph, Text }  = Typography;

export const CityPage = () => {
    const [city, setCity] = useState("Самара");

    return (
        <>
            <Typography>
                <div style={{display: "flex", justifyContent:"space-around"}}>
                <Search className="search" placeholder="Введите город"/>
                </div>
                
                <Divider />
                <Title>Здесь будет информация о городе {city}</Title>
                <Paragraph style={{fontSize:25}}>
                    Здесь будет загружена ифнормация о городе с Wikipedia.
                </Paragraph>
            </Typography>
        </>
    );
}

