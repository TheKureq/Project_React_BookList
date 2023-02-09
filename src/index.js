// ==========
// =IMPORTS =
// ==========
import React from 'react'
import ReactDOM from 'react-dom/client'

import './css/index.css'
import { books } from './books'
import Book from './Book'

// ==========
// COMPONENTS
// ==========
const BookList = () => {
	const getBook = id => {
		const book = books.find(book => book.id === id)
		console.log(book)
	}
	return (
		<>
			<h1>Amazon best sellers</h1>
			<section className='bookList'>
				{books.map((book, index) => {
					return <Book {...book} key={book.id} number={index} />
				})}
			</section>
		</>
	)
}

// ==========
// == REST ==
// ==========
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
