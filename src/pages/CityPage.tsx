import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCity } from "../slices/citySlice";
import { Typography, Input, Divider } from 'antd';
import "../styles/citypages.css";
import { RootState } from "../store/store";

const { Search } = Input;
const { Title, Paragraph}  = Typography;

export const CityPage = () => {
    const city = useSelector((state: RootState) => state.city.value);
    const dispatch = useDispatch();

    const changeHandler = (event:any) => {
        dispatch(setCity(event.target.value));
    };

    return (
        <>
            <Typography>
                <div style={{display: "flex", justifyContent:"space-around"}}>
                <Search className="search" placeholder="Введите город" value={city} onChange={changeHandler}/>
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

