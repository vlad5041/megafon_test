import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Authors extends Component {
    render() {
        return (
            <div>
                <h1>Авторы</h1>
                <Link to="/main">Главная</Link>
            </div>
        );
    }
}

export default Authors;