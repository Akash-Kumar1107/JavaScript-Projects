const stories = document.getElementById('stories'); 
const prevStory = document.getElementById('prevStory');
const nextStory = document.getElementById('nextStory');
var arr = [
    {dp: "https://source.unsplash.com/random/300 ×100 /? Model",
    story: "https://buffer.com/library/content/images/2023/08/instagram-stories-design-tips--1-.png"},

    {dp: "https://source.unsplash.com/random/300 ×100 /? Actress",
    story: "https://i.pinimg.com/originals/6b/82/b2/6b82b2ace06d7ce67fea6fe0a8fced50.jpg"},

    {dp: "https://source.unsplash.com/random/300 ×100 /? Actor",
    story: "https://www.explorewithlora.com/wp-content/uploads/2020/07/9.jpg"},

    {dp: "https://source.unsplash.com/random/300 ×100 /? celebrity",
    story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGgb028DEyPNJIgUdcOKQbxB4m-isUjacN8asUZp-ofgtTfQb6Iw_2wcj6kDEVZWc5TIc&usqp=CAU"},

    {dp: "https://source.unsplash.com/random/300 ×100 /? Student",
    story: "https://i.pinimg.com/originals/26/bf/fa/26bffa18b680dc22da4975ae31b3d42b.jpg"},

    {dp: "https://source.unsplash.com/random/300 ×100 /? girl",
    story: "https://shotkit.com/wp-content/uploads/2017/12/Best_Photography_Quotes_Shotkit_012.jpg"},

    {dp: "https://source.unsplash.com/random/300 ×100 /? boy",
    story: "https://shotkit.com/wp-content/uploads/2017/12/Best_Photography_Quotes_Shotkit_012.jpg"},
]

var clutter = ""   // default value is undefined
arr.forEach((elem,idx)=>{
    // console.log(elem,idx);
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})
stories.innerHTML = clutter

stories.addEventListener('click',(dets)=>{
    document.querySelector('#full-screen').style.display = "block"
    document.querySelector('#full-screen').style.backgroundImage = `url(${arr[dets.target.id].story})`
    // console.log(arr[dets.target.id].story);
    
    setTimeout(() => {
        document.querySelector('#full-screen').style.display = "none"
        // prevStory.style.display = 'none'
        // nextStory.style.display = 'none'
    }, 3000);
})

// Making Post and implement in post-container
const postsContainer = document.getElementById('posts-container');

const generateRandomImageUrl = (query) => {
    return `https://source.unsplash.com/random/300x400/?${query}`;
};

const initialPostCount = 10; // Number of initial posts
const loadMoreThreshold = 200; // Load more posts when 200px from the bottom
const postsToLoadPerScroll = 5; // Number of new posts to load per scroll

const postInfo = [];

const initialQueries = ['celebrity', 'cars', 'actress', 'actor', 'movies', 'students']; // Initial search queries

for (let i = 0; i < initialPostCount; i++) {
    const randomQuery = initialQueries[Math.floor(Math.random() * initialQueries.length)];
    postInfo.push({ query: randomQuery, name: `User${i + 1}` });
}

const createPost = (query, name) => {
    const imageUrl = generateRandomImageUrl(query);

    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const userDiv = document.createElement('div');
    userDiv.classList.add('user-info');
    userDiv.innerHTML = `
        <img src="${imageUrl}" alt="${name} icon">
        <span>${name}</span>
    `;

    const postImage = document.createElement('img');
    postImage.src = imageUrl;


    const likeBtn = document.createElement('span');
    likeBtn.classList.add('like-btn');
    likeBtn.innerHTML = '<i class="ri-heart-line"></i>';

    let isLiked = false; // Track whether the post is liked

    likeBtn.addEventListener('click', () => {
        isLiked = !isLiked; // Toggle the like state
        if (isLiked) {
            likeBtn.innerHTML = '<i class="ri-heart-fill" style="color: red;"></i>'; // Fill the heart
        } else {
            likeBtn.innerHTML = '<i class="ri-heart-line"></i>'; // Unfill the heart
        }
    });

    const likes = document.createElement('div');
    likes.classList.add('likes');
    likes.appendChild(likeBtn);

    const iconsDiv = document.createElement('div');
    iconsDiv.classList.add('icons');
    iconsDiv.innerHTML = `
        <span class="icon"><i class="ri-chat-3-line"></i></span>
        <span class="icon"><i class="ri-send-plane-line"></i></span>
        <span class="icon icon-gap"><i class="ri-bookmark-line"></i></span>
        <div class="liked-user"><img src="https://source.unsplash.com/random/50x50/?Model" alt="${name} icon"></span>
        <span class="liked-user-2"><img src="https://source.unsplash.com/random/50x50/?Actress" alt="${name} icon"></span>
        <div class="liked-user-3"><img src="https://source.unsplash.com/random/50x50/? actor" alt="${name} icon"></div>
        <div class="liked">Liked by <b>${name}</b> and <b>others</b></div>
    `;

    postElement.appendChild(userDiv);
    postElement.appendChild(postImage);
    postElement.appendChild(likes);
    postElement.appendChild(iconsDiv);

    // Double-click event to trigger double like effect
    postElement.addEventListener('dblclick', () => {
        isLiked = !isLiked; // Toggle the like state
        if (isLiked) {
            likeBtn.innerHTML = '<i class="ri-heart-fill" style="color: red;"></i>'; // Fill the heart
        } else {
            likeBtn.innerHTML = '<i class="ri-heart-line"></i>'; // Unfill the heart
        }
    });

    postsContainer.appendChild(postElement);
};

// Create initial posts
postInfo.forEach((post) => {
    createPost(post.query, post.name);
});

// Function to check if more posts should be loaded
const checkLoadMore = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition + windowHeight >= documentHeight - loadMoreThreshold) {
        // Load more posts when reaching the bottom
        for (let i = 0; i < postsToLoadPerScroll; i++) {
            const randomQuery = initialQueries[Math.floor(Math.random() * initialQueries.length)];
            const newName = `User${postInfo.length + 1}`;
            postInfo.push({ query: randomQuery, name: newName });
            createPost(randomQuery, newName);
        }
    }
};

// Add scroll event listener to window to trigger loading more posts
window.addEventListener('scroll', checkLoadMore);


// Prev and next control for stories
prevStory.addEventListener('click', () => {
    // prevStory.style.color = 'white'
    stories.scrollBy({
        left: -120, // Adjust the scroll distance as needed
        behavior: 'smooth'
    });
});

nextStory.addEventListener('click', () => {
    stories.scrollBy({
        left: 120, // Adjust the scroll distance as needed
        behavior: 'smooth'
    });
});