import React, { Component } from 'react';
import {Button} from 'react-mdl';

export default class SortBar extends Component {
    constructor(props) {
        super(props);
        this.sorted = { author: true, name: true, rating: true };
    }

    sort(type) {
        const { update, data } = this.props;
        const isSorted = this.sorted[type];
        let direction = isSorted ? 1 : -1;

        const sorted = [].slice.call(data).sort((a, b) => {
            if (a[type] === b[type]) { return 0; }
            return a[type] > b[type] ? direction : direction * -1;
        });

        this.sorted[type] = !isSorted;

        update({
            data: sorted,
            active: 0
        });
    }

    render() {
        return (
            <div>
                <Button ripple onClick={() => this.sort('name')}>Сортировать по названию</Button>
                <Button ripple onClick={() => this.sort('author')}>Сортировать по автору</Button>
                <Button ripple onClick={() => this.sort('rating')}>Сортировать по рейтингу</Button>
            </div>
        );
    }
}