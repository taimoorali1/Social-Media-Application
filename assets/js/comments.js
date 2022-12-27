
console.log("User Comments JS File");

let userCommentUrl = "https://dummyapi.io/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10"; 

fetch(userCommentUrl, request_info = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'app-id': '637a73db0429c829a36759d0'
    },
}).then(response => response.json()).then(res => {
    data = res.data;
    // console.log(data);
    data.map((val) => {
        // console.log(val.firstName);                      // Show the values of Fetched Data in console
        var results = `

        <div class="p-3">
        <img src="${val.owner.picture}" class="rounded-circle" width="6%"><strong>${val.owner.firstName+" " + val.owner.lastName}</strong>
        <br>
        <div class="bg-secondary text-white my-2">
        <span class="mx-2 "> ${val.message} </span> <a href="#" class="text-decoration-none"> <i class="fa-solid fa-pen-to-square mx-3"></i> </a>
        <a href="#" class="text-decoration-none" onclick="alert(${val.message})"> <i class="fa-solid fa-trash"></i> </a>  Comments
        </div>

        <small>Posted ${" "+val.publishDate}</small>
        </div>

        `
        $('#comments').append(results);
    });
});
