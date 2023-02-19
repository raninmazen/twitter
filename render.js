//data-id
const Containerpost = $('#posts');

const Renderer = function () {

    const renderPosts = function (posts) {

        Containerpost.empty();

        for (let post of posts) {
            Containerpost.append(`<div id=${post.id} data-postid=${post.id} class=post></div>`)

            let ContainerIDPost = $(`#${post.id}`);
            ContainerIDPost.append(`<div class=delete> X </div>`)
            ContainerIDPost.append(`<h1 class=post-text> ${post.text} </h1>`)
            ContainerIDPost.append(`<input class=comment-input type=text>`)
            ContainerIDPost.append(`<button class=add-comment> Comment </button>`)

            for (let comment of post.comments) {
                ContainerIDPost.append(`<div id=${comment.id} data-commentid=${comment.id} class=comments > ${comment.text} </div>`)
                $(`#${comment.id}`).append(`<div class=delete-comment> X </div>`)
            }
        }
    }

    return {
        renderPosts: renderPosts
    };
}




























/*const postsContainer = $('#posts');

const Renderer = function () {

    const renderPosts = function (posts) {

        postsContainer.empty();

        for (let post of posts) {
            postsContainer.append(`<div id=${post.id} data-idpost=${post.id} class=post></div>`)

            let postIdContainer = $(`#${post.id}`);
            postIdContainer.append(`<div class=delete> X </div>`)
            postIdContainer.append(`<h1 class=post-text> ${post.text} </h1>`)
            postIdContainer.append(`<input class=comment-input type=text>`)
            postIdContainer.append(`<button class=add-comment> Comment </button>`)

            for (let comment of post.comments) {
                postIdContainer.append(`<div id=${comment.id} data-commentid=${comment.id} class=comments > ${comment.text} </div>`)
                $(`#${comment.id}`).append(`<div class=delete-comment> X </div>`)
            }
        }
    }

    return {
        renderPosts: renderPosts
    };
}
*/