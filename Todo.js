//А: Статусы нужно вынести в константы
//const toDoStatus = "To Do"; ...
//A: Пространство имен
const STATUS = {
	TO_DO: "To Do",
	DONE: "Done",
	IN_PROGRESS: "In Progress"
}
// default status
const DEFAULT_STATUS = STATUS.TO_DO;

const PRIORITY = {
	LOW: "low",
	HIGH: "high"
}

const DEFAULT_PRIORITY = PRIORITY.LOW;

const list = [
	{ name: "create a new practice task", status: STATUS.IN_PROGRESS, priority: PRIORITY.LOW },
	{ name: "make a bed", status: STATUS.DONE, priority: PRIORITY.HIGH },
	{ name: "write a post", status: STATUS.TO_DO, priority: PRIORITY.HIGH },
]

function changeStatus(task, status) {
	for (const item of list) {
		if (task === item.name) {
			item.status = status;
		}
	}
}


function addTask(task) {
	list.push({ name: task, status: DEFAULT_STATUS, priority: DEFAULT_PRIORITY });
}

function deleteTask(task) {
	list.forEach((item, index, arr) => {
		if (item.name === task) {
			arr.splice(index, 1);
		}
	});
}

// function showList() {
// 	let toDo = STATUS.TO_DO + ":\n";
// 	let inProgress = STATUS.IN_PROGRESS + ":\n";
// 	let done = STATUS.DONE + ":\n";
// 	for (const item of list) {
// 		if (item.status === STATUS.TO_DO) {
// 			toDo += " " + item.name + "\n";
// 		}
// 		else if (item.status === STATUS.IN_PROGRESS) {
// 			inProgress += " " + item.name + "\n";
// 		}
// 		else if (item.status === STATUS.DONE) {
// 			done += " " + item.name + "\n";
// 		}
// 	}
// 	console.log(toDo + inProgress + done);
// }

function showBy(priority) {
	switch (priority.trim().toLowerCase()) {
		case "priority":
			let low = PRIORITY.LOW + ":\n";
			let high = PRIORITY.HIGH + ":\n";
			list.forEach(item => {
				if (item.priority === PRIORITY.LOW) {
					low += " " + item.name + "\n";
				}
				else if (item.priority === PRIORITY.HIGH) {
					high += " " + item.name + "\n";
				}
			});
			console.log(low + high);
			break;
		case "status":
			let toDo = STATUS.TO_DO + ":\n";
			let inProgress = STATUS.IN_PROGRESS + ":\n";
			let done = STATUS.DONE + ":\n";
			list.forEach(item => {
				if (item.status === STATUS.TO_DO) {
					toDo += " " + item.name + "\n";
				}
				else if (item.status === STATUS.IN_PROGRESS) {
					inProgress += " " + item.name + "\n";
				}
				else if (item.status === STATUS.DONE) {
					done += " " + item.name + "\n";
				}
			});
			console.log(toDo + inProgress + done);
			break;
		default:
			console.log("wrong argument");
			break;
	}
}

changeStatus("write a post", "Done");
addTask('watch TV')
addTask('have a walk');
deleteTask('have a walk');
showBy("priority ");
showBy("Status");