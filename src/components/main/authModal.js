import React, {Component} from 'react';
import {Dialog, DialogTitle, DialogContent, DialogActions, Button, Textfield} from "react-mdl";

class AuthModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
        };

        this.onChange = this.onChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleLogin() {
        this.props.onLogin(this.state.login, this.state.password);
    }

    handleCloseDialog() {
        this.props.onClose();
    }

    render() {
        return (
            <Dialog open={this.props.openAuthDialog}>
                <DialogTitle>Авторизация</DialogTitle>
                <DialogContent>
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
                </DialogContent>
                <DialogActions>
                    <Button type='button' onClick={this.handleLogin}>Войти</Button>
                    <Button type='button' onClick={this.handleCloseDialog}>Закрыть</Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default AuthModal;