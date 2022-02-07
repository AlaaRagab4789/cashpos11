async function fetchPosts(){

try{

const response = await fetch('http://127.0.0.1:8000/api/omla/all');


}

catch(error){

console.log(error);
}


}

function listsPosts(postContainerElementId){

const postContainerElementId = document.getElementById(postContainerElementId);




}