let c = e => {
  console.log(e)
}
let getS = document.querySelector.bind(document)
//Capturando los hijos
let li = getS('li')

/* for (let i = 0; i < li.length; i++) {
  li[i].addEventListener('click', ()=>{
    console.log(li[i].textContent)
  })
} */

console.log('-----')

/* for (let i of li) {
  i.addEventListener('click', ()=>{
    console.log(i.textContent)
  })
} */

console.log('-----')

/* li.forEach(function(e){
    e.addEventListener('click', ()=>{
      console.log(e.textContent)
    })
}) */

//capturando el padre
let ul = getS('.items')

/* ul.addEventListener('click',(e)=>{
  let element = e.target
  if (element.tagName === 'LI') {
    console.log(element.textContent)
  }
}) */

let follow = getS('.follow')

follow.addEventListener('click', e => {
  let ele = e.target
  if (ele.textContent == `Follow`) {
    ele.textContent = 'Following'
  } else {
    ele.textContent = 'Follow'
  }
})

//parentNode -> selecciona el elemento padre
//nextElementSibling -> selecciona el elemento siguiente en el dom
//firstElementChild -> selecciona el primer elemento hijo del dom
//setAttribute -> cambia atributos en una etiqueta

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