var switching = document.getElementById("switch");
var page = document.getElementsByTagName("body");
var content = document.getElementsByClassName("content");

switching.addEventListener("change",function(){
    if (switching.checked) {
        page[0].style.backgroundColor = "black";
        for (let index = 0; index < content.length; index++) {
            const element = content[index];
            element.style.color = "white";
        }
        content[1].innerHTML = "Dark Mode";
    }
    else{
        page[0].style.backgroundColor = "white";
        for (let index = 0; index < content.length; index++) {
            const element = content[index];
            element.style.color = "black";
        }
        content[1].innerHTML = "Light Mode";
    }
})