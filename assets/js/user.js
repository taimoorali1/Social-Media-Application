console.log("User list JS File");
// let url="https://dummyapi.io/data/v1/user?limit=10";
// fetch(url).then((response)=>{
//     return response.json(); here give json is not a function
// }).then((data)=>{
//     console.log(data);
// })
// console.log(typeof user); // type of api
// console.log(Object.keys(user)); // know the keys of object
// console.log(user.data); // know the values in data
// console.log(user.data.length); // know the length in data


let userListUrl = "https://dummyapi.io/data/v1/user?limit=10";

// Show the User List 

fetch(userListUrl, request_info = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'app-id': '637a73db0429c829a36759d0'
    },
    }).then(response => response.json())
    .then(res => {
    data = res.data;
    //  console.log(data);     // Show the Fetch data in console

    data.map((val) => {
        // console.log(val.firstName);                      // Show the values of Fetched Data in console
        var tem = `<div class="list-group border border-0">
        <button type="button"
            class="list-group-item list-group-item-action border border-0 ps-2 px-0 mt-1 d-flex align-items-center">
            <img src="${val.picture}" class="rounded-circle" alt="no image"
                width="20%">
            <span class="h6 mb-0 ms-3" id="demo">${val.firstName +" "+ val.lastName}</span>
        </button>
         </div>`
        $('#list').append(tem);         
    });
});



// Show the Tag list 

// fetch(tagList, request_info = {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'app-id': APP_TOKEN
//     },
// }).then(tagResponse => tagResponse.json()).then(tagRes => {
//     data = tagRes.data;
//     console.log(data);

//     data.map((val) => {
         
//     });
// });
