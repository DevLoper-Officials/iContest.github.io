let image = ['1.jpg', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png', '23.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png', '30.png', '31.png', '32.png', '33.png', '34.png', '35.png', '36.png', '37.png', '38.png', '39.png', '40.png', '41.png', '42.png', '43.png', '44.png', '45.png', '46.png', '47.png', '48.png', '49.png', '50.png', '51.png'];

let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
    return v.json()
}).then((contests) => {
    iHtml = ""
    for (item in contests) {
        iHtml += `
   
                <div class="card mx-2 my-2" style="width: 22rem;">
                                <img src="img/${image[item]}" class="card-img-top" alt="">
                                <div class="card-body">
                                        <h5 class="card-title text-center">${contests[item].name}</h5>
                                        <p class="card-text text-center"> Status is ${contests[item].status} and site is ${contests[item].site}</p>
                                        <p class="card-text text-center"> In 24 Hours? ${contests[item].in_24_hours} </p>
                                        <p class="text-center">Starts at: ${contests[item].start_time}
                                        <p class="text-center">Starts at: ${contests[item].end_time}
                                        <a href="${contests[item].url}" target="_blank" class="btn btn-primary my-4">Visit Contest</a>
                                </div>
                        </div>
              
    `
    }
    cardContainer.innerHTML = iHtml
})








