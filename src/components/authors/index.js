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
            active: 0,
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
                <BooksList data={DataSet}/>
            </div>
        );
    }
}

export default Authors;