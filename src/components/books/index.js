import React, {Component} from 'react';
import SortBar from "../utils/SortBar";
import BooksList from "../utils/BooksList";

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                <SortBar
                    data={this.props.data}
                    update={this.updateData}
                />
                <BooksList
                    data={this.props.data}
                    canWriteComment={this.props.canWriteComment}
                    addComment={this.props.addComment}
                    commentDialogModel={this.props.commentDialogModel}
                    openCommentDialog={this.props.openCommentDialog}
                    closeCommentDialog={this.props.closeCommentDialog}
                />
            </div>
        );
    }
}

export default Books;