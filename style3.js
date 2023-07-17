const ownerName = document.querySelector('#owner-name')
const ownerNameShow = document.querySelector('#owner-name-show')

const bankName = document.querySelector('#bank-name')
const bankNameShow = document.querySelector('#bank-name-show')

const cardNo = document.querySelector('#card-no')
const cardNoShow = document.querySelector('#card-no-show')

const cardExpire = document.querySelector('#card-expire')
const cardExpireShow = document.querySelector('#card-expire-show')

const cvcCode = document.querySelector('#cvc-code')
const cvcCodeShow = document.querySelector('#cvc-code-show')

ownerName.addEventListener('input', (e) => {2
  ownerNameShow.textContent = e.target.value
})

bankName.addEventListener('input', (e) => {
  bankNameShow.textContent = e.target.value
})

cardNo.addEventListener('input', (e) => {
  var format = e.target.value.trim().split("").map((data, index) => {
    if ((index + 1) % 4 == 0) {
      data = data + " "
    }
    return data
  })
  cardNoShow.textContent = format.join("")
})

cardExpire.addEventListener('input', (e) => {
  var format = e.target.value.trim().split("").map((data, index) => {
    if ((index + 1) % 2 == 0 && index + 1 !== 4) {
      data = data + "/"
    }
    return data
  })
  cardExpireShow.textContent = format.join("")
})

cvcCode.addEventListener('input', (e) => {
  cvcCodeShow.textContent = e.target.value
})

