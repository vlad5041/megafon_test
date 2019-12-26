import React, {Component} from 'react';
import DataSet from '../../data.json';
import SearchBar from "../utils/SearchBar";
import BooksList from "../utils/BooksList";

class Authors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: DataSet,
            term: '',
            comments: []
        };
    }

    updateData(config) {
        this.setState(config);
    }

    render() {
        return (
            <div>
                <h1>Авторы</h1>
                <SearchBar
                    term={this.state.term}
                    data={DataSet}
                    update={this.updateData.bind(this)}
                />
                {
                    this.state.data.length ? <BooksList data={this.state.data} canWriteComment={this.props.canWriteComment}/> : <div><h2>Книг с таким автором не найдено</h2></div>
                }
            </div>
        );
    }
}

export default Authors;