import React from 'react';
import {Textfield} from 'react-mdl';

export default ({ term, data, update }) => {

    const dataSearch = e => {
        const value = e.target.value;

        const filter = data.filter(book => {
            return book.author.toLowerCase().includes(value.toLowerCase());
        });
        update({
            data: filter,
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
                autoComplete="false"
            />
        </div>
    );
};