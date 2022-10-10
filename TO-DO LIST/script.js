const taskButton = document.querySelector('.task_btn')

let Location = ['select location', 'agege', 'costain', 'Baruwa'];

let place = '';

Location.forEach(function (local) {
    place += `<option> ${local} </option>`
})

document.querySelector('#taskLocation').innerHTML = place;

function taskperform() {
    let taskName = document.querySelector('.taskName').value
    let taskLocation = document.querySelector('#taskLocation').value
    let taskType = document.querySelector('#taskType').value
    let taskReason = document.querySelector('#textArea').value

    let error1 = document.querySelector('.error1').textContent = "Fill in the inputs!"
    let error2 = document.querySelector('.error2').textContent = 'Fill in the inputs!'
    let error3 = document.querySelector('.error3').textContent = 'Fill in the inputs!'
    let error4 = document.querySelector('.error4').textContent = 'Fill in the inputs!'

    let ul = document.querySelector('.ul');

    if (taskName=== " " || taskLocation === 'select location' || taskType=== 'Select a task' || taskReason ===" ") {
        error1 
        error2
        error3
        error4
    }else {
        let li = document.createElement('li');
        li.innerHTML = `<p> ${taskName} ${taskLocation} ${taskType} ${taskReason} </p>`
        ul.append(li)

        let delete_btn = document.createElement('delete_btn')
        delete_btn.className = 'delete_btn'
        delete_btn.innerHTML = `<button> delete </button>`
        li.appendChild(delete_btn)
        delete_btn.addEventListener('click', function() {
            ul.removeChild(li)
        })
    }
}


taskButton.addEventListener('click', taskperform)