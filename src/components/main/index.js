import React, {Component} from 'react';
import {Switch, Link, Route, Redirect} from "react-router-dom";
import {Layout, Header, Drawer, Navigation, Cell, Button, Content} from "react-mdl";
import Books from "../books";
import Authors from "../authors";
import Profile from "../profile";

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            term: '',
            active: 0
        };
    }

    exit() {
        localStorage.clear();
        return (<Redirect to="/"/>);
    }

    render() {
        return (
            <div>
                <Layout fixedHeader fixedDrawer>
                    <Header title="Личный кабинет">
                        <Navigation>
                            <Link to="/books/">Книги</Link>
                            <Link to="/authors/">Авторы</Link>
                            <Link to="/profile/">Профиль</Link>
                        </Navigation>
                        <Cell hidePhone col={1}><Button raised accent ripple onClick={this.exit}>Выйти</Button></Cell>
                    </Header>
                    <Drawer title="Личный кабинет">
                        <Navigation>
                            <Link to="/books/">Книги</Link>
                            <Link to="/authors/">Авторы</Link>
                            <Link to="/profile/">Профиль</Link>
                        </Navigation>
                        <Cell hideDesktop hideTablet col={2} style={{position: 'absolute', bottom: 0, right: 0}}><Button raised accent ripple onClick={this.exit}>Выйти</Button></Cell>
                    </Drawer>
                    <Content>
                        <Switch>
                            <Route strict path="/books/" component={Books}/>
                            <Route strict path="/authors/" component={Authors}/>
                            <Route strict path="/profile/" component={Profile}/>
                        </Switch>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default MainComponent;