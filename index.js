var userName;

$( document ).ready(function() {
    userName = localStorage.getItem('name');
    // alert(name);
    $('#welcomeBar').text += ' ' + userName;
    if (!userName || userName === "null") {
        $('#newModal').modal();
        userName = prompt("Please enter you name: ");
        localStorage.setItem('name', userName);
    }

    var ls = [
        {
            name: 'John Smith',
            text: 'Working on that 395 project',
        },
        {
            name: 'Jane Doe',
            text: 'If i pretend hard enough classes will be over right?'
        },
        {
            name: 'Obi Wan',
            text: 'Hello There'
        }
    ];

    ls.forEach(post => {
        addPost(post.name, post.text);
    });

    $('#edit').keypress(function(e) {
        if(e.which == 13) {
            $('postBtn').click();
        }
    });
});


function post() {
    var text = $('#edit').val().trim();
    if (!text) { return; }
    var post = addPost(userName, text, true);

    setTimeout(function() {
        post.parentNode.removeChild(post);
        $('#postModal').modal();
    }, 1700);
}

function addPost(name, text, prepend) {
    var html_string = render(name, text);
    var post = createEl(html_string);
    if (prepend) {
        $('#cardList').prepend(post);
    } else {
        $('#cardList').append(post);
    }
    post.classList+= ' small';
    return post;
}

function render(name, text) {
    return`
        <div class="card post">
            <div class="card-body">
                <h4 class="card-title">${name}</h4>
                <p class="card-text post-text">
                    ${text}
                </p>
                <button type="button" class="btn btn-primary">Like</button>
                <button type="button" class="btn btn-dark">Share</button>
            </div>
        </div>
        `
}

function createEl(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild; 
}