import React, {Component} from 'react';
import {Switch, Link, Route, Redirect} from "react-router-dom";
import {Layout, Header, Drawer, Navigation, Cell, Button, Content} from "react-mdl";
import DataSet from '../../data.json';
import Books from "../books";
import Authors from "../authors";
import Profile from "../profile";
import AuthModal from "./authModal";
import CommentModal from "./commentModal";

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: DataSet,
            term: '',
            active: 0,
            isAuth: false,
            openAuthDialog: false,
            commentDialogModel: undefined,
            filterByAuthorData: DataSet,
            searchTextByAuthor: ''
        };

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleCloseLoginDialog = this.handleCloseLoginDialog.bind(this);
        this.handleOpenLoginDialog = this.handleOpenLoginDialog.bind(this);
        this.updateData = this.updateData.bind(this);
        this.addComment = this.addComment.bind(this);
        this.handleOpenCommentDialog = this.handleOpenCommentDialog.bind(this);
        this.handleCloseCommentDialog = this.handleCloseCommentDialog.bind(this);
        this.updateSearchTextByAuthor = this.updateSearchTextByAuthor.bind(this);
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
                this.setState({isAuth: true, openAuthDialog: false}, () => {
                    this.redirectTo = '';
                });
            } else {
                alert('Введены некорректные логин или пароль');
            }
        } else {
            alert('Вам необходимо ввести логин и пароль');
        }
    }

    handleOpenLoginDialog() {
        this.setState({openAuthDialog: true});
    }

    handleCloseLoginDialog() {
        this.setState({openAuthDialog: false});
    }

    handleOpenCommentDialog(bookId, bookName) {
        this.setState({
            commentDialogModel: {
                bookId: bookId,
                bookName: bookName
            }
        });
    }

    handleCloseCommentDialog() {
        this.setState({commentDialogModel: undefined});
    }

    updateData(config) {
        this.setState(config);
    }

    addComment(bookId, comment) {
        let newData = this.state.data.map((book) => {
            if (book.id !== bookId) return book;
            return {
                ...book,
                comments: [
                    ...book.comments || [],
                    comment
                ]
            }
        });

        const filter = newData.filter(book => {
            return book.author.toLowerCase().indexOf(this.state.searchTextByAuthor.toLowerCase()) > -1;
        });

        this.setState({data: newData, commentDialogModel: undefined, filterByAuthorData: filter})
    }

    updateSearchTextByAuthor(value) {
        const filter = this.state.data.filter(book => {
            return book.author.toLowerCase().indexOf(value.toLowerCase()) > -1;
        });

        this.setState({filterByAuthorData: filter, searchTextByAuthor: value})
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
                                <Books
                                    canWriteComment={this.state.isAuth}
                                    data={this.state.data}
                                    addComment={this.handleOpenCommentDialog}
                                />
                            </Route>
                            <Route path="/authors">
                                <Authors
                                    canWriteComment={this.state.isAuth}
                                    data={this.state.filterByAuthorData}
                                    addComment={this.handleOpenCommentDialog}
                                    onChangeSearchText={this.updateSearchTextByAuthor}
                                    searchText={this.state.searchTextByAuthor}
                                />
                            </Route>
                            {
                                this.state.isAuth && <Route path="/profile" component={Profile}/>
                            }
                            <Redirect to="/books"/>
                        </Switch>
                        <AuthModal
                            openAuthDialog={this.state.openAuthDialog}
                            onClose={this.handleCloseLoginDialog}
                            onLogin={this.login}
                        />
                        {
                            this.state.isAuth &&
                            <CommentModal
                                commentDialogModel={this.state.commentDialogModel}
                                onClose={this.handleCloseCommentDialog}
                                addComment={this.addComment}
                            />
                        }
                    </Content>
                </Layout>
            </div>
        );
    }
}


export default MainComponent;