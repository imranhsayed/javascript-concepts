
( function () {

	/**
	 * Async Await Example
	 */
	async function getTodoData() {
		const todoData = await fetch( 'https://jsonplaceholder.typicode.com/todos/' );
		return todoData;
	}

	getTodoData()
		.then( res => res.json() )
		.then( ( result ) => {
		console.warn( result );
	} );

} )();
