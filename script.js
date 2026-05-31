function add()
{
    let task=document.getElementById("task").value;
    if(task=="") return;

    let li=document.createElement("li");

    let container=document.createElement("div");
    container.className="task-content";

    let check=document.createElement("input");
    check.type="checkbox";

    let text=document.createElement("span");
    text.innerText=task;

    check.onchange=function()
    {   text.classList.toggle("done");   }

    container.appendChild(check);
    container.appendChild(text);

    let del=document.createElement("button");
    del.innerText="Delete";

    del.onclick=function()
    {   li.remove();    }

    li.appendChild(container);
    li.appendChild(del);

    document.getElementById("list").appendChild(li);
    document.getElementById("task").value="";
}