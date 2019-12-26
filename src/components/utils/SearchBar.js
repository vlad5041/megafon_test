import React from 'react';
import {Textfield} from 'react-mdl';

export default ({ term, data, update }) => {

    const dataSearch = e => {
        const value = e.target.value.toLowerCase();

        const filter = data.filter(book => {
            return book.author.toLowerCase().includes(value);
        });
        update({
            data: filter,
            active: 0,
            term: value
        });
    };

    return (
        <div className="searchbar form-group">
            <Textfield
                value={term}
                type="text"
                className="form-control"
                onChange={dataSearch}
                label="Поиск по автору..."
                floatingLabel
                style={{width: '200px'}}
            />
        </div>
    );
};