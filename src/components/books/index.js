import React, {Component} from 'react';
import BooksList from "./BooksList";
import DataSet from '../../data.json'

class Books extends Component {

    const books = DataSet.map((book) => {
        return (<BooksList book={book} />);
    });

    render() {
        return (
            <div>
                <h1>Книги</h1>
                <table>
                    <thead>
                    <tr>
                        <td>id</td>
                        <td>Название</td>
                        <td>Автор</td>
                    </tr>
                    </thead>
                    <tbody>
                    { props.data.map(book =>(
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Books;