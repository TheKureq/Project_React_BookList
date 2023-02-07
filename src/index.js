import React from 'react'
import ReactDOM from 'react-dom/client'

import './css/index.css'

const BookList = () => {
	return (
		<section className='booklist'>
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	)
}

const Book = () => {
	return (
		<article className='book'>
			<Image />
			<Title />
			<Author />
		</article>
	)
}

const Image = () => (
	<img
		src='https://m.media-amazon.com/images/I/91HSzl9bxoL._AC_UY218_.jpg'
		alt='Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones'
	/>
)
const Title = () => <h2>Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones</h2>
const Author = () => {
	return <h4>James Clear</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
