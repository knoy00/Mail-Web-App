const mailNumber = document.getElementById("mail-number")
const mail = document.getElementsByClassName("main-mail")
const social = document.getElementsByClassName("social")[0]
const primary = document.getElementsByClassName("primary")[0]
const promotion = document.getElementsByClassName("promotion")[0]
const important = document.getElementsByClassName("important")[0]
const inbox = document.getElementsByClassName("inbox")[0]
const sent = document.getElementsByClassName("sent")[0]
const favorite = document.getElementsByClassName("favorite")[0]
const spam = document.getElementsByClassName("spam")[0]
const drafts = document.getElementsByClassName("drafts")[0]
const more = document.getElementsByClassName("more")[0]


mailNumber.textContent = mail.length


function handleButtonClick(clickedElement) {
    const elements = [social, primary, promotion, important];

    elements.forEach(element => {
        if (element === clickedElement) {
            element.classList.add("primary");
        } else {
            element.classList.remove("primary");
        }
    });
}

social.addEventListener("click", () => handleButtonClick(social));
primary.addEventListener("click", () => handleButtonClick(primary));
promotion.addEventListener("click", () => handleButtonClick(promotion));
important.addEventListener("click", () => handleButtonClick(important));


document.addEventListener("DOMContentLoaded", function() {
    const list = [inbox, sent, favorite, spam, drafts, more]
    const mainNav = document.getElementsByClassName("main-nav")[0]
    const mainMail = document.getElementsByClassName("main-mail")
    const sentMail = document.getElementsByClassName("sent-mail")

    function handleClick(clicked){
    list.forEach(X => {
        if(X === clicked){
            X.classList.add("background")
        } else {
            X.classList.remove("background")

        }
    })

    for(const mainMails of mainMail){
        if(mainMails.classList.contains("main-mail")){
            mainMails.style.display = "none"
        } else {
            mainMails.style.display = "block"
        }
    }

    for (const sentMails of sentMail) {
        if (sentMails.classList.contains("sent-mail")) {
            sentMails.style.display = "flex";
        }
    }
}

inbox.addEventListener("click", () => handleClick(inbox))
sent.addEventListener("click", () => handleClick(sent))
favorite.addEventListener("click", () => handleClick(favorite))
spam.addEventListener("click", () => handleClick(spam))
drafts.addEventListener("click", () => handleClick(drafts))
more.addEventListener("click", () => handleClick(more))
});


const alertObject = [{
    message: "IntelliSearch™ Alert found 109 new jobs, based on your profile",
    time: "2:06",
    title: "LinkedIn"
},
{
    message: "IntelliSearch™ Alert found 109 new jobs, based on your profile",
    time: "2:56",
    title: "GitHub"
},
{
    message: "You have 22  friend requests and 4 new messages. Login to ...",
    time: "2:56",
    title: "Facebook"
},
{
    message: "IntelliSearch™ Alert found 109 new jobs, based on your profile",
    time: "2:56",
    title: "GitHub"
},
{
    message: "IntelliSearch™ Alert found 109 new jobs, based on your profile",
    time: "2:56",
    title: "GitHub"
},
{
    message: "Discover and create memories you can show the world.",
    time: "2:56",
    title: "Tiktok"
}
]
;


function appendValuesToHTML() {
    const outputContainer = document.getElementById("output-container");

    
    for (let i = 0; i < alertObject.length; i++) {
    
        const sentMailElement = document.createElement("div");
        sentMailElement.classList.add("sent-mail");

      
        const mainTitle = document.createElement("div");
        mainTitle.classList.add("main-title");
        mainTitle.innerHTML = `
            <input type="checkbox">
            <i class="fa-regular fa-star"></i>
            <h3>${alertObject[i].title}</h3>
        `;

        const mailContent = document.createElement("h3");
        mailContent.classList.add("mail-content");
        mailContent.textContent = alertObject[i].message;

        const timeElement = document.createElement("h3");
        timeElement.textContent = alertObject[i].time;


        sentMailElement.appendChild(mainTitle);
        sentMailElement.appendChild(mailContent);
        sentMailElement.appendChild(timeElement);

        outputContainer.appendChild(sentMailElement);
    }
}


appendValuesToHTML();


favorite.addEventListener("click", () => {
    // outputContainer.style.display = "block"
    // mainMail.style.display = "none"
    // sentMail.style.display = "none"
    console.log("heelo")

})


const starIcons = document.querySelectorAll(".starIcon");

starIcons.forEach((starIcon) => {
    starIcon.addEventListener("click", function() {
        // Toggle between regular and solid styles
        starIcon.classList.toggle("fa-regular");
        starIcon.classList.toggle("fa-solid");
    
        // Toggle color
        if (starIcon.classList.contains("fa-solid")) {
          starIcon.style.color = "#1aff53";
        } else {
          starIcon.style.color = "black";
        }
    })
 
  });

const compose = document.getElementsByClassName("compose")[0]

compose.addEventListener("click", () =>{
    
})