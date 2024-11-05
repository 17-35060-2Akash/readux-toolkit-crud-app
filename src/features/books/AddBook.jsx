import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooks } from './booksSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const numberOfBooks = useSelector(state => state.booksReducer.books.length);
    const dispatch = useDispatch();
    const navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { id: numberOfBooks + 1, title, author };
        dispatch(addBooks(book));
        navigate('/show-books');
    };
    return (
        <div>
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="title">Title : </label>
                    <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="form-field">
                    <label htmlFor="author">Author : </label>
                    <input type="text" name="author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <div>
                    <button type='submit'>Add Book</button>
                </div>
            </form>
        </div>
    );
};

export default AddBook;