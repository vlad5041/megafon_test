import React, {Component} from 'react';
import {Switch, Link, Route, Redirect} from "react-router-dom";
import {Layout, Header, Drawer, Navigation, Cell, Button, Content} from "react-mdl";
import Books from "../books";
import Authors from "../authors";
import Profile from "../profile";
import Modal from "./modal";

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            term: '',
            active: 0,
            isAuth: false,
            openDialog: false,
        };

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleCloseLoginDialog = this.handleCloseLoginDialog.bind(this);
        this.handleOpenLoginDialog = this.handleOpenLoginDialog.bind(this);
    }

    logout() {
        localStorage.removeItem('isAuth');
        this.setState({isAuth: false});
    }

    login(username, pass) {
        if (username && pass) {
            if (username === 'Admin' && pass === '123') {
                localStorage.setItem('isAuth', true);
                this.redirectTo= '/profile';
                this.setState({isAuth: true, openDialog: false}, () => {
                    this.redirectTo = '';
                });
            } else {
                alert('Введены некорректные логин или пароль');
            }
        } else {
            alert('Вам необходимо ввести логин и пароль');
        }
    }

    handleCloseLoginDialog() {
        this.setState({openDialog: false});
    }

    handleOpenLoginDialog() {
        this.setState({openDialog: true});
    }

    render() {
        return (
            <div>
                {
                    this.redirectTo && <Redirect to={this.redirectTo}/>
                }
                <Layout fixedHeader fixedDrawer>
                    <Header title="Личный кабинет">
                        <Navigation>
                            <Link to="/books">Книги</Link>
                            <Link to="/authors">Авторы</Link>
                            {
                                this.state.isAuth && <Link to="/profile">Профиль</Link>
                            }
                        </Navigation>
                        <Cell hidePhone col={1}>
                            {
                                this.state.isAuth ? <Button raised accent ripple onClick={this.logout}>Выйти</Button> : <Button raised accent ripple onClick={this.handleOpenLoginDialog}>Войти</Button>
                            }
                        </Cell>
                    </Header>
                    <Drawer title="Личный кабинет">
                        <Navigation>
                            <Link to="/books">Книги</Link>
                            <Link to="/authors">Авторы</Link>
                            {
                                this.state.isAuth && <Link to="/profile">Профиль</Link>
                            }
                        </Navigation>
                    </Drawer>
                    <Content>
                        <Switch>
                            <Route path="/books">
                                <Books canWriteComment={this.state.isAuth}/>
                            </Route>
                            <Route path="/authors">
                                <Authors canWriteComment={this.state.isAuth}/>
                            </Route>
                            {
                                this.state.isAuth && <Route path="/profile" component={Profile}/>
                            }
                            <Redirect to="/books"/>
                        </Switch>
                        <Modal openDialog={this.state.openDialog} onClose={this.handleCloseLoginDialog} onLogin={this.login}/>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default MainComponent;