import React, {Component} from 'react';
import SearchBar from "../utils/SearchBar";
import BooksList from "../utils/BooksList";

class Authors extends Component {
    render() {
        return (
            <div>
                <h1>Авторы</h1>
                <SearchBar
                    term={this.props.searchText}
                    onChangeTerm={this.props.onChangeSearchText}
                />
                {
                    this.props.data.length ?
                    <BooksList
                        data={this.props.data}
                        canWriteComment={this.props.canWriteComment}
                        addComment={this.props.addComment}
                    /> :
                    <div><h2>Книг с таким автором не найдено</h2></div>
                }
            </div>
        );
    }
}

export default Authors;