let url= location.pathname;
let index = url.lastIndexOf("/")+1;
let fileName = url.substring(index);
if(fileName == "home.html"){

    document.getElementById("body").style.backgroundColor="blue";

    const url = document.URL;
    document.write("URL: " +url);
}




let codes = document.getElementById("codes");
let play = document.getElementById("play");
let remove = document.getElementById("remove");
let result = document.getElementById("result");

play.onclick=()=>{
    result.innerHTML = codes.value;
    localStorage.setItem("RESULT",codes.value);
    location.reload();
};
remove.onclick=()=>{
    result.innerHTML = "";
    result= localStorage.removeItem("RESULT");
   
    
}
onload= ()=>{

        codes.value = localStorage.getItem("RESULT");
        result.innerHTML = codes.value;
}

var reload = document.getElementById("reload");
reload.addEventListener("click", ()=>{
    location.assign("https://developer.mozilla.org/en-US/");
})
