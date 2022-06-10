import React, { useState } from "react";
import { Typography } from 'antd';

const { Title, Paragraph, Text }  = Typography;

export const CityPage = () => {
    const [city, setCity] = useState("Самара");

    return (
        <>
            <Typography>
                <Title>Здесь будет информация о городе {city}</Title>
                <Paragraph style={{fontSize:25}}>
                    Здесь будет загружена ифнормация о городе с Wikipedia.
                </Paragraph>
            </Typography>
        </>
    );
}

