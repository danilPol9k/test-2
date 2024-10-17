const openBtn = document.querySelector('.offer__btn')
const modaleBlock = document.querySelector('.modale-block')
const modaleClose = document.querySelector('.modale__close')
const filter = document.querySelector('.filter')
const form = document.getElementById('registrationForm')
const nameInput = document.getElementById('name')
const websiteInput = document.getElementById('website')
const phoneInput = document.getElementById('phone')
const consentInput = document.getElementById('consent')
const submitBtn = document.getElementById('submitBtn')

//////// открытие и закрытие формы

openBtn.addEventListener('click', function () {
    if (modaleBlock.style.display === 'none' || modaleBlock.style.display === '') {
        modaleBlock.style.display = 'block'
        filter.style.display = 'block'
        filter.classList.add('blurred')
    }
})


modaleClose.addEventListener('click', () => {
    closeForm()
})



///////// форма обратной связи


phoneInput.addEventListener('focus', function () {
    if (!this.value) {
        this.value = '+7 (___) ___-____'
    }
})


phoneInput.addEventListener('input', function () {

    this.value = this.value.replace(/[^+\d]/g, '')

    if (!this.value.startsWith('+7')) {
        this.value = '+7' + this.value.replace(/^\+/, '')
    }

    if (this.value.length > 12) {
        this.value = this.value.slice(0, 12)
    }

    const isValidPhone = /^\+7\d{10}$/.test(this.value)

    if (!isValidPhone) {
        this.setCustomValidity("Номер телефона должен начинаться с +7 и содержать 11 цифр.")
    } else {
        this.setCustomValidity("")
    }

    checkFormValidity()
})

phoneInput.addEventListener('change', function () {
    if (/^\+7\s*\(\d{3}\)\s*\d{3}-\d{4}$/.test(this.value)) {
        this.value = this.value.replace(/_/g, '')
    }

    if (!this.value.startsWith('+7')) {
        this.value = '+7' + this.value.replace(/^\+/, '')
    }
})

document.getElementById('registrationForm').addEventListener('input', function () {
    checkFormValidity()
})

function checkFormValidity() {
    const name = nameInput.value.trim()
    const website = websiteInput.value.trim()
    const phone = phoneInput.value.trim()
    const consent = consentInput.checked

    if (name && website && phone && consent) {
        submitBtn.classList.add('active')
        submitBtn.disabled = false
    } else {
        submitBtn.classList.remove('active')
        submitBtn.disabled = true
    }
}

function closeForm() {
    modaleBlock.style.display = 'none'
    filter.style.display = 'none'
    filter.classList.remove('blurred')
    clearForm()
}

function clearForm() {
    phoneInput.value = ''
    nameInput.value = ''
    websiteInput.value = ''
    consentInput.checked = false
}