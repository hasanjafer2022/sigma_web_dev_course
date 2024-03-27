function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function
    let viewStr
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M"
    }
    else {
        viewStr = views / 1000 + "K"
    }

    let html = ` <div class="card">
        <div class="image">
            <img src="${thumbnail}" alt="">
<div class="capsule">${duration}</div>
</div>
<div class="text">
    <h1>${title}</h1>
    <p>${cName} . ${viewStr} views . ${monthsOld }months ago</p>
</div>
</div>`

document.querySelector(".container").insertAdjacentHTML('beforeend', html);
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "http://127.0.0.1:5500/sigma_web_dev_course/video-77/s1.png")
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 5600000, 4, "21:22", "http://127.0.0.1:5500/sigma_web_dev_course/video-77/s1.png")
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 56, 8, "25:52", "http://127.0.0.1:5500/sigma_web_dev_course/video-77/s1.png")