var clickEnterButton = (e) => {
	if(e.which == 13 || e.keyCode == 13) {
		document.getElementById('add-task').click();
	}
};

document.getElementById('task-name').addEventListener('keypress', clickEnterButton);
document.getElementById('task-description').addEventListener('keypress', clickEnterButton);