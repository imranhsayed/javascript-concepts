
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

	/**
	 * Promise.all()
	 *
	 * Send all request at one time
	 */
	const promise1 = Promise.resolve(3);
	const promise2 = 42;
	const promise3 = new Promise( ( resolve, reject ) => {
		setTimeout( () => {
			resolve( 'Third: response received' );
		},2000 )
	} );

	async function getABC() {
		// Promise.all() allows us to send all requests at the same time.
		let results = await Promise.all([promise1, promise2, promise3])

		return results;
	}

	getABC().then( result => {
		console.warn( result );
	} )

} )();
