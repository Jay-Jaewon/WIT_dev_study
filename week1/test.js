const url = 'https://jsonplaceholder.typicode.com/posts/';

// fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data));

function getData(callBackFunc) {
    fetch(url).then(response => response.json())
    .then(data => callBackFunc(data));
}

getData(function(data){
    jsonData = data;
    console.log(jsonData);
});

async function fetchInfo() {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
var data = fetchInfo()
data.then(info => console.log(info));




//동기 : 코드한줄씩 처리 이전코드의 결과를 기다림.
//비동기 : 코드완료하지 않더라고 다음 코드 실행.
