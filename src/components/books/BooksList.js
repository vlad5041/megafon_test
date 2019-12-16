import React from "react";

function BooksList (book){
    return (
        <tr>
            <td>{book.id}</td>
            <td>{book.name}</td>
            <td>8 {book.author}</td>
        </tr>
    );
}

export default BooksList;