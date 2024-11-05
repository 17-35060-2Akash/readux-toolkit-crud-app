import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from './booksSlice';
import { Link } from 'react-router-dom';

const BooksView = () => {
    const books = useSelector(state => state?.booksReducer.books);
    console.log(books);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteBook(id));
    };
    return (
        <div>
            <h1 className='' style={{ textAlign: 'center', paddingTop: '40px' }}>List of Books</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books && books?.map((book) => {
                            const { id, title, author } = book;
                            return <tr key={id}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{author}</td>
                                <td>
                                    <Link to={'/edit-book'} state={{id, title, author}}><button>Edit</button></Link>
                                    <button onClick={() => handleDelete(id)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default BooksView;