
const drag = document.querySelectorAll('.drag1')

let dragitem = null
let secim = document.querySelectorAll('.secim')
let dropelementitem = null

let leaveelemnt = null
let dropelement = null
let over = null


let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
array.sort(() => Math.random() - 0.5);


for (let i = 0; i < secim.length; i++) {
  secim[i].appendChild(drag[array[i]]);
}

drag.forEach(item => {
  item.addEventListener('dragstart', dragstart)
  item.addEventListener('dragend', dragend)
})


function dragstart() {
  dragitem = this
  setTimeout(() => this.style.display = "none", 0)

  leaveelemnt = this.parentElement

}
function dragend() {
  setTimeout(() => this.style.display = "block", 0)

  dragitem = null

}
secim.forEach(item => {
  item.addEventListener('drop', drop)
  item.addEventListener('dragEnter', dragEnter)
  item.addEventListener('dragover', dragover)
  item.addEventListener('dragleave', dragleave)

})


function dragEnter(e) {
  e.preventDefault()

}
function dragleave() {

  over.classList.remove('over')
}



function drop() {

  dropelement = this
  dropelementitem = this.firstChild.nextElementSibling


  leaveelemnt.append(this.firstChild.nextElementSibling)
  this.append(dragitem)


  over.classList.remove('over')

}
function change() {

  secim.forEach(item => {
    if (item.firstChild.nextElementSibling.dataset.columns == item.dataset.parent) {
      item.classList.remove('false')

      item.classList.add('hey')


    } else {
      item.classList.add('false')
      item.classList.remove('hey')

    }
  })




}

function dragover(e) {
  e.preventDefault()
  over = this
  this.classList.add('over')



}



let ab = document.getElementById('div1')

function sam() {

  secim.forEach(item => {
    //
    console.log(item.style.order)
    console.log(ab.style.order)
  })
}





