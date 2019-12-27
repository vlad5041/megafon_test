import React, {Component} from 'react';
import {Dialog, DialogTitle, DialogContent, DialogActions, Button, Textfield} from "react-mdl";

class CommentModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };

        this.onChange = this.onChange.bind(this);
        this.handleAddComment = this.handleAddComment.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleAddComment() {
        this.props.addComment(this.props.commentDialogModel.bookId, this.state.text);
        this.setState({text: ''});
    }

    render() {
        const {bookId = 0, bookName = ''} = this.props.commentDialogModel || {};

        return (
            <Dialog open={!!bookId}>
                <DialogTitle>Введите комментарий для книги {bookName}</DialogTitle>
                <DialogContent>
                    <Textfield
                        name="text"
                        onChange={this.onChange}
                        label="Введите комментарий..."
                        rows={3}
                        style={{width: '300px'}}
                        value={this.state.text}
                    />
                </DialogContent>
                <DialogActions>
                    <Button type='button' onClick={this.handleAddComment}>Отправить</Button>
                    <Button type='button' onClick={this.props.onClose}>Закрыть</Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default CommentModal;