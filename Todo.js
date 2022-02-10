const list = {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
}

function changeStatus(task, status) {
	for (const key in list) {
		if (task === key) {
			list[key] = status;
			return;
		}
	}
	return;
}

function addTask(task) {
	list[task] = "To Do";
}

function deleteTask(task) {
	delete list[task];
}

function showList() {
	let toDo = "Todo:\n"
	let inProgress = "In Progress:\n"
	let done = "Done:\n"
	for (const key in list) {
		if (list[key] === "To Do") {
			toDo = toDo + " " + key + "\n";
		}
		else if (list[key] === "In Progress") {
			inProgress = inProgress + " " + key + "\n";
		}
		else if (list[key] === "Done") {
			done = done + " " + key + "\n";
		}
	}
	console.log(toDo + inProgress + done);
}


changeStatus("write a post", "Done");
addTask('watch TV')
addTask('have a walk');
deleteTask('have a walk');
showList();