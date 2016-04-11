var clickEnterButton = (e) => {
	if(e.which == 13 || e.keyCode == 13) {
		document.getElementById('add-task').click();
	}
};

$('.datepicker').pickadate({
	selectMonths: true,
	selectYears: 15,
	format: 'dd/mm/yyyy',
	onSet: function (ele) {
	   if(ele.select){
	        this.close();
	   }
	}
});

document.getElementById('task-name').addEventListener('keypress', clickEnterButton);
document.getElementById('task-description').addEventListener('keypress', clickEnterButton);
