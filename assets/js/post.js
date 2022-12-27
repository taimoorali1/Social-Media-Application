console.log("User Posts JS File");
let userPostUrl = "https://dummyapi.io/data/v1/post?limit=10";

let APP_ID = "637a73db0429c829a36759d0";

// Show the User List

fetch(
    userPostUrl,
    (request_info = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "app-id": APP_ID,
        },
    })
)
    .then((response) => response.json())
    .then((res) => {
        data = res.data;
        // console.log(data);

        data.map((val) => {
            // console.log(val.firstName);                      // Show the values of Fetched Data in console
            var results = `
        <div class="p-3">
        <div class="d-flex justify-content-start align-items-center">
            <img src="${val.owner.picture
                }" class="rounded-circle img-fluid" width="8%">
            <div class="user_info ms-3">
                <h6 class="m-0">${val.owner.title + " " + val.owner.firstName + " " + val.owner.lastName} <span class="small fw-normal text-secondary ms-3">Posted: ${val.publishDate
                }</span>
                </h6>
                <small class="text-secondary m-0"><a href="#" class="text-decoration-none">Web Developer at Webistan </a></small>
            </div>
        </div>
        <p class="description text-secondary mt-3">${val.text}</p>
        <img src="${val.image}" class="img-fluid">

        <div class="mt-3">
        <span class="bg-primary p-2 rounded-3 "><a href="#" class="text-decoration-none text-white ">${val.tags + " "
                }</a></span>
        <br>
        <a href="#" class="text-decoration-none text-primary"><i
                class="fa-solid fa-thumbs-up m-1 mt-3"></i>
            <span>Likes</span> ${val.likes}</a>
        
    </div>

    </div>
        `;
            $("#posts").append(results);

            window.addEventListener("scroll", () => {
                const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
                if (scrollTop + clientHeight > scrollHeight - 5) {
                    setTimeout(createPost(val), 2000);
                }

            });

        });

    });




// The createPost function creates The HTML for the blog post.
// It append it to the container.
function createPost(val) {
    fetch(
        userPostUrl,
        (request_info = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "app-id": APP_ID,
            },
        })
    )
        .then((response) => response.json())
        .then((res) => {
            data = res.data;
            // console.log(data);

            data.map((val) => {
                // console.log(val.firstName);                      // Show the values of Fetched Data in console
                var results = `
            <div class="p-3">
            <div class="d-flex justify-content-start align-items-center">
                <img src="${val.owner.picture
                    }" class="rounded-circle img-fluid" width="8%">
                <div class="user_info ms-3">
                    <h6 class="m-0">${val.owner.title + " " + val.owner.firstName + " " + val.owner.lastName} <span class="small fw-normal text-secondary ms-3">Posted: ${val.publishDate}</span>
                    </h6>
                    <small class="text-secondary m-0"><a href="#" class="text-decoration-none">Web Developer at Webistan </a></small>
                </div>
            </div>
            <p class="description text-secondary mt-3">${val.text}</p>
            <img src="${val.image}" class="img-fluid">
    
            <div class="mt-3">
            <span class="bg-primary p-2 rounded-3 "><a href="#" class="text-decoration-none text-white ">${val.tags + " "}</a></span>
            <br>
            <a href="#" class="text-decoration-none text-primary"><i
                    class="fa-solid fa-thumbs-up m-1 mt-3"></i>
                <span>Likes</span> ${val.likes}</a>
            
        </div>
    
        </div>
            `;
                $("#posts").append(results);
            });
        });
}
