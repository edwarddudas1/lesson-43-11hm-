const openModal = document.querySelector(".open-button");
console.log(openModal);
const modal = document.querySelector(".backdrop");
console.log(modal)
const closeModal = document.querySelector(".close-button");
console.log(closeModal)
openModal.addEventListener('click', function(){
    modal.classList.add('active');
    console.log('open modal')
})
closeModal.addEventListener('click', function(){
    modal.classList.remove('active');
})