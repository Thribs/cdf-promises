const ul = document.getElementById("users")
const url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
.then( response => response.json())
.then( data => {
    const users = data
    console.log(users)

    return users.map( user => {
        let li = document.createElement('li')
        li.innerHTML = `${user.name} (${user.username})`
        ul.appendChild(li)
    })
})
.catch( err => {
    console.log("Oops!", err);
})