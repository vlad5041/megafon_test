import React, {Component} from 'react';
import {Card, CardTitle, CardText, CardActions, Button, Grid, Cell} from 'react-mdl';

class BooksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            active: 0,
            comments: []
        };
    }

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

export default BooksList;
