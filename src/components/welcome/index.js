import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import {Button, Cell, Grid, Textfield} from 'react-mdl';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            isAuth: false
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login() {
        /*if (this.state.login && this.state.password) {
            if (this.state.login === 'Admin' && this.state.password === '123') {
                localStorage.setItem('isAuth', true);
                this.setState({isAuth: true});
            } else {
                alert('Введены некорректные логин или пароль');
            }
        } else {
            alert('Вам необходимо ввести логин и пароль');
        }*/
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        if (this.state.isAuth && this.state.isAuth === true) {
            localStorage.setItem('isAuth', true);
            return (<Redirect to='/main'/>);
        } else {
            localStorage.setItem('isAuth', false);
        }
        return (
            <div className="row " id="Body">
                <Grid>
                    <Cell col={4} offsetDesktop={4}>
                        <h1>Вход</h1>
                    </Cell>
                    <Cell col={4} offsetDesktop={4}>
                        <Textfield
                            id="textfield-login"
                            type="text"
                            name="login"
                            value={this.state.login}
                            onChange={this.onChange}
                            label="Логин"
                            floatingLabel
                            style={{width: '200px'}}
                        />
                    </Cell>
                    <Cell col={4} offsetDesktop={4}>
                        <Textfield
                            id="textfield-password"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            label="Пароль"
                            floatingLabel
                            style={{width: '200px'}}
                        />
                    </Cell>
                    <Cell col={4} offsetDesktop={4}>
                        <Button raised colored onClick={this.login}>Войти</Button>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Welcome;