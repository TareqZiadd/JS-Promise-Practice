/*ex1*/
/*
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('hello');
  }, 4000);
});

//output: 'hello' after 4 seconds

// The asynchronous code will be executed as if we did not benefit from the promise at all,
// and the reason is the absence of .then.
*/


//ex2
/*
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('hello');
    resolve();
  }, 4000);
});

promise.then(function (){
  console.log('ahmad');
});

//output
//hello
//ahmad
*/


/*ex3
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('hello');
    resolve();
  }, 4000);
});

promise.then(() => {
  console.log("abc");
});

//output
//hello       (after 4 seconds)
//abc
*/


/*ex5
const promise = new Promise((resolve, reject) => {
  // Reject the promise with an error message
  reject("Something went wrong");
});

promise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.log("Caught:", error);
  });

//output :  Caught: Something went wrong
*/


/*ex6
function sayHelloAfter2Seconds() {
  // Create a new promise
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello!");
    }, 2000);
  });

  promise
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error("Error occurred:", error);
    });
}
sayHelloAfter2Seconds();

//في الكود الذي قدمته، يمكننا تحديد حالة الـ 
//Promise
// وخصائصه كما يلي:

//Pending
// (معلقة): الـ 
//Promise
// تكون في حالة معلقة أثناء انتظار تنفيذها، بمعنى أنها لم تتم بعد.

//Fulfilled
// (محققة): عندما يتم إنجاز الـ 
// Promise 
// بنجاح، في حالتك عندما يتم إرجاع 
// "Hello!"
//  بعد انتهاء فترة الانتظار بـ 2 ثانية، فإن الـ 
// Promise 
// تكون محققة.

//Rejected
// (مرفوضة): إذا حدث خطأ أثناء تنفيذ الـ 
// Promise
//  وتم استدعاء الـ 
//  reject,
//   في هذه الحالة ستكون الـ 
//  Promise
//   مرفوضة.
*/


//ex7
/*
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('hello');
    resolve();
  }, 4000);
});
promise.then(function (){
  console.log('ahmad');
});

//"When resolve is called within a Promise using setTimeout, the Promise is successfully resolved, triggering execution to move to the then() function that follows the Promise."
//after 4 seconds, executes the resolve() function.
*/


//ex8
/*
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('hello');
    resolve();
  }, 4000);
});

promise.then(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('hello');
      resolve();
    }, 4000);
  });
});
*/


//ex9
/*
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('hello1');
    resolve();
  }, 4000);
});

promise.then(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('hello2');
      resolve();
    }, 5000);
  });
});

//output
//hello1    (after 4 seconds)
//hello2    (after 5 seconds)
*/


//Ex10
/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));

// This code uses fetch() in JavaScript to retrieve data from an API. 
// fetch() is used to fetch resources from the internet, such as files or data from API servers like JSONPlaceholder in this case. 
// The code specifically fetches information about a single task (todos/1) from JSONPlaceholder, then converts the response to JSON format and logs it to the console.
*/
