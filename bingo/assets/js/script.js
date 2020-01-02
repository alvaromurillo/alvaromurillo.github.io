 $(document).ready(function() {
 	var card = "061900300000637400090021000051007983000025384700680088";
 	init();
	
	function init(){
		fillCard("061900300000637400090021000051007983000025384700680088");
	}

	function fillCard(card) {
		var numbers = card.match(/.{1,2}/g);

		for(var i = 0; i < 27; i++) {
			var cellNumber = parseInt(numbers[i], 0);
			if (cellNumber == 0) {
				$('#cell'+i).addClass("empty");
			} else {
				$('#cell'+i).html(cellNumber);
			}
		}
	}

	$('td').click(function() {
		if (!this.classList.contains("empty")) {
			if (this.classList.contains("selected")) {
				this.classList.remove("selected");
			} else {
				this.classList.add("selected");
			}
		}		
	 });
 });