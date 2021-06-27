const xhr = new XMLHttpRequest();
xhr.open('GET', `https://www.googleapis.com/calendar/v3/calendars/en.indian%23holiday%40group.v.calendar.google.com/events?key=AIzaSyBk6w21sK2-WBnmwhyM9xJ9Dp77Z0yQC7I`, true);

let info = document.getElementById('info');

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        console.log(json);
        // let articles = json.articles;
        // console.log(articles);    
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()


