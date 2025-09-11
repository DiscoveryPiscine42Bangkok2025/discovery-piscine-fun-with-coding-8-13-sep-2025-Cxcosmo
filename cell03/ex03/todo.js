const list = document.getElementById("ft_list");

window.onload = () => {
    const saved = getCookie("todos");
    if (saved) {
        const todos = JSON.parse(saved);
        todos.forEach(task => addTodo(task, false));
    }
};

function newTodo() {
    const task = prompt("Enter a new TO DO:");
    if (task && task.trim() !== "") {
        addTodo(task.trim(), true);
    }
}

function addTodo(text, save) {
    const div = document.createElement("div");
    div.textContent = text;

    div.onclick = () => {
      if (confirm("Do you want to remove this TO DO?")) {
            div.remove();
            saveTodos();
      }
    };

    list.prepend(div);

    if (save) saveTodos();
}

function saveTodos() {
    const todos = [];
    document.querySelectorAll("#ft_list div").forEach(d => {
        todos.push(d.textContent);
    });
    setCookie("todos", JSON.stringify(todos), 7); // keep 7 days
}

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    const expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cname = name + "=";
    const decoded = decodeURIComponent(document.cookie);
    const ca = decoded.split(';');
    for(let c of ca) {
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(cname) === 0) return c.substring(cname.length, c.length);
    }

    return "";
}