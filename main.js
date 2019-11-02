'use strict' 

function format(response) {
    //console.log(response);
    return response.json();
}

function render1(posts){
    var html = '';
    for(var post of posts){
        html += '<div class="post">';
        html +=   '<p>' + post.title + '</p>';
        html += '</div>'
    }
    return html;
}
function render2(str){
    var container = document.querySelector('#list-posts');
    console.dir(container);
    container.innerHTML = str
}


fetch('http://blog.api.axenov-it.com/posts')
    .then(format)
    .then(render1)
    .then(render2);