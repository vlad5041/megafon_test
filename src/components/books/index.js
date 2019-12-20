import React, {Component} from 'react';
import DataSet from '../../data.json';
import SortBar from "../utils/SortBar";
import BooksList from "../utils/BooksList";

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: DataSet,
            term: '',
            active: 0,
            comments: []
        };

        this.updateData = this.updateData.bind(this)
    }

    updateData(config) {
        this.setState(config);
    }

    render() {
        return (
            <div>
                <h1>Книги</h1>
                <SortBar initialData={DataSet} data={this.state.data} update={this.updateData} />
                <BooksList data={DataSet}/>
            </div>
        );
    }
}

export default Books;
