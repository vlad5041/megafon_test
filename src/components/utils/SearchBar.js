import React from 'react';
import {Textfield} from 'react-mdl';

export default ({ term, onChangeTerm }) => {

    const dataSearch = e => {
        const value = e.target.value;

        onChangeTerm(value);
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