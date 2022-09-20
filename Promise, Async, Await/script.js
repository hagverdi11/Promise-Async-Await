// let users = [

//     {
//         name: "Orxan",
//         surname: "Akber-off",
//         age: 26
//     },

//     {
//         name: "Togrul",
//         surname: "Guluzade",
//         age: 26
//     },

//     {
//         name: "Eshgin",
//         surname: "Eshginov",
//         age: 26
//     },
// ]

// let ul = document.querySelector(".list-group");

// function getUsers() {

//     let elem = "";
//     users.forEach(user => {
//        elem += `<li class="list-group-item"> 
//        <b>${user.name}</b>
//        <b>${user.surname}</b>
//        <b>${user.age}</b>
//        </li>`
//     });

//     ul.innerHTML=elem;
// }



// function createUser(user) {
//     return new Promise((resolved, rejected)=>{
//         users.push(user);
//         let err = tdue;
//         if(!err){
//             resolved();
//         }else{
//             rejected();
//         }
//     }
    
// }


async function getDatas() {
    let posts = await fetch ("https://jsonplaceholder.typicode.com/posts");
    let results = await posts.json()
    let table = document.querySelector(".table")

    results.forEach(result => {
       
        table.innerHTML += `<td> ${result.userId} </td>
        <td> ${result.id} </td>
        <td> ${result.title} </td>
        <td> ${result.body} </td>`
    });



    
}
function delDatas() {

    let table = document.querySelector(".table")
    table.innerHTML = `    <tr>
    <th scope="col">#</th>
    <th scope="col">First</th>
    <th scope="col">Last</th>
    <th scope="col">Handle</th>
  </tr>`;
}


let btn = document.querySelector(".btn")
let deleteBtn = document.querySelector(".btn1")


btn.addEventListener("click", function () {
    getDatas()
})

deleteBtn.addEventListener("click", function () {
   delDatas();
})

