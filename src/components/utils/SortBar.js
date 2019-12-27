import React, { Component } from 'react';
import {Button, Tooltip, Icon} from 'react-mdl';

export default class SortBar extends Component {
    constructor(props) {
        super(props);
        this.sorted = { author: true, name: true, rating: true };
        this.state = {
            type: '',
            order: ''
        }
    }

    sort(type) {
        const { update, data } = this.props;
        const isSorted = this.sorted[type];
        let direction = isSorted ? 1 : -1;

        const sorted = data.sort((a, b) => {
            if (a[type] === b[type]) { return 0; }
            return a[type] > b[type] ? direction : direction * -1;
        });

        this.setState({order: direction, type: type});

        this.sorted[type] = !isSorted;

        update({
            data: sorted
        });
    }

    render() {
        return (
            <div>
                <Button ripple onClick={() => this.sort('name')}>
                    Сортировать по названию
                    {
                        this.state.type === 'name' ? (
                                this.state.order === 1 ? <Tooltip label="Follow" position="top"><Icon name="arrow_upward" /></Tooltip> : <Tooltip label="Follow" position="bottom"><Icon name="arrow_downward" /></Tooltip>
                        ) : null
                    }
                </Button>
                <Button ripple onClick={() => this.sort('author')}>
                    Сортировать по автору
                    {
                        this.state.type === 'author' ? (
                            this.state.order === 1 ? <Tooltip label="Follow" position="top"><Icon name="arrow_upward" /></Tooltip> : <Tooltip label="Follow" position="bottom"><Icon name="arrow_downward" /></Tooltip>
                        ) : null
                    }
                </Button>
                <Button ripple onClick={() => this.sort('rating')}>
                    Сортировать по рейтингу
                    {
                        this.state.type === 'rating' ? (
                            this.state.order === 1 ? <Tooltip label="Follow" position="top"><Icon name="arrow_upward" /></Tooltip> : <Tooltip label="Follow" position="bottom"><Icon name="arrow_downward" /></Tooltip>
                        ) : null
                    }
                </Button>
            </div>
        );
    }
}