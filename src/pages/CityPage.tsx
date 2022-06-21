import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCity } from "../slices/citySlice";
import { Typography, Input, Divider } from 'antd';
import { RootState } from "../store/store";
import SearchCity from "../api/search";
import "../styles/citypages.css";

const { Search } = Input;
const { Title, Paragraph}  = Typography;

export const CityPage = () => {
    const city = useSelector((state: RootState) => state.city.value);
    const [text, setText] = useState<string>("");
    const dispatch = useDispatch(); 
   
    const searchCity = async (value:any) => {   
        dispatch(setCity(value));
        await getText(value);
    }
    const getText = async (city:string) => {
        setText(await SearchCity(city));
    }

    useEffect(() => {
        if (text === "") {
            getText(city);
        }
    })
      

    return (
        <>
            <Typography>
                <div style={{display: "flex", justifyContent:"space-around"}}>
                    <Search className="search" placeholder="Введите город" onSearch={searchCity}/>
                </div>
                
                <Divider />
                <Title>{city}</Title>
                    <Paragraph style={{fontSize: 20}}>
                        {
                            text
                        }
                    </Paragraph>
            </Typography>
        </>
    );
}

