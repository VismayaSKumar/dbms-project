
function toggleProfileAside() {
    var aside = document.getElementById("profileAside");
    aside.classList.toggle("active");
}

document.addEventListener('click', function(event) {
    var aside = document.getElementById("profileAside");
    var profile = document.querySelector('.profile');
    
    if (!aside.contains(event.target) && !profile.contains(event.target)) {
        aside.classList.remove("active");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newPostForm');
    const postsContainer = document.getElementById('posts');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const postContent = document.getElementById('postContent').value;
        const postImageInput = document.getElementById('postImage');
        const postImage = postImageInput.files[0];

        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const postContentElement = document.createElement('div');
        postContentElement.classList.add('post-content');

        const postTextElement = document.createElement('div');
        postTextElement.classList.add('post-text');
        postTextElement.textContent = postContent;

        if (postImage) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const imgElement = document.createElement('img');
                imgElement.src = e.target.result;
                postContentElement.appendChild(imgElement);
                postContentElement.appendChild(postTextElement);
                postElement.appendChild(postContentElement);
                postsContainer.prepend(postElement);
            };
            reader.readAsDataURL(postImage);
        } else {
            postContentElement.appendChild(postTextElement);
            postElement.appendChild(postContentElement);
            postsContainer.prepend(postElement);
        }

        // Reset the form
        form.reset();
    });
});

function openPostModal() {
    const modal = document.getElementById('postModal');
    modal.style.display = "block";
}

function closePostModal() {
    const modal = document.getElementById('postModal');
    modal.style.display = "none";
}

function addPost() {
    const postText = document.getElementById('postText').value;
    const postImage = document.getElementById('postImage').files[0];

    if (postText || postImage) {
        const postSection = document.getElementById('feedPosts');

        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const postContentDiv = document.createElement('div');
        postContentDiv.classList.add('post-content');

        const postUserP = document.createElement('p');
        postUserP.innerHTML = 'Posted by <a href="">@user_id</a>';
        postContentDiv.appendChild(postUserP);

        if (postImage) {
            const postImageElem = document.createElement('img');
            postImageElem.src = URL.createObjectURL(postImage);
            postContentDiv.appendChild(postImageElem);
        }

        if (postText) {
            const postTextDiv = document.createElement('div');
            postTextDiv.classList.add('post-text');
            postTextDiv.textContent = postText;
            postContentDiv.appendChild(postTextDiv);
        }

        const postActionsDiv = document.createElement('div');
        postActionsDiv.classList.add('post-actions');

        const heartSpan = document.createElement('span');
        heartSpan.innerHTML = '<i class="fa-regular fa-heart"></i>';
        postActionsDiv.appendChild(heartSpan);

        const commentSpan = document.createElement('span');
        commentSpan.innerHTML = '<i class="fa-regular fa-comment"></i>';
        postActionsDiv.appendChild(commentSpan);

        postContentDiv.appendChild(postActionsDiv);
        postDiv.appendChild(postContentDiv);
        postSection.appendChild(postDiv);

        // Reset form and close modal
        document.getElementById('postForm').reset();
        closePostModal();
    }
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('postModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function openProjectForm() {
    document.getElementById('projectForm').style.display = 'block';
}

function closeProjectForm() {
    document.getElementById('projectForm').style.display = 'none';
}

function openRequestForm(recipient) {
    const requestForm = document.getElementById('requestForm');
    requestForm.style.display = 'block';
    document.getElementById('recipient').value = recipient;
}

function closeRequestForm() {
    document.getElementById('requestForm').style.display = 'none';
}

// Existing profile aside toggle function...
function toggleProfileAside() {
    const profileAside = document.getElementById('profileAside');
    profileAside.classList.toggle('active');
}

