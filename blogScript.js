//
// Wiecej postow
//

const allPosts = document.getElementById('all-posts');
allPosts.addEventListener( 'click', () => {
    const posts = document.getElementsByClassName('hidden-post');
    for (let post of posts) {
        post.classList.remove('d-none');
        post.classList.add('slideIn');
        
    }
    allPosts.classList.add('d-none');
} );
