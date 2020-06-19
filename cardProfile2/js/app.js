let getS = document.querySelector.bind(document)
let follow = getS('.follow')

follow.addEventListener('click', e => {
  let ele = e.target,
      sms = ''
  if (ele.textContent == `Follow`) {
    sms = 'Following'
  } else {
    sms = 'Follow'
  }
  ele.textContent = sms
})

let inputFile = getS('.file')

inputFile.addEventListener('change', this.uploadImage)

function uploadImage(e) {
  let fileInput = e.target,
    uploadBtn = fileInput.parentNode,
    otherPhoto = fileInput.previousElementSibling,
    changedPhoto = fileInput.nextElementSibling.lastElementChild,
    deleteBtn = uploadBtn.lastElementChild,
    reader = new FileReader();

  reader.addEventListener('load', function (e) {
    let imgRuta = e.target.result
    changedPhoto.setAttribute('src', `${imgRuta}`)
    changedPhoto.style.cursor = 'default'
    fileInput.setAttribute('disabled', 'disabled')
    deleteBtn.classList.add('view', 'move')
    otherPhoto.classList.add('hidden')
  })

  reader.readAsDataURL(e.target.files[0])

  deleteBtn.addEventListener('click', function () {
    changedPhoto.setAttribute('src', 'img/photoDefault.png')
    this.classList.remove('view', 'move')
    setTimeout(() => {
      otherPhoto.classList.remove('hidden')
      fileInput.removeAttribute('disabled', 'disabled')
    }, 500)
  })
}

let animate = (selector,time)=>{
  let element = document.querySelectorAll(selector),
      count = 0
  
  element.forEach(e=>{
    e.classList.add('state')
    e.style.animationDelay = `${count}s`
    count += 0.2
  })

  setTimeout(()=>{
    element.forEach(e=>{
      e.classList.add('move')
    })
  }, time)
}

animate('.photo', 500)
animate('.info > *', 1000)
animate('.buttons button', 1500)
animate('.items li', 2000)