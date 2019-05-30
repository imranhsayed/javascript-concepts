# JavaScript Concepts :mortar_board:

## Description :clipboard:
> A demo app for JavaScript Concepts

## Installation :wrench:

1. Clone this repo by running `git clone https://github.com/imranhsayed/javascript-concepts`
2. `cd javascript-concepts`
3. `cd branch-name`
4. `npm install`
5. `npm run server`

## Branch Information :link:

#### 1. [callbacks]()

* Callbacks add complexity and readability issue. And its messy to chain the tasks

#### 2. [promises](https://github.com/imranhsayed/javascript-concepts/tree/promises)

* A promise is an object that represent the eventual( future ) completion(or failure) of an asynchronous operation, and its future result value.
Promises are thin abstraction around call backs. ( e.g. `readFile.( 'config.json' ).then(...).catch(...)` )
In below example what you pass in resolve will be available as value in `.then(( value )=> ...)`

```ruby
var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('foo');
  }, 300);
});

promise1.then(function(value) {
  console.log(value);
  // expected output: "foo"
});
```

3. [async-await](https://github.com/imranhsayed/javascript-concepts/tree/async-await) 

##### Async - declares an asynchronous function `(async function someName(){...})`.
* Automatically transforms a regular function into a Promise.
* When called async functions resolve with whatever is returned in their body.
* Async functions enable the use of `await`.

##### Await - pauses the execution of async functions. `(const result = await someAsyncCall();)`.
* When placed in front of a Promise call, await forces the rest of the code to wait until that Promise finishes and returns a result.
* Await works only with Promises, it does not work with callbacks.
* Await can only be used inside async functions.

##### Async Await Example

```ruby
	async function getTodoData() {
		const todoData = await fetch( 'https://jsonplaceholder.typicode.com/todos/' );
		return todoData;
	}

	getTodoData()
		.then( res => res.json() )
		.then( ( result ) => {
		console.warn( result );
	} );
```


##### Try and Catch Method

```ruby
	async function getPosts() {
		try {
			const postsData = await await fetch( 'https://jsonplaceholder.typicode.com/posts/' );
			return postsData;
		}
		catch ( error ) {
			console.warn( 'error', error );
		}
	}

	getPosts()
		.then( res => res.json() )
		.then( ( result ) => {
			console.warn( result );
		} );

```

## Useful Links :link:

1. [async-await concept blog](https://tutorialzine.com/2017/07/javascript-async-await-explained)

## Instructions :point_right:

## Common Commands :computer:

1. `npm run dev` starts a webpack dev server at [http://localhost:8080](http://localhost:8080)
2. `npm run prod` runs build for production in dist directory. 

## Built With :zap:

1. Node
2. Express
3. ES6
4. Webpack
5. Babel

## Author :bust_in_silhouette:

* **[Imran Sayed](https://codeytek.com)**

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
