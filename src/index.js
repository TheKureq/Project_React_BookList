// ==========
// =IMPORTS =
// ==========
import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'

// ==========
// == DATA ==
// ==========
const books = [
	{
		author: 'James Clear',
		title: 'Atomic Habits',
		img: './images/book-1.jpg',
		id: 1,
	},
	{
		author: 'Brad Gilmore',
		title: 'Back From the Future',
		img: 'https://m.media-amazon.com/images/I/71qTM0HuuML.jpg',
		id: 2,
	},
]

// ==========
// COMPONENTS
// ==========
const BookList = () => {
	return (
		<section className='bookList'>
			<EventExamples />
			{books.map(book => {
				return <Book {...book} key={book.id} />
			})}
		</section>
	)
}

const EventExamples = () => {
	const handleFormInput = () => {
		console.log('test')
	}

	const handleButtonClick = () => {
		console.log('test')
	}

	return (
		<section>
			<form>
				<h2>Typical Form</h2>
				<input type='text' name='example' onChange={handleFormInput} style={{ margin: '1rem 0' }} />
			</form>
			<button onClick={handleButtonClick}>Click me</button>
		</section>
	)
}

const Book = props => {
	const { img, title, author } = props
	return (
		<article className='book'>
			<img src={img} alt={title} />
			<h2>{title.toUpperCase()}</h2>
			<h4>{author}</h4>
		</article>
	)
}

// ==========
// == REST ==
// ==========
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
