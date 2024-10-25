




const observer = new IntersectionObserver((e) => {
    e.forEach((f) => {
        if (f.isIntersecting) {
            f.target.classList.add("showDev")
        } else {
            f.target.classList.remove('showDev')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hiddenDevLeft,.hiddenDevRight,.hiddenDevTop,.hiddenDevButton')

hiddenElements.forEach((e) => observer.observe(e))


const btnLang = document.querySelector('.btnLang')
const lang = document.querySelector('.lang')
const chevron = document.querySelector('.chevron')
btnLang.addEventListener("click", () => {
    lang.classList.toggle("hideLang")
    if (!lang.classList.contains('hideLang')) {
        chevron.classList.add('scaleL')
    } else {
        chevron.classList.remove('scaleL')
    }
});
document.addEventListener("click", (e) => {
    console.log(e.target)
    if (!lang.contains(e.target) && e.target !== btnLang) {
        lang.classList.add("hideLang")
    }
    if (!lang.classList.contains('hideLang')) {
        chevron.classList.add('scaleL')
    } else {
        chevron.classList.remove('scaleL')
    }
})


const menuIcon = document.querySelector('.menuIcon')
const xIcon = document.querySelector('.xIcon')
const menu = document.querySelector('.menu')
const body = document.querySelector('.body')

menuIcon.addEventListener("click", () => {
    menu.classList.remove('hideLang')
    xIcon.classList.add("show")
    body.classList.add('overflowBody')
    menuIcon.classList.add("hide")
});
xIcon.addEventListener("click", () => {
    menu.classList.add('hideLang')
    body.classList.remove('overflowBody')
    menuIcon.classList.remove("hide")
    xIcon.classList.remove("show")
});