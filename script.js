const mailNumber = document.getElementById("mail-number")
const mail = document.getElementsByClassName("main-mail")
const social = document.getElementsByClassName("social")[0]
const primary = document.getElementsByClassName("primary")[0]
const promotion = document.getElementsByClassName("promotion")[0]
const important = document.getElementsByClassName("important")[0]

mailNumber.textContent = mail.length

social.addEventListener("click", () => {
    social.classList.add("primary")
    primary.classList.remove("primary")
    promotion.classList.remove("primary")
    important.classList.remove("primary")
})

primary.addEventListener("click", () => {
    primary.classList.add("primary")
    social.classList.remove("primary")
    promotion.classList.remove("primary")
    important.classList.remove("primary")
})

promotion.addEventListener("click", () => {
    promotion.classList.add("primary")
    social.classList.remove("primary")
    primary.classList.remove("primary")
    important.classList.remove("primary")
})

important.addEventListener("click", () => {
    important.classList.add("primary")
    social.classList.remove("primary")
    primary.classList.remove("primary")
    promotion.classList.remove("primary")
})

