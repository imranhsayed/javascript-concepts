( function () {

	// Promise Example

	console.warn( 'First' );
	console.warn( 'Second' );

	const newPromise = new Promise( ( resolve, reject ) => {
		setTimeout( () => {
			resolve( 'response received' );
		},2000 )
	} );

	newPromise.then( res => {
		// this will be executed after 2 seconds
		console.warn( 'Third' );
	} );

	console.warn( 'Fourth' );

} )();
