
document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById('add');
    button.addEventListener('click', Add);

    function Add() {
        var task = document.getElementById('input');
        var todo = document.getElementById('todo');

        const listItem = document.createElement('li');

        listItem.innerText = task.value;

        todo.appendChild(listItem)

    }
},false)
