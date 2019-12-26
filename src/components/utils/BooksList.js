import React, {Component} from 'react';
import {Card, CardTitle, CardText, CardActions, Button, Grid, Cell} from 'react-mdl';

class BooksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }

    render() {
        if (!this.props.data) {
            return <div><h2>Книг с таким автором не найдено</h2></div>
        } else {
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
                                        <Button colored>Оставить отзыв</Button>
                                        <div className="comments">

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
}

export default BooksList;
