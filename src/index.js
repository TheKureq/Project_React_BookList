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
	const getBook = id => {
		const book = books.find(book => book.id === id)
		console.log(book)
	}
	return (
		<section className='bookList'>
			<EventExamples />
			{books.map(book => {
				return <Book {...book} key={book.id} getBook={getBook} />
			})}
		</section>
	)
}

const Book = props => {
	const { img, title, author, getBook, id } = props
	// const getSingleBook = () => {
	// 	getBook(id)
	// }
	return (
		<article className='book'>
			<img src={img} alt={title} />
			<h2>{title.toUpperCase()}</h2>
			<button onClick={() => getBook(id)}>display book id</button>
			<h4>{author}</h4>
		</article>
	)
}

const EventExamples = () => {
	const handleFormInput = e => {
		// console.log('test')
		console.log(e.target)
		console.log(e.target.name)
		console.log(e.target.value)
	}

	const handleButtonClick = () => {
		alert('handle button click')
	}

	const handleFormSubmission = e => {
		e.preventDefault()
		console.log('form submitted')
	}

	return (
		<section>
			<form onSubmit={handleFormSubmission}>
				<h2>Typical Form</h2>
				<input type='text' name='example' onChange={handleFormInput} style={{ margin: '1rem 0' }} />
				<button type='submit'>Submit</button>
				<div>
					<button onClick={handleButtonClick} type='button'>
						Click me
					</button>
				</div>
			</form>
		</section>
	)
}

// ==========
// == REST ==
// ==========
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
