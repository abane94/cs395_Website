function post(a, b, c) {
    var text = $('#edit').val();
    var html_string = render(text);
    var post = createEl(html_string);
    $('#cardList').append(post);
}

function render(text) {
    return`
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">
                    ${text}
                </p>
                <a href="#!" class="card-link">Like</a>
                <a href="#!" class="card-link">Share</a>
            </div>
        </div>
        `
}

function createEl(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild; 
}