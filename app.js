let comments = []; 

$(document).ready(function () {
    $('#submit').on('click', function (event) {
        event.preventDefault();

        
        let usernameValue = $('#username').val();
        let commentValue = $('#comment').val();

        
        let timestamp = new Date().getTime();

        
        let newComment = {
            username: usernameValue,
            comment: commentValue,
            timestamp: timestamp
        };

        
        comments.push(newComment);

       
        displayComments();

        
        $('#username').val('');
        $('#comment').val('');
    });
});

function displayComments() {
    
    comments.reverse();

    
    let outputHtml = '';
    for (let i = 0; i < comments.length; i++) {
        outputHtml += '<p>Username: ' + comments[i].username + '</p><p>Comment: ' + comments[i].comment + '</p>';
    }
    $('#output').html(outputHtml);
}


$(document).on('click', 'edit-comment', function () {
    let commentContent = $(this).sibling('p:last').text();

    let editedComment = prompt('Edit your comment:', commentContent);

    if (editedComment !== null)
        $(this).sibling('p:last').text('Comment: ' + editedComment);
 
})

$(document).on('click', '.delete-comment', function () {
        $(this).parent('.comment').remove();
})





