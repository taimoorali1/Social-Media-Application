console.log("User JS JS File");
let userTagUrl="https://dummyapi.io/data/v1/tag?limit=10";

// Show the User List 

fetch(userTagUrl , request_info = {
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
        <a href="#" class="text-decoration-none text-white rounded-2 bg-primary">
        
        #${val}</a>
        `
        $('#tag_items').append(results);
    });
});

