
    // Example 1: Basic Promise with Async Task
    // Creating a promise that simulates an async task using setTimeout
    const promiseOne = new Promise(function(resolve, reject){
        // Simulate an async task (e.g., DB call, API call, etc.)
        setTimeout(function(){
            console.log('Async task is complete');
            resolve();  // Resolve the promise after the task is complete
        }, 1000);  // 1-second delay
    });

    // Consuming the promise with .then()
    promiseOne.then(function(){
        console.log("Promise consumed");  // Logs after the promise is resolved
    });

    // Example 2: Another Promise Example
    // Creating another promise that also resolves after 1 second
    new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Async task 2");
            resolve();  // Resolve the promise
        }, 1000);
    }).then(function(){
        console.log("Async 2 resolved");  // Logs after the promise is resolved
    });

    // Example 3: Promise that Resolves with Data
    // Creating a promise that resolves with user data
    const promiseThree = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve({username: "Chai", email: "chai@example.com"});  // Resolving with an object
        }, 1000);
    });

    // Consuming the promise and logging the user data
    promiseThree.then(function(user){
        console.log(user);  // Logs the resolved data: {username: "Chai", email: "chai@example.com"}
    });

    // Example 4: Promise with Conditional Resolve/Reject
    // Creating a promise that might resolve or reject based on a condition
    const promiseFour = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = true;  // Simulating an error condition
            if (!error) {
                resolve({username: "hitesh", password: "123"});  // Resolving with user data
            } else {
                reject('ERROR: Something went wrong');  // Rejecting with an error message
            }
        }, 1000);
    });

    // Consuming the promise with .then(), .catch(), and .finally()
    promiseFour
        .then((user) => {
            console.log(user);  // Logs user data if resolved
            return user.username;
        })
        .then((username) => {
            console.log(username);  // Logs the username if the first promise resolved
        })
        .catch(function(error){
            console.log(error);  // Logs the error if the promise was rejected
        })
        .finally(() => console.log("The promise is either resolved or rejected"));  // Runs regardless of outcome

    // Example 5: Consuming a Promise with async/await
    // Creating a promise similar to promiseFour but consuming it with async/await
    const promiseFive = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = true;  // Simulating an error condition
            if (!error) {
                resolve({username: "javascript", password: "123"});  // Resolving with user data
            } else {
                reject('ERROR: JS went wrong');  // Rejecting with an error message
            }
        }, 1000);
    });

    // Async function to consume promiseFive using async/await
    async function consumePromiseFive(){
        try {
            const response = await promiseFive;  // Await the promise
            console.log(response);  // Logs the resolved data if no error occurs
        } catch (error) {
            console.log(error);  // Logs the error if the promise was rejected
        }
    }

    consumePromiseFive();  // Call the async function

    // Example 6: Fetching Data from an API
    // Using the fetch API to retrieve data from GitHub's API
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json();  // Parse the response as JSON
    })
    .then((data) => {
        console.log(data);  // Logs the parsed data
    })
    .catch((error) => console.log(error));  // Logs any error that occurs during the fetch

    // Example 7: Promise.all (Commented)
    // Promise.all allows you to run multiple promises in parallel and wait until all of them are resolved
    // Uncomment and modify the below code if you want to test it
    /*
    const promiseA = Promise.resolve('Promise A resolved');
    const promiseB = Promise.resolve('Promise B resolved');
    const promiseC = Promise.resolve('Promise C resolved');

    Promise.all([promiseA, promiseB, promiseC])
    .then((results) => {
        console.log(results);  // Logs an array of resolved values
    })
    .catch((error) => {
        console.log(error);  // Logs any error that occurs in any of the promises
    });
    */
