import React, {Component} from 'react';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Grid, Cell} from 'react-mdl';
import DataSet from '../../data.json'
import SortBar from "../utils/SortBar";

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: DataSet,
            term: '',
            active: 0
        };
    }

    updateData(config) {
        this.setState(config);
    }

    render() {
        return (
            <div>
                <h1>Книги</h1>
                <SortBar initialData={DataSet} data={this.state.data} update={this.updateData.bind(this)} />
                <Grid className="cards">
                    {this.state.data.map(book =>(
                        <Cell key={book.id} col={6} phone={4} tablet={4}>
                            <Card className={`book book-${book.id}`} shadow={0}>
                                <CardTitle expand style={{}}>{book.name}</CardTitle>
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

export default Books;