'use strict' 

function format(response) {
    //console.log(response);
    return response.json();
}

function render1(posts){
    var html = '';
    for(var post of posts){
        html += '<div class="post">';
        html +=   '<b>' + post.data_update + '</b>';
        html +=   '<h2>' + post.title + '</h2>';
        html +=   '<p>' + post.description + '</p>';
        html += '</div>'
    }
    return html;
}
function render2(str){
    var container = document.querySelector('#list-posts');
    container.innerHTML = str
}

function showPosts() {
fetch('http://blog.api.axenov-it.com/posts')
    .then(format)
    .then(render1)
    .then(render2);
}

var btn = document.querySelector('#render-posts');

var isOpen = false;

function toogle() {
    var container = document.querySelector('#list-posts');
    if (isOpen) {
        container.innerHTML = "";
        isOpen = false;
    }else{
        showPosts();
        isOpen = true;
    }
}

btn.onclick = showPosts;