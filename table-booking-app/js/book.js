function BookNow(guestName,guestEmail,guestPax) {
    let url = 'https://api.sheety.co/7b082e81fa04098c0e0bfe8408decc01/bookingApp/bookings';
    let body = {
        booking: {
            name: guestName,
            email: guestEmail,
            pax: guestPax
        }
    } 
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "Content-Type":"application/json"
    }
  })
    .then((response) => response.json())
    .then(json => {
    // Do something with object
        console.log(json.booking);
        document.getElementById("bookMsg").innerHTML = json.booking.name + " sucessfully added!";
        GetBookings();
  });
}

window.addEventListener("load", function() {

    document.getElementById("bookNow").addEventListener("click", function(){
        let name = document.getElementById("guestName");
        let email = document.getElementById("guestEmail");
        let pax = document.getElementById("guestPax");
        let remarks = document.getElementById("guestRemarks");

        console.log(name + "," + email + "," + pax + "," + remarks);

    });

});