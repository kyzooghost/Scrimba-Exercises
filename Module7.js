fetch('example.txt')
    .then( response => response.text())
    .then( text => {
        const div = document.createElement('div');
        div.innerHTML = text;
        document.body.appendChild(div);
    })

//

fetch('people.json')
    .then( response => response.json() )
    .then( data => {
        for (let i = 0; i < data.length; i++) {
            const div = document.createElement ('div');
            div.innerText = `Name: ${data[i].name}`
            document.body.appendChild(div);
        }
    })

  //

  fetch('people.json')
    .then( res => res.json() )
    .then( json => {
        json.forEach( person => {
            const div = document.createElement('div');
            div.innerHTML = person.name;
            document.body.appendChild(d)
        })
    })

    // Add error handling to this example

    fetch('people.json')
    	.then( response => {throw 404} )
    	.then( json =>
    		json.forEach((person) => {
                const div = document.createElement("div");
                div.innerHTML = `${person.name} is ${person.age}`;
                document.body.appendChild(div);
            })
        )
        .catch (err => console.log(err));

// Async / await

  const getData = async () => {
    const response = await fetch('people.json');
    const data = await response.json();

    data.forEach( person => {
        const div = document.createElement('div');
        div.innerHTML = person.name;
        document.body.appendChild(div);
    })
}

getData();

//

async function getPosts() {
    const postsPromise = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postsPromise.json();
    let html = "";

    posts.forEach( post => {
        const title = post.title;
        const body = post.body;
        html += `
            <div class='post'>
                <h3>${title}</h3>
                <p>${body}</p>
            </div>
        `;
    });
    document.body.innerHTML = html;
}

getPosts();

//

async function getPosts() {
    const postsPromise = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postsPromise.json();
    let html = "";

    posts.slice(0,5).forEach( post => {
        const title = post.title;
        const body = post.body;
        html += `
            <div class='post'>
                <h3>${title}</h3>
                <p>${body}</p>
            </div>
        `;
    });
    document.body.innerHTML = html;
}

getPosts();

//

async function getPosts() {
    const postsPromise = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    if(postsPromise.ok) {
        const posts = await postsPromise.json();
        let html = "";

        posts.slice(0, 5).forEach((post) => {
            const title = post.title;
            const body = post.body;
            html += `
            <div class='post'>
                <h3>${title}</h3>
                <p>${body}</p>
            </div>
            `;
        });

        document.body.innerHTML = html;
    } else {
        console.error(`Error: ${postsPromise.status}`)
    }
}

getPosts();

//

document.getElementById('fetchForm').addEventListener('submit', submitPost);

async function submitPost(e) {
    e.preventDefault();

    let title = document.getElementById('titleInput').value;
    let body = document.getElementById('bodyInput').value;

    const options = {
        method: 'POST',
        body: JSON.stringify({title: title, body: body}),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    };

    const postPromise = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        options
    );

    const post = await postPromise.json();

    title = post.title;
    body = post.body;

    document.querySelector('.card-title').innerHTML = title;
    document.querySelector('.card-text').innerHTML = body;

    document.getElementById('fetchForm').reset();
}

//

document.getElementById("fetchForm").addEventListener("submit", submitPost);

async function submitPost(e) {
    e.preventDefault();

    let title = document.getElementById("titleInput").value;
    let body = document.getElementById("bodyInput").value;

    const options = {
        method: "POST",
        body: JSON.stringify({ title: title, body: body }),
        headers: new Headers({
        "Content-Type": "application/json"
        })
    };

    const postPromise = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        options
    );

    if(postPromise.ok) {
        const post = await postPromise.json();

        title = post.title;
        body = post.body;
    } else {
        title = 'Error';
        body = `Status: ${postPromise.status}`;
    }

    document.querySelector(".card-title").innerText = title;
    document.querySelector(".card-text").innerText = body;

    document.getElementById("fetchForm").reset();
}

//Promise chaining - Open a fetch query, put an entire separate new fetch query within the end of it

document.getElementById("action").addEventListener("click", ()=>{

    // call user API
    // store random first name in a variable firstUser
    // call user API again, after you finish calling first one
    // store random first name in variable secondUser
    // console log `${firstUser} and ${secondUser} are friends`

    const userApi = 'https://randomuser.me/api/'

    fetch(userApi)
        .then(response => response.json())
        .then(json => {
            const firstUser = json.results[0].name.first

            fetch(userApi)
                .then(response => response.json())
                .then(json => {
                    const secondUser = json.results[0].name.first
                    console.log(`${firstUser} and ${secondUser} are friends`)
                })
        })
    })

//ALTERNATE SOLUTION TO PROMISE CHAINING - 2x fetch calls in the one async function


document.getElementById("action").addEventListener("click", ()=>{

    // call user API
    // store random first name in a variable firstUser
    // call user API again, after you finish calling first one
    // store random first name in variable secondUser
    // console log `${firstUser} and ${secondUser} are friends`

    const userApi = 'https://randomuser.me/api/'

    let firstUser = ""
    let secondUser = ""

    async function getNames() {
        const user1Promise = await fetch(userApi)
        const user1 = await user1Promise.json()
        firstUser = user1.results[0].name.first

        const user2Promise = await fetch(userApi)
        const user2 = await user2Promise.json()
        secondUser = user2.results[0].name.first

        console.log(`${firstUser} and ${secondUser} are friends`)
    }

    getNames()
})

//TO AVOID ASYNC function within

document.getElementById("action").addEventListener("click", async ()=>{

    // call user API
    // store random first name in a variable firstUser
    // call user API again, after you finish calling first one
    // store random first name in variable secondUser
    // console log `${firstUser} and ${secondUser} are friends`

    const userApi = 'https://randomuser.me/api/'

    let firstUser = ""
    let secondUser = ""

    const user1Promise = await fetch(userApi)
    const user1 = await user1Promise.json()
    firstUser = user1.results[0].name.first

    const user2Promise = await fetch(userApi)
    const user2 = await user2Promise.json()
    secondUser = user2.results[0].name.first

    console.log(`${firstUser} and ${secondUser} are friends`)

    })

  //Catching errors

  document.getElementById("x").addEventListener("click", ()=>{

    const userApi = 'https://randomuser.me/apii'

    fetch(userApi).then(response=>response.json()).then(json=>{
      console.log('promise chaining:', json.results[0].name.first)
    }).catch(err=>console.log(err))


    })

document.getElementById("y").addEventListener("click", async ()=>{

    const userApi = 'htttps://randomuser.me/api/'

   try{
        const response = await fetch(userApi)
        const json = await response.json()
        console.log('async/await:', json.results[0].name.first)

   } catch(err){
       console.log(err)
   }

})

//MORE PROMISES

function succesfulPromise(){
    return new Promise((resolve,reject)=>{
        resolve({a:'success'})
    })
}

function rejectedPromise(){
    return new Promise((resolve,reject)=>{
        reject(new Error('here is error'))
    })
}

function pendingPromise(){
    return new Promise((resolve,reject)=>{
        const interval = setInterval(()=>console.log('pending'),1000)
        setTimeout(()=>{
            clearInterval(interval)
            resolve('success after 4 seconds')
        },4000)
    })
}

(async function() {
    try{
        const result = await pendingPromise()
        console.log(result)

    }catch(err){
        console.log(err)
    }
})();

//Set interval, timeout

const interval = setInterval ( () =>
    console.log ('pending')
    ,1000);

setTimeout(() => {
    clearInterval(interval)
    console.log('success after 4 seconds')
}, 4000);

//PROMISE CHALLENGE

// create a promise
// wait for 4 seconds
// resolve or reject based on randomBool
// false - reject 'hero is on vacation'
// true - resolve 'batman is here'

const randomBool = Boolean(Math.round(Math.random())) // returns either 0 or 1

const getHero = () => {
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => console.log('pending'), 250)

        setTimeout(() => {
            clearInterval(interval)
            if(randomBool) {resolve('batman is here')}
            else {reject(new Error('hero is on vacation'))}
        }, 500)
    })
}

(async function() {
    try{
        const result = await getHero()
        console.log(result)

    }catch(err){
        console.log(err)
    }
})();

//Promise finally

const promise = ()=>{
    return new Promise((resolve,reject)=>{
        reject(new Error('Something went wrong'))
    })
}

const resolver = async (promise)=>{
    try{
        await promise()
    }catch(err){
        console.log(err)
    }finally{
        return 'I still return the value'
        console.log('I am here')
    }
}

(async function() {
    const test = await resolver(promise)
    console.log(test)
})();

//PROMISE ALL

const startTransaction = ()=>{
   return new Promise((res)=>{
      setTimeout(()=>{
            res(true)
      },3000)
})
}
const initPayment = ()=>{
   return new Promise((res)=>{
      setTimeout(()=>{
            res(true)
      },2000)
})
}
const launchVerification = ()=>{
    return new Promise((res) => {
      setTimeout(()=>{
            res(true)
      },2000)
})
}

const performance = async (label) => {
      const date = new Date()
      console.log(label, `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}


(async function() {
    try{
          await performance('start')
          const result = await Promise.all([startTransaction(),initPayment(),launchVerification()])
          await performance('end')
          console.log(result)

    }catch(err){
        console.log(err)
    }
})();

//Promise Race

const taskA = ()=>{
   return new Promise((res)=>{
      setTimeout(()=>{
            res('a')
      },4000)
})
}
const taskB = ()=>{
   return new Promise((res)=>{
      setTimeout(()=>{
            res('b')
      },2000)
})
}
const taskC = ()=>{
    return new Promise((res) => {
      setTimeout(()=>{
            res('c')
      },10000)
})
}

const promiseStopper = ()=>{
      return new Promise((res) => {
      setTimeout(()=>{
            res('too long to complete')
      },1500)
})
}

(async function() {
    try{
          const result = await Promise.race([taskA(),taskB(),taskC(),promiseStopper()])
          console.log(result)

    }catch(err){
        console.log(err)
    }
})();

//CHALLENGE - PARALLEL EXECUTION

const taskW = ()=>{
   return new Promise((res)=>{
      setTimeout(()=>{
            res('W')
      },1000)
})
}
const taskO = ()=>{
   return new Promise((res)=>{
      setTimeout(()=>{
            res('O')
      },500)
})
}
const taskExclaim = ()=>{
    return new Promise((res) => {
      setTimeout(()=>{
            res('!')
      },Math.floor(Math.random() * 1000))
})
}
const taskSmiley = ()=>{
    return new Promise((res) => {
      setTimeout(()=>{
            res(':)')
      },300)
})
}


// execute taskW append W to wow
// execute taskW and taskO in parallel and append result to wow
// execute taskExclaim and taskSmiley in race condition append result to wow
// get either WOW! or WOW:) depending on the random value of taskExclaim timeout



(async function() {
    try{
      let wow = ''

      const resultW = await taskW()
      wow+=resultW

      const resultOW = await Promise.all([taskO(),taskW()])
      wow+=resultOW[0]+=resultOW[1]

      const resultPostfix = await Promise.race([taskExclaim(),taskSmiley()])
      wow+=resultPostfix

      console.log(wow)

    }catch(err){
        console.log(err)
    }
})();

//Traffic light official solution

//huge courtesy to my friend Florin for css of the traffic light. https://twitter.com/florinpop1705

let active = 0
let lights = document.querySelectorAll('.circle')

const switchLight = (currentLight) =>{
    currentLight.classList.add(currentLight.getAttribute('color'));
}
const turnOffLight = (currentLight) =>{
    currentLight.className = 'circle'
}

const changeLight = ()=>{
    return new Promise((res,rej)=>{
        let currentLight = lights[active]
        if(active===0){
            switchLight(currentLight)
            setTimeout(()=>{
               turnOffLight(currentLight)
               active=1
               res(active)
            },1000)
        }
        if(active===1){
            switchLight(currentLight)
            setTimeout(()=>{
               turnOffLight(currentLight)
               active=2
               res(active)
            },4000)
        }
        if(active===2){
            switchLight(currentLight)
            setTimeout(()=>{
               turnOffLight(currentLight)
               active=0
               res(active)
            },2000)
        }
    })

}

(async function() {
    try{
       await changeLight()
       await changeLight()
       await changeLight()
    }catch(err){
        console.log(err)
    }
})();

//My solution for traffic light

//huge courtesy to my friend Florin for css of the traffic light. https://twitter.com/florinpop1705

//huge courtesy to my friend Florin for css of the traffic light. https://twitter.com/florinpop1705

let active = 0
let lights = document.querySelectorAll('.circle')

let intervalTime = 250
let intervalCount = 0

const switchLight = (currentLight) =>{
    currentLight.classList.add(currentLight.getAttribute('color'));
}
const turnOffLight = (currentLight) =>{
    currentLight.className = 'circle'
}

const changeLight = ()=>{
   return new Promise((res) => {

       setTimeout(()=>{
           switchLight(lights[active])
           },intervalCount + intervalTime)

       setTimeout(()=>{
           turnOffLight(lights[active])
           active += 1
           },intervalCount + 2 * intervalTime)

       intervalCount += 2 * intervalTime
       res(true)
   })
}

(async function() {
    try{
       await changeLight()
       await changeLight()
       await changeLight()
    }catch(err){
        console.log(err)
    }
})();


//

// Create a variable for the form element. Then create an event listener for submit. Prevent the default behavior. Post a FormData object to https://httpbin.org/post, then console log the JSON response.

const url = 'https://httpbin.org/post'
let formElement = document.getElementById('uploadForm')

formElement.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(this)

    const options = {
        method: 'POST',
        body: formData
    }

    fetch(url, options)
        .then(resp => resp.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
})


// Create a variable for the form element. Then create an event listener for submit. Prevent the default behavior. Post a FormData object to https://httpbin.org/post, then console log the JSON response.

const url = 'https://httpbin.org/post'
let formElement = document.getElementById('uploadForm')

formElement.addEventListener('submit', (event) => {
    event.preventDefault()
    uploadFile(this)
})

async function uploadFile (data) {

    const formData = new FormData(data)

    const options = {
        method: 'POST',
        body: formData
    }

    const postsPromise = await fetch(url, options)

    if (postsPromise.ok) {
        const posts = await postsPromise.json()
        console.log(posts)
    } else {
        console.log(postsPromise.status)
    }
}

// Create a variable for the form element. Then create an event listener for submit. Prevent the default behavior. Post a FormData object to https://httpbin.org/post, then console log the JSON response.

const uploadForm = document.getElementById('uploadForm');

uploadForm.addEventListener('submit', function(e) {
    e.preventDefault();

    uploadFile(this);
});

async function uploadFile(data) {
    const formData = new FormData(data);

    const options = {
        method: 'POST',
        body: formData
    };

    const uploadPromise = await fetch('https://httpbin.org/post', options);

    if(uploadPromise.ok) {
        const uploadResp = await uploadPromise.json();
        console.log(uploadResp);
    } else {
        console.error(uploadPromise.status);
    }
}

//HTML FOR UPLOADING MULTIPLE FILES

<html>
    <body>
        <h1>Upload Files with Fetch API</h1>
        <form id="uploadForm">
            <input type="file" name="fileUpload" multiple>
            <input type="submit" value="Submit">
        </form>

        <script src="index.pack.js"></script>
    </body>
</html>

//JS FOR UPLOADING MULTIPLE FILES

const uploadForm = document.getElementById('uploadForm');

uploadForm.addEventListener('submit', function(e) {
    e.preventDefault();

    uploadFile(this);
});

async function uploadFile(data) {
    const formData = new FormData();
    const files = data.querySelector('input[type="file"]').files;

    for (let i=0; i < files.length; i++) {
        formData.append(`fileInput_${i}`, files[i]);
    }

    const options = {
        method: 'POST',
        body: formData
    };

    const uploadPromise = await fetch('https://httpbin.org/post', options);

    if(uploadPromise.ok) {
        const uploadResp = await uploadPromise.json();
        console.log(uploadResp.files);
    } else {
        console.error(uploadPromise.status);
    }
}

///MULTIPLE FETCH REQUESTS

// Below the authors name, add a new paragraph to the HTML that contains the company that the user works for.

async function getPost() {
    const [postPromise, userPromise] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts"),
        fetch("https://jsonplaceholder.typicode.com/users")
    ]);

    const posts = await postPromise.json();
    const users = await userPromise.json();

    console.log(users[0]);

    const html = `
		<h3>${posts[0].title}</h3>
        <h5>${users.filter(user => user.id === posts[0].userId)[0].name}</h5>
        <p>${users.filter(user => user.id === posts[0].userId)[0].company.name}</p>
		<p>${posts[0].body}</p>
	`;

    document.body.innerHTML = html;
}

getPost();
