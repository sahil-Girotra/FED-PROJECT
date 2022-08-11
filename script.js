let menu = document.querySelector('#nav-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}

let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('.search-bar');

searchIcon.onclick = () =>{
  searchIcon.classList.toggle('fa-times');
  searchForm.classList.toggle('active');
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}
const xhr = new XMLHttpRequest();
const source =
  "https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09";
xhr.open("GET", source, true);
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    let output = "";
    for (let i = 0; i < response.length; i++) {
      output += `
        <div class="box">
            <img src="https://picsum.photos/250/?random=${i}">
            <div class="content">
                <p class="user">User - ${response[i].userId}</p>
                <p class="title">${response[i].title}</p>
                <p class="body">${response[i].body}</p>
            </div>
        </div>`;
    }
    document.querySelector(".container").innerHTML = output;
  }
};
xhr.send();