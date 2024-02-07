
window.addEventListener('DOMContentLoaded', () => {
    const tabsParent = document.querySelector('.tabheader__items')
    let tabs = document.querySelectorAll('.tabheader__item')
    let tabsContent = document.querySelectorAll('.tabcontent')
    loader = document.querySelector('.loader')


    setTimeout(() => {
        loader.style.opacity = '0'
        setTimeout(() => {
            loader.style.display = 'none'
        }, 500)
    }, 2000)

    // tab
    function hideTabsContent() {
        tabsContent.forEach((item) => {
            item.classList.add('hide')
            item.classList.remove('show')
        })
        tabs.forEach((item) => {
            item.classList.remove('tabheader__item_active')
        })
    }
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show')
        tabsContent[i].classList.remove('hide')
        tabs[i].classList.add('tabheader__item_active')
    }
    hideTabsContent()
    showTabContent()
    tabsParent.addEventListener('click', (e) => {
        const target = e.target
        if (target && target.classList.contains('tabheader__item')) {

            tabs.forEach((item, indx) => {
                if (target == item) {
                    hideTabsContent()
                    showTabContent(indx)
                }

            })

        }
    })

    // Timer
    const deadline = '2024-02-10'

    function getTimeRemaining(endtime) {
        const timer = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(timer / (1000 * 60 * 60 * 24))
        hours = Math.floor((timer / (1000 * 60 * 60)) % 24)
        minutes = Math.floor((timer / (1000 * 60)) % 60)
        seconds = Math.floor(timer / (1000) % 60)

        return { timer, days, hours, minutes, seconds }
    }
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num
        }
    }


    function setClock(selector, endtime) {
        let days, hours, minutes, seconds
        const timer = document.querySelector(selector)

        if (timer <= 0) {
            days = 0
            hours = 0
            minutes = 0
            seconds = 0
        } else {

            days = timer.querySelector('#days')
            hours = timer.querySelector('#hours')
            minutes = timer.querySelector('#minutes')
            seconds = timer.querySelector('#seconds')
            timeInterval = setInterval(updatClock, 1000)

        }

        updatClock()
        function updatClock() {
            const t = getTimeRemaining(endtime)

            days.innerHTML = getZero(t.days)
            hours.innerHTML = getZero(t.hours)
            minutes.innerHTML = getZero(t.minutes)
            seconds.innerHTML = getZero(t.seconds)


            if (t.timer <= 0) {
                clearInterval(timeInterval)
            }
        }
    }
    setClock('.timer', deadline)

    // Modal
})


const modalTrigger = document.querySelectorAll('[data-modal]')
modal = document.querySelector('.modal')
modalCloseBtn = document.querySelector('[data-close]')

modalTrigger.forEach(item => {
    item.addEventListener('click', () => {
        modal.classList.toggle('show')
        document.body.style.overflow = 'hidden'
    })
})
// modalTrigger.addEventListener('click', () => {
//     modal.classList.toggle('show')
//     document.body.style.overflow = 'hidden'
// })

function closeModal() {
    modal.classList.toggle('show')
    document.body.style.overflow = ''
}

modalCloseBtn.addEventListener('click', closeModal)

modal.addEventListener('click', (e) => {
    if (e.target == modal) {
        closeModal()
    }
})
document.addEventListener('keydown', (e) => {
    if (e.code == 'Escape' && modal.classList.contains('show')) {
        closeModal()
    }
})

// Class
class MenuCard {
    constructor(src, alt, title, desor, price, perentSelector, ...classes) {
        this.src = src
        this.alt = alt
        this.title = title
        this.desor = desor
        this.price = price
        this.classes = classes
        this.parent = document.querySelector(perentSelector)
        this.transfer = 12400
        this.chageToUZS()
    }
    chageToUZS() {
        this.price = this.price = this.transfer
    }

    render() {
        const element = document.createElement('div')
        if (this.classes.length == 0) {
            this.element = 'menu__item'
            element.classList.add(this.element)
        } else {
            this.classes.forEach((classname) => element.add(classname))
        }

        element.innerHTML = `
        
        <img src=${this.src} alt=${this.alt} />
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">
         ${this.desor}
        </div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Price:</div>
          <div class="menu__item-total"><span>${this.price}</span>uzs/ month</div>
        </div>
      </div>
        
        `
        this.parent.append(element)
    }
}
new MenuCard(
    'img/tabs/2.jp',
    "elite",
    'Plan “Premium”',
    '           Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquid molestiae, sit eveniet, temporaipsum quaerat recusandae sapiente doloremque corporis dolores quas consectetur ut labore distinctio libero reiciendis harum sequi?',
    "10",
    '.menu .container',
    "menu__item"
).render()

new MenuCard(
    'img/tabs/2.jp',
    "elite",
    'Plan “Premium”',
    '           Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquid molestiae, sit eveniet, temporaipsum quaerat recusandae sapiente doloremque corporis dolores quas consectetur ut labore distinctio libero reiciendis harum sequi?',
    "10",
    '.menu .container',
    "menu__item"
).render()


new MenuCard(
    'img/tabs/2.jp',
    "elite",
    'Plan “Premium”',
    '           Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquid molestiae, sit eveniet, temporaipsum quaerat recusandae sapiente doloremque corporis dolores quas consectetur ut labore distinctio libero reiciendis harum sequi?',
    "10",
    '.menu .container',
    "menu__item"
).render()

const slides = document.querySelectorAll('.offer__slide')
next = document.querySelector('.offer__slider-next')
prev = document.querySelector('.offer__slider-prav')

let slideIndex = 1

showSlides(slideIndex)

function showSlides(ind) {
    if (ind > slides.length) {
        slideIndex = 1
    }
    if (ind < 1) {
        slideIndex = slides.length
    }
    slides.forEach(item => item.style.display = 'none')
    slides[slideIndex - 1].style.display = 'blok'
}

function playSlides(ind) {
    showSlides(slideIndex += ind)
}
next.addEventListener('click', () => {
    playSlides(1)
})
prev.addEventListener('click', () => {
    playSlides(-1)
})