document.addEventListener("DOMContentLoaded", function() {

    const addButton = document.getElementById('add');
    addButton.addEventListener('click', Add);

    function Add() {
        //入力値の取得
        var task = document.getElementById('input');
        //表示する場所の取得
        var todo = document.getElementById('todo');

        // delボタンを作成
        var delButton = document.createElement('input');
        delButton.type = 'button';
        delButton.value = '削除';
        delButton.addEventListener('click', () => Del(delButton));

        //li要素の生成
        //<li></li>
        const listItem = document.createElement('li');

        //li要素に入力値を代入
        //<li>aa</li>
        listItem.innerText = task.value;

        listItem.append(delButton)

        //表示する場所の子要素に追加
        //<ul>
        //  <li>aaa</li> <input />
        //</ul >
        todo.appendChild(listItem)
    }

    function Del(delButton) {
        //<li>
        //  <input>
        //</li>
        //pearent = li
        var pearent = delButton.parentNode;
        pearent.remove()
    }

}, false)