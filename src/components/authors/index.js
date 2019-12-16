import React, {Component} from 'react';
import {Card, CardTitle, CardText, CardActions, Button, Grid, Cell} from 'react-mdl';
import DataSet from '../../data.json';
import SearchBar from "../utils/SearchBar";

class Authors extends Component {
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
                <h1>Авторы</h1>
                <SearchBar
                    term={this.state.term}
                    data={DataSet}
                    update={this.updateData.bind(this)}
                />
                <Grid className="cards">
                    {this.state.data.map(book =>(
                        <Cell col={6} phone={4} tablet={4}>
                            <Card className={`book book-${book.id}`} shadow={0}>
                                <CardTitle expand>{book.name}</CardTitle>
                                <CardText>
                                    {book.author} <br/>
                                    Рейтинг: {book.rating}
                                </CardText>
                                <CardActions border>
                                    <Button colored>Оставить отзыв</Button>
                                    <div className="feedback">

                                    </div>
                                </CardActions>
                            </Card>
                        </Cell>
                    ))};
                </Grid>
            </div>
        );
    }
}

export default Authors;