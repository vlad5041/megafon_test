import React, {Component} from 'react';
import {Card, CardTitle, CardText, CardActions, Button, Grid, Cell} from 'react-mdl';

class BooksList extends Component {
    render() {
        return (
            <div>
                <Grid className="cards">
                    {this.props.data.map(book =>(
                        <Cell key={book.id} col={6} phone={4} tablet={4}>
                            <Card className={`book book-${book.id}`} shadow={0}>
                                <CardTitle expand>{book.name}</CardTitle>
                                <CardText>
                                    {book.author} <br/>
                                    Рейтинг: {book.rating}
                                </CardText>
                                <CardActions border>
                                    {
                                        this.props.canWriteComment && <Button colored onClick={() => {
                                            this.props.addComment(book.id, book.name)
                                        }
                                        }>Оставить отзыв</Button>
                                    }
                                    <div className="comments">
                                        { !!book && !!book.comments && !!book.comments.length && 'Комментарии:'}
                                        {/*in real project commentIndex change to id */}
                                        {book && book.comments && book.comments.map((comment, commentIndex) => (<div className="comment" key={commentIndex}>{comment}</div>)
                                        )}
                                    </div>
                                </CardActions>
                            </Card>
                        </Cell>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default BooksList;
