const exercises = [
    {
        id: 1,
        title: "Hello World",
        difficulty: "beginner",
        description: `
            <h3>Your First JavaScript Program</h3>
            <p>Write a program that displays "Hello, World!" in the output.</p>
            <p><strong>Instructions:</strong></p>
            <ul>
                <li>Use <code>console.log()</code> to print text</li>
                <li>The output should be exactly: "Hello, World!"</li>
            </ul>
        `,
        starterCode: `// Write your code here
console.log("Hello, World!");`,
        solution: `console.log("Hello, World!");`,
        hint: "Use console.log() to print text. Remember to use quotes around the text!",
        test: (code) => {
            const output = [];
            const originalLog = console.log;
            console.log = (...args) => {
                output.push(args.join(' '));
            };
            try {
                eval(code);
                console.log = originalLog;
                return output.some(line => line.includes("Hello, World!"));
            } catch (e) {
                console.log = originalLog;
                return false;
            }
        }
    },
    {
        id: 2,
        title: "Variables and Numbers",
        difficulty: "beginner",
        description: `
            <h3>Working with Variables</h3>
            <p>Create two variables: one for your name and one for your age. Then print them both.</p>
            <p><strong>Instructions:</strong></p>
            <ul>
                <li>Use <code>let</code> or <code>const</code> to create variables</li>
                <li>Create a variable called <code>name</code> with your name</li>
                <li>Create a variable called <code>age</code> with your age (as a number)</li>
                <li>Print both variables using console.log()</li>
            </ul>
        `,
        starterCode: `// Create variables here
let name = "Your Name";
let age = 25;

// Print them here
console.log(name);
console.log(age);`,
        solution: `let name = "John";
let age = 25;
console.log(name);
console.log(age);`,
        hint: "Use 'let' to create variables. For text, use quotes. For numbers, don't use quotes.",
        test: (code) => {
            try {
                const output = [];
                const originalLog = console.log;
                console.log = (...args) => {
                    output.push(args.join(' '));
                };
                eval(code);
                console.log = originalLog;
                return output.length >= 2;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 3,
        title: "String Concatenation",
        difficulty: "beginner",
        description: `
            <h3>Combining Strings</h3>
            <p>Create a greeting message by combining strings.</p>
            <p><strong>Instructions:</strong></p>
            <ul>
                <li>Create a variable <code>firstName</code> with value "Alice"</li>
                <li>Create a variable <code>greeting</code> that combines "Hello, " and firstName</li>
                <li>Print the greeting</li>
            </ul>
        `,
        starterCode: `// Create variables
let firstName = "Alice";

// Combine strings using +
let greeting = "Hello, " + firstName;

// Print the result
console.log(greeting);`,
        solution: `let firstName = "Alice";
let greeting = "Hello, " + firstName;
console.log(greeting);`,
        hint: "Use the + operator to combine strings. Make sure to include a space after the comma!",
        test: (code) => {
            try {
                const output = [];
                const originalLog = console.log;
                console.log = (...args) => {
                    output.push(args.join(' '));
                };
                eval(code);
                console.log = originalLog;
                return output.some(line => line.includes("Hello, Alice"));
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 4,
        title: "Basic Math Operations",
        difficulty: "beginner",
        description: `
            <h3>Doing Math with JavaScript</h3>
            <p>Perform basic arithmetic operations.</p>
            <p><strong>Instructions:</strong></p>
            <ul>
                <li>Create two variables: <code>num1</code> = 10 and <code>num2</code> = 5</li>
                <li>Calculate and print: addition, subtraction, multiplication, and division</li>
            </ul>
        `,
        starterCode: `// Create number variables
let num1 = 10;
let num2 = 5;

// Calculate and print results
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);`,
        solution: `let num1 = 10;
let num2 = 5;
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);`,
        hint: "Use + for addition, - for subtraction, * for multiplication, and / for division.",
        test: (code) => {
            try {
                const output = [];
                const originalLog = console.log;
                console.log = (...args) => {
                    output.push(args.join(' '));
                };
                eval(code);
                console.log = originalLog;
                return output.length >= 4;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 5,
        title: "If Statements",
        difficulty: "beginner",
        description: `
            <h3>Making Decisions</h3>
            <p>Use if statements to make decisions in your code.</p>
            <p><strong>Instructions:</strong></p>
            <ul>
                <li>Create a variable <code>age</code> = 18</li>
                <li>If age is 18 or older, print "You are an adult"</li>
                <li>Otherwise, print "You are a minor"</li>
            </ul>
        `,
        starterCode: `// Create age variable
let age = 18;

// Write if statement here
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}`,
        solution: `let age = 18;
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}`,
        hint: "Use if (condition) { } else { }. Use >= for 'greater than or equal to'.",
        test: (code) => {
            try {
                const output = [];
                const originalLog = console.log;
                console.log = (...args) => {
                    output.push(args.join(' '));
                };
                eval(code);
                console.log = originalLog;
                return output.some(line => line.includes("adult") || line.includes("minor"));
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 6,
        title: "Functions",
        difficulty: "beginner",
        description: `
            <h3>Creating Functions</h3>
            <p>Write a function that takes a name and returns a greeting.</p>
            <p><strong>Instructions:</strong></p>
            <ul>
                <li>Create a function called <code>greet</code> that takes a parameter <code>name</code></li>
                <li>The function should return "Hello, " + name</li>
                <li>Call the function with "Bob" and print the result</li>
            </ul>
        `,
        starterCode: `// Create function here
function greet(name) {
    return "Hello, " + name;
}

// Call the function and print result
let message = greet("Bob");
console.log(message);`,
        solution: `function greet(name) {
    return "Hello, " + name;
}
let message = greet("Bob");
console.log(message);`,
        hint: "Use 'function functionName(parameter) { return value; }' to create a function.",
        test: (code) => {
            try {
                const output = [];
                const originalLog = console.log;
                console.log = (...args) => {
                    output.push(args.join(' '));
                };
                eval(code);
                console.log = originalLog;
                return output.some(line => line.includes("Hello, Bob"));
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 7,
        title: "Arrays",
        difficulty: "beginner",
        description: `
            <h3>Working with Arrays</h3>
            <p>Create an array and access its elements.</p>
            <p><strong>Instructions:</strong></p>
            <ul>
                <li>Create an array called <code>fruits</code> with: "apple", "banana", "orange"</li>
                <li>Print the first element (index 0)</li>
                <li>Print the length of the array</li>
            </ul>
        `,
        starterCode: `// Create array
let fruits = ["apple", "banana", "orange"];

// Print first element
console.log(fruits[0]);

// Print array length
console.log("Array length:", fruits.length);`,
        solution: `let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);
console.log("Array length:", fruits.length);`,
        hint: "Arrays use square brackets []. Access elements with arrayName[index]. Arrays start at index 0.",
        test: (code) => {
            try {
                const output = [];
                const originalLog = console.log;
                console.log = (...args) => {
                    output.push(args.join(' '));
                };
                eval(code);
                console.log = originalLog;
                return output.some(line => line.includes("apple")) && 
                       output.some(line => line.includes("length") || line.includes("3"));
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 8,
        title: "Loops - For Loop",
        difficulty: "beginner",
        description: `
            <h3>Repeating Actions</h3>
            <p>Use a for loop to print numbers from 1 to 5.</p>
            <p><strong>Instructions:</strong></p>
            <ul>
                <li>Use a for loop to iterate from 1 to 5</li>
                <li>Print each number</li>
            </ul>
        `,
        starterCode: `// Write for loop here
for (let i = 1; i <= 5; i++) {
    console.log(i);
}`,
        solution: `for (let i = 1; i <= 5; i++) {
    console.log(i);
}`,
        hint: "Use for (let i = start; i <= end; i++) { } to create a loop. Use <= to include the end number.",
        test: (code) => {
            try {
                const output = [];
                const originalLog = console.log;
                console.log = (...args) => {
                    output.push(args.join(' '));
                };
                eval(code);
                console.log = originalLog;
                return output.length >= 5 && output.some(line => line.includes("1"));
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 9,
        title: "Array Methods",
        difficulty: "beginner",
        description: `
            <h3>Using Array Methods</h3>
            <p>Use array methods to manipulate arrays.</p>
            <p><strong>Instructions:</strong></p>
            <ul>
                <li>Create an array <code>numbers</code> with [1, 2, 3]</li>
                <li>Add 4 to the end using <code>push()</code></li>
                <li>Print the array</li>
            </ul>
        `,
        starterCode: `// Create array
let numbers = [1, 2, 3];

// Add 4 to the end
numbers.push(4);

// Print the array
console.log(numbers);`,
        solution: `let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);`,
        hint: "Use arrayName.push(value) to add an element to the end of an array.",
        test: (code) => {
            try {
                const output = [];
                const originalLog = console.log;
                console.log = (...args) => {
                    output.push(args.join(' '));
                };
                eval(code);
                console.log = originalLog;
                return output.some(line => line.includes("4"));
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 10,
        title: "Objects",
        difficulty: "beginner",
        description: `
            <h3>Working with Objects</h3>
            <p>Create an object to store information.</p>
            <p><strong>Instructions:</strong></p>
            <ul>
                <li>Create an object called <code>person</code> with properties: name, age, city</li>
                <li>Set name to "Sarah", age to 30, city to "New York"</li>
                <li>Print the person's name and city</li>
            </ul>
        `,
        starterCode: `// Create object
let person = {
    name: "Sarah",
    age: 30,
    city: "New York"
};

// Print name and city
console.log("Name:", person.name);
console.log("City:", person.city);`,
        solution: `let person = {
    name: "Sarah",
    age: 30,
    city: "New York"
};
console.log("Name:", person.name);
console.log("City:", person.city);`,
        hint: "Objects use curly braces {}. Access properties with objectName.propertyName.",
        test: (code) => {
            try {
                const output = [];
                const originalLog = console.log;
                console.log = (...args) => {
                    output.push(args.join(' '));
                };
                eval(code);
                console.log = originalLog;
                return output.some(line => line.includes("Sarah")) && 
                       output.some(line => line.includes("New York"));
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 11,
        title: "Introduction to Fetch API",
        difficulty: "intermediate",
        description: `
            <h3>Making Your First API Call</h3>
            <p>Learn how to fetch data from the internet using JavaScript's fetch() function.</p>
            <p><strong>Instructions:</strong></p>
            <ul>
                <li>Use <code>fetch()</code> to get data from: <code>https://jsonplaceholder.typicode.com/posts/1</code></li>
                <li>Convert the response to JSON using <code>.json()</code></li>
                <li>Print the title from the response</li>
            </ul>
            <p><strong>Note:</strong> fetch() returns a Promise, so you'll need to use <code>.then()</code> or <code>async/await</code></p>
        `,
        starterCode: `// Use fetch() to get data from the API
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        console.log("Title:", data.title);
    });`,
        solution: `fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        console.log("Title:", data.title);
    });`,
        hint: "fetch(url) returns a Promise. Use .then() to handle the response. Call .json() on the response to convert it to JavaScript object.",
        test: async (code) => {
            try {
                const output = [];
                const originalLog = console.log;
                console.log = (...args) => {
                    output.push(args.join(' '));
                };
                await eval(`(async () => { ${code} })()`);
                await new Promise(resolve => setTimeout(resolve, 1000));
                console.log = originalLog;
                return output.some(line => line.includes("Title:") || line.includes("title"));
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 12,
        title: "Async/Await with Fetch",
        difficulty: "intermediate",
        description: `
            <h3>Using Async/Await for Cleaner Code</h3>
            <p>Learn the modern way to handle asynchronous operations using async/await.</p>
            <p><strong>Instructions:</strong></p>
            <ul>
                <li>Create an <code>async</code> function called <code>getUser</code></li>
                <li>Use <code>await fetch()</code> to get data from: <code>https://jsonplaceholder.typicode.com/users/1</code></li>
                <li>Use <code>await response.json()</code> to parse the data</li>
                <li>Print the user's name and email</li>
                <li>Call the function</li>
            </ul>
        `,
        starterCode: `// Create async function
async function getUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    console.log("Name:", user.name);
    console.log("Email:", user.email);
}

// Call the function
getUser();`,
        solution: `async function getUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    console.log("Name:", user.name);
    console.log("Email:", user.email);
}

getUser();`,
        hint: "Use 'async function' to create an async function. Use 'await' before fetch() and response.json(). Don't forget to call the function!",
        test: async (code) => {
            try {
                const output = [];
                const originalLog = console.log;
                console.log = (...args) => {
                    output.push(args.join(' '));
                };
                await eval(`(async () => { ${code} })()`);
                await new Promise(resolve => setTimeout(resolve, 1000));
                console.log = originalLog;
                return output.some(line => line.includes("Name:") || line.includes("name")) && 
                       output.some(line => line.includes("Email:") || line.includes("email"));
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 13,
        title: "Error Handling with Try/Catch",
        difficulty: "intermediate",
        description: `
            <h3>Handling Errors in API Calls</h3>
            <p>Learn how to handle errors when making API calls using try/catch blocks.</p>
            <p><strong>Instructions:</strong></p>
            <ul>
                <li>Create an async function that fetches data from an API</li>
                <li>Wrap the fetch in a <code>try/catch</code> block</li>
                <li>If successful, print the data</li>
                <li>If there's an error, print "Error: " followed by the error message</li>
                <li>Use: <code>https://jsonplaceholder.typicode.com/posts/1</code></li>
            </ul>
        `,
        starterCode: `// Create async function with error handling
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log("Success:", data.title);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

fetchData();`,
        solution: `async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log("Success:", data.title);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

fetchData();`,
        hint: "Wrap your async code in try { } catch (error) { }. Put the fetch and JSON parsing in the try block, and error handling in the catch block.",
        test: async (code) => {
            try {
                const output = [];
                const originalLog = console.log;
                console.log = (...args) => {
                    output.push(args.join(' '));
                };
                await eval(`(async () => { ${code} })()`);
                await new Promise(resolve => setTimeout(resolve, 1000));
                console.log = originalLog;
                return output.length > 0;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 14,
        title: "Mini Project: Random Dog Image Generator",
        difficulty: "intermediate",
        description: `
            <h3>🐕 Build a Dog Image Generator</h3>
            <p>Create a mini project that fetches random dog images from an API!</p>
            <p><strong>Instructions:</strong></p>
            <ul>
                <li>Create an async function called <code>getRandomDog</code></li>
                <li>Fetch from: <code>https://dog.ceo/api/breeds/image/random</code></li>
                <li>The API returns: <code>{"message": "image_url", "status": "success"}</code></li>
                <li>Print the image URL from the response</li>
                <li>Call the function to test it</li>
            </ul>
            <p><strong>Challenge:</strong> Try calling it multiple times to get different dog images!</p>
        `,
        starterCode: `// Create function to get random dog image
async function getRandomDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    console.log("Dog Image URL:", data.message);
}

// Call the function
getRandomDog();`,
        solution: `async function getRandomDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    console.log("Dog Image URL:", data.message);
}

getRandomDog();`,
        hint: "The API returns an object with a 'message' property containing the image URL. Access it with data.message.",
        test: async (code) => {
            try {
                const output = [];
                const originalLog = console.log;
                console.log = (...args) => {
                    output.push(args.join(' '));
                };
                await eval(`(async () => { ${code} })()`);
                await new Promise(resolve => setTimeout(resolve, 1000));
                console.log = originalLog;
                return output.some(line => line.includes("http") || line.includes("URL:"));
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 15,
        title: "Mini Project: Joke Generator",
        difficulty: "intermediate",
        description: `
            <h3>😄 Build a Joke Generator</h3>
            <p>Create a function that fetches random jokes from an API!</p>
            <p><strong>Instructions:</strong></p>
            <ul>
                <li>Create an async function called <code>getJoke</code></li>
                <li>Fetch from: <code>https://official-joke-api.appspot.com/random_joke</code></li>
                <li>The API returns: <code>{"setup": "question", "punchline": "answer", "type": "type"}</code></li>
                <li>Print both the setup and punchline</li>
                <li>Call the function</li>
            </ul>
        `,
        starterCode: `// Create function to get a random joke
async function getJoke() {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const joke = await response.json();
    console.log("Setup:", joke.setup);
    console.log("Punchline:", joke.punchline);
}

// Call the function
getJoke();`,
        solution: `async function getJoke() {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const joke = await response.json();
    console.log("Setup:", joke.setup);
    console.log("Punchline:", joke.punchline);
}

getJoke();`,
        hint: "The API returns an object with 'setup' and 'punchline' properties. Access them with joke.setup and joke.punchline.",
        test: async (code) => {
            try {
                const output = [];
                const originalLog = console.log;
                console.log = (...args) => {
                    output.push(args.join(' '));
                };
                await eval(`(async () => { ${code} })()`);
                await new Promise(resolve => setTimeout(resolve, 1000));
                console.log = originalLog;
                return output.some(line => line.includes("Setup:") || line.includes("setup")) && 
                       output.some(line => line.includes("Punchline:") || line.includes("punchline"));
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 16,
        title: "Mini Project: Random User Generator",
        difficulty: "intermediate",
        description: `
            <h3>👤 Build a Random User Generator</h3>
            <p>Create a function that fetches random user data and displays it nicely!</p>
            <p><strong>Instructions:</strong></p>
            <ul>
                <li>Create an async function called <code>getRandomUser</code></li>
                <li>Fetch from: <code>https://randomuser.me/api/</code></li>
                <li>The API returns data in <code>results[0]</code> array</li>
                <li>Extract and print: first name, last name, email, and country</li>
                <li>Access them like: <code>data.results[0].name.first</code></li>
            </ul>
        `,
        starterCode: `// Create function to get random user
async function getRandomUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    
    console.log("Name:", user.name.first, user.name.last);
    console.log("Email:", user.email);
    console.log("Country:", user.location.country);
}

getRandomUser();`,
        solution: `async function getRandomUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    
    console.log("Name:", user.name.first, user.name.last);
    console.log("Email:", user.email);
    console.log("Country:", user.location.country);
}

getRandomUser();`,
        hint: "The API returns data in a 'results' array. Access the first user with data.results[0]. Then access nested properties like user.name.first.",
        test: async (code) => {
            try {
                const output = [];
                const originalLog = console.log;
                console.log = (...args) => {
                    output.push(args.join(' '));
                };
                await eval(`(async () => { ${code} })()`);
                await new Promise(resolve => setTimeout(resolve, 1000));
                console.log = originalLog;
                return output.some(line => line.includes("Name:") || line.includes("name")) && 
                       output.some(line => line.includes("Email:") || line.includes("email"));
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 17,
        title: "Mini Project: Cat Facts Generator",
        difficulty: "intermediate",
        description: `
            <h3>🐱 Build a Cat Facts Generator</h3>
            <p>Create a function that fetches random cat facts with error handling!</p>
            <p><strong>Instructions:</strong></p>
            <ul>
                <li>Create an async function called <code>getCatFact</code></li>
                <li>Use try/catch for error handling</li>
                <li>Fetch from: <code>https://catfact.ninja/fact</code></li>
                <li>The API returns: <code>{"fact": "fact text", "length": number}</code></li>
                <li>Print the fact</li>
                <li>If there's an error, print "Failed to fetch cat fact"</li>
            </ul>
        `,
        starterCode: `// Create function with error handling
async function getCatFact() {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        console.log("Cat Fact:", data.fact);
    } catch (error) {
        console.log("Failed to fetch cat fact");
    }
}

getCatFact();`,
        solution: `async function getCatFact() {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        console.log("Cat Fact:", data.fact);
    } catch (error) {
        console.log("Failed to fetch cat fact");
    }
}

getCatFact();`,
        hint: "Wrap your fetch in try/catch. The API returns an object with a 'fact' property. Access it with data.fact.",
        test: async (code) => {
            try {
                const output = [];
                const originalLog = console.log;
                console.log = (...args) => {
                    output.push(args.join(' '));
                };
                await eval(`(async () => { ${code} })()`);
                await new Promise(resolve => setTimeout(resolve, 1000));
                console.log = originalLog;
                return output.some(line => line.includes("Cat Fact:") || line.includes("fact"));
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 18,
        title: "Mini Project: Multiple API Calls",
        difficulty: "intermediate",
        description: `
            <h3>🚀 Advanced: Fetch Multiple APIs</h3>
            <p>Create a function that fetches data from multiple APIs and combines the results!</p>
            <p><strong>Instructions:</strong></p>
            <ul>
                <li>Create an async function called <code>getMultipleData</code></li>
                <li>Fetch from two APIs:
                    <ul>
                        <li><code>https://jsonplaceholder.typicode.com/posts/1</code></li>
                        <li><code>https://jsonplaceholder.typicode.com/users/1</code></li>
                    </ul>
                </li>
                <li>Use <code>await Promise.all()</code> to fetch both at the same time</li>
                <li>Print the post title and user name</li>
            </ul>
        `,
        starterCode: `// Fetch multiple APIs at once
async function getMultipleData() {
    const [postResponse, userResponse] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts/1'),
        fetch('https://jsonplaceholder.typicode.com/users/1')
    ]);
    
    const post = await postResponse.json();
    const user = await userResponse.json();
    
    console.log("Post Title:", post.title);
    console.log("User Name:", user.name);
}

getMultipleData();`,
        solution: `async function getMultipleData() {
    const [postResponse, userResponse] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts/1'),
        fetch('https://jsonplaceholder.typicode.com/users/1')
    ]);
    
    const post = await postResponse.json();
    const user = await userResponse.json();
    
    console.log("Post Title:", post.title);
    console.log("User Name:", user.name);
}

getMultipleData();`,
        hint: "Use Promise.all([fetch1, fetch2]) to fetch multiple APIs simultaneously. Destructure the results with [response1, response2].",
        test: async (code) => {
            try {
                const output = [];
                const originalLog = console.log;
                console.log = (...args) => {
                    output.push(args.join(' '));
                };
                await eval(`(async () => { ${code} })()`);
                await new Promise(resolve => setTimeout(resolve, 1500));
                console.log = originalLog;
                return output.some(line => line.includes("Post Title:") || line.includes("title")) && 
                       output.some(line => line.includes("User Name:") || line.includes("name"));
            } catch (e) {
                return false;
            }
        }
    }
];
