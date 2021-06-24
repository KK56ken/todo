window.onload = function(){
    document.getElementById("addText").onclick = addText;

    function removeText(){
        var removeTarget = document.getElementById(this.parentNode.id);
        removeTarget.remove();
    }

    var cnt = 1;

    function addText(){
        // 入力されたテキストを取得
        var inputText = document.getElementById("todoText");
        var text = inputText.value;
        
        // li要素を作成
        var newElementLi = document.createElement("li");
        var newContentLi = document.createTextNode(text);
        newElementLi.appendChild(newContentLi);
        newElementLi.setAttribute("id", "li_" + cnt);

        // input要素を作成
        var newElementInput = document.createElement("input");
        newElementInput.onclick = removeText;
        newElementInput.setAttribute("type", "button");
        newElementInput.setAttribute("value", "削 除");

        newElementLi.appendChild(newElementInput);

        var todo = document.getElementById("todo");

        todo.appendChild(newElementLi);

        cnt++;
    }

}