const Book = props => {
	const { img, title, author, getBook, id, number } = props
	// const getSingleBook = () => {
	// 	getBook(id)
	// }
	return (
		<article className='book'>
			<img src={img} alt={title} />
			<h2>{title.toUpperCase()}</h2>
			<h4>{author}</h4>
			<span className='number'>{`# ${number + 1}`}</span>
		</article>
	)
}
export default Book
