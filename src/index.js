import axios from 'axios';
( function () {

	/**
	 * Promise Example 1
	 */
	console.warn( 'First' );
	console.warn( 'Second' );

	const newPromise = new Promise( ( resolve, reject ) => {
		setTimeout( () => {
			resolve( 'Third: response received' );
		},2000 )
	} );

	newPromise.then( value => {
		// this will be executed after 2 seconds
		console.warn( value );
	} );

	console.warn( 'Fourth' );

	/**
	 * Promise Example 2
	 */
	const todosPromise = new Promise( ( resolve, reject ) => {
		axios.get( 'https://jsonplaceholder.typicode.com/todos/' )
			.then( res => {
				resolve( res.data );
			} );
	} );

	todosPromise.then( value => {
		console.warn( value );
	} );

} )();
