function FormValidator() {
	
	this.DOMElements = null;
	this.objTemplatel
	this.arrPassw = [];
	this.row;
	this.count = 0;

	var that = this;
	
	function showErrorMsg() {
		this.DOMElements.msgError.classList.remove('scale-down');
		this.DOMElements.msgError.classList.add('show');
		this.DOMElements.msgError.classList.add('scale-up');
	}

	function cleanInputs() {
		this.DOMElements.name.value = '';
		this.DOMElements.email.value = '';
		this.DOMElements.password.value = '';
	}

	function hideErrorMsg() {
		this.DOMElements.msgError.classList.remove('scale-up');
		this.DOMElements.msgError.classList.add('scale-down');

		setTimeout(function() {
			that.DOMElements.msgError.classList.remove('show');
		}, 1000);
	}
	
	function showSuccessMsg() {
		this.DOMElements.msgSucces.classList.remove('scale-down');
		this.DOMElements.msgSucces.classList.add('show');
		this.DOMElements.msgSucces.classList.add('scale-up');
	}

	function hideSuccessMsg() {
		this.DOMElements.msgSucces.classList.remove('scale-up');
		this.DOMElements.msgSucces.classList.add('scale-down');

		setTimeout(function() {
			that.DOMElements.msgSucces.classList.remove('show');
		}, 1000);
	}

	function showTable(table) {
		table.classList.remove('scale-down');
		table.classList.add('scale-up');
	}

	function hideTable(table) {
		table.classList.remove('scale-up');
		table.classList.add('scale-down');
	}

	function validate() {
		if(this.DOMElements.name.value 
			&& verifyEmail(this.DOMElements.email.value) 
			&& this.DOMElements.password.value) {	
				hideErrorMsg.call(this);
				showSuccessMsg.call(this);
				hideTable.call(this, this.DOMElements.inputBlock);
				showTable.call(this, this.DOMElements.resultBlock);
				addNewTableLine.call(this);
			
		} else {
			showErrorMsg.call(this);
		}
	}

    function resetHandler() {
        cleanInputs.call(this);
        hideSuccessMsg.call(this);
        hideTable.call(this, this.DOMElements.resultBlock);
        showTable.call(this, this.DOMElements.inputBlock);
    }
	
	function initListeners() {
		this.DOMElements.submitBtn.addEventListener("click", validate.bind(this));
		this.DOMElements.resetBtn.addEventListener('click', resetHandler.bind(this));
		this.DOMElements.tableContent.addEventListener("click", convertPassw.bind(this));
	}

    this.setFormData = function(form){	
        this.DOMElements = form;
    };

    this.initValidator = function(){	
        initListeners.call(this);
    };
}

var formValidator = new FormValidator();

formValidator.setFormData({
	name: document.querySelector("#inputName"),
	email: document.querySelector("#inputEmail"),
	password: document.querySelector("#inputPassword"),
	tableContent: document.querySelector("#table-content"),
	inputBlock: document.querySelector("#input_block"),
	resultBlock: document.querySelector("#result_block"),
	msgError: document.querySelector("#msg-danger"),
	msgSucces: document.querySelector("#msg-success"),
	submitBtn: document.querySelector("#submit"),
	resetBtn: document.querySelector("#reset")
});

formValidator.initValidator();