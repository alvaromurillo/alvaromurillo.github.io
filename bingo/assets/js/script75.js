 $(document).ready(function() {
 	init();
	
	function init(){
 		var numbers = generateCard();
		fillCard(numbers);
	}

	function generateCard() {		
		var cardNumbers = [];
		for (var i = 0; i < 5; i++) {
			var columnNumbers = [];
			var numbers = [];
			for (var j = 0; j < 15; j++) {
				numbers.push(i * 15 + j + 1);
			}
			for (var k = 0; k < 5; k++) {
				var index = Math.floor(Math.random()*numbers.length);
				var number = numbers[index];
				columnNumbers.push(number);
				numbers.splice(index, 1);
			}
			cardNumbers.push(columnNumbers)
		}		
				
		return cardNumbers;
	}

	function generateQRText(numbers) {
		var text = ""
		for (var i = 0; i < 5; i++) {
			for (var j = 0; j < 5; j++) {
				text = text + ( "0" + numbers[j][i]).slice(-2);
			}
		}
		return text
	}

	function fillCard(numbers) {
		var card = generateQRText(numbers)
		for (var i = 0; i < 5; i++) {
			for (var j = 0; j < 5; j++) {
				var index = i * 5 + j
				if (index == 12) {
					$('#cell'+index).addClass("qrCode");
					jQuery('#cell'+index).qrcode({ text: card, correctLevel: 0 });
					var canvas = $('canvas')[0];
					$('#cell'+index).css("background-image", 'url(' + canvas.toDataURL() + ')');
					canvas.remove();
				} else {
					$('#cell'+index).html(numbers[j][i]);
				}
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