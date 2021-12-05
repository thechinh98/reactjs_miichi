import React from "react";
import '../../css/app.css'

const Header = () => {
    return (
        <div className ="header">
            <ul style={{ marginBottom: '0 !important' }}>
                <li key = "#home">
                    <a href = "#home">Home</a>
                </li>
                <li key = "#menu">
                    <a href = "#menu">Menu</a>
                </li>
                <li key = "#home">
                    <a href = "#home">About</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;