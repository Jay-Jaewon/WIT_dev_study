const fetechBtn = document.querySelector("#fetchBtn");
const dataBoard = document.querySelector(".dataBoard");

function fetchstart(){
    console.log("start");
    fetchdata();

}

function init(){
    fetechBtn.addEventListener("click",fetchstart);
}

//화살표함수 예시
var square = function(x) {
    return x*x;
}
var square = x =>{
    return x*x;
}
var square = (x) => x*x;

const users = [
    { name: 'nathan', age:25},
    { name: 'Jack', age : 30},
    { name: 'Joe', age : 28},
];
users.map(user => {
    // console.log(user.name);
})

var getName = () => {
    var user = fetch()
}


function printJSON(json){
    console.log(json);
    json.filter(data => data.userId ==1).map(data =>{
        const postTitle = document.createElement("h2");
        const postBody = document.createElement("h5");
        const postUserId = document.createElement("p");
        postTitle.innerHTML = `Title: ${data.title}`;
        postBody.innerHTML = `Body : ${data.body}`;
        postUserId.innerHTML = `UserId : ${data.userId}`
        dataBoard.appendChild(postTitle);
        dataBoard.appendChild(postUserId);
        dataBoard.appendChild(postBody);
    })

}

function fetchdata(){
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((response) => response.json())
    .then((json) => printJSON(json));
    // const fdata = 
    // return
}

init();

//배운것
//let const


// const fetchBtn = document.getElementById('fetchBtn');
// fetchBtn.onclick = async () =>{
//   // alert("클릭");
//   // var response = await fetch('https://jsonplaceholder.typicode.com/posts/');
//   // if(response.ok){
//   //   var json = await response.json();
//   // }else{
//   //   alert("http-Error: " + response.status);
//   // }
//   // var text = JSON.stringify(json.filter(post => post.userid == 1));
//   // document.write(text);
//   // document.write(text.replaceAll());
//   let response = await fetch("https://jsonplaceholder.typicode.com/posts/ ");
//   console.log("response:" + typeof(response))
//   let data = await response.json();
//   console.log("data :" + typeof(data))
//   let result = JSON.stringify(data.filter(user => user.userId == 1));
//   document.write(result.replaceAll(',', ', <br/>'))
//   console.log("result :" + typeof(result))
  
// }
