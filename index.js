//const modals = document.querySelectorAll('.modal');
const projects = document.querySelectorAll('.project-item');
var modals = document.querySelectorAll(".modal");

projects.forEach(project => {
    project.addEventListener('mouseover', () => {
        project.childNodes[1].classList.add('img-darken');
    })

    project.addEventListener('mouseout', () => {
        project.childNodes[1].classList.remove('img-darken');
    }) 

    project.childNodes[3].addEventListener('click', () => {
        const modal = project.childNodes[5];
        const span = modal.querySelector('.modal > .modal-content > .close')
        modal.style.display = "block";
        span.onclick = function() {
            modal.style.display = "none";
        }
    })
})

window.onclick = function(event) {
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
          }
    })
  }
