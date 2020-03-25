 $(document).ready(function() {
 	init();
	
	function init(){
 		var numbers = generateCard();
		fillCard(numbers);
	}

	function generateCard() {		
		var cardNumbers = [];
		for (var i = 0; i < 5; i++) {
			var numbers = []
			for (var j = 0; j < 15; j++) {
				numbers.push(i * 15 + j + 1);
			}
			for (var k = 0; k < 5; k++) {
				var index = Math.floor(Math.random()*numbers.length);
				var number = numbers[index];
				cardNumbers.push(number);
				numbers.splice(index, 1);
			}
		}		
				
		return cardNumbers;
	}

	function fillCard(numbers) {
		var card = numbers.map(i => ("0" + i).slice(-2)).join("");
		for (var i = 0; i < 25; i++) {
			if (i == 12) {
				$('#cell'+i).addClass("qrCode");
				jQuery('#cell'+i).qrcode({ text: card, correctLevel: 0 });
				var canvas = $('canvas')[0];
				$('#cell'+i).css("background-image", 'url(' + canvas.toDataURL() + ')');
				canvas.remove();
			} else {
				$('#cell'+i).html(numbers[i]);
			}
		}
	}

	$('td').click(function() {
		if (!this.classList.contains("empty") && !this.classList.contains("qrCode")) {
			var toggle = this.style;
			toggle.backgroundColor = toggle.backgroundColor ? "" : "crimson";
			toggle.color = toggle.color ? "" : "white";
		}		
	 });
 });