import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "antd";
import "../styles/navbar.css";


export const Navbar: React.FC = () => {
    return (
        <Row gutter={16}>
            <Col className="gutter-row" span={6}>
                <p className="logoText">Wiki City</p>
            </Col>
            <Col className="gutter-row buttonContainer" span={7} offset={10}>
                <Button className="coloredDanger" type="primary" danger><Link to="/">Город</Link></Button>
                <Button type="default"><Link to="/time">Время</Link></Button>  
            </Col>
        </Row>
    );
}