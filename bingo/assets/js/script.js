 $(document).ready(function() {
 	var cards = [
 	"011900300000637400090021000051007983000025384700680088",
 	"021900300000637400090021000051007983000025384700680088",
 	"031900300000637400090021000051007983000025384700680088",
 	"041900300000637400090021000051007983000025384700680088",
 	"051900300000637400090021000051007983000025384700680088",
 	"061900300000637400090021000051007983000025384700680088",
 	"071900300000637400090021000051007983000025384700680088",
 	"081900300000637400090021000051007983000025384700680088",
 	"091900300000637400090021000051007983000025384700680088" 	
 	];
 	init();
	
	function init(){
 		var number = cards[Math.floor(Math.random()*cards.length)];
		fillCard(number);
	}

	function fillCard(card) {
		var qrAdded = false
		var numbers = card.match(/.{1,2}/g);

		for(var i = 0; i < 27; i++) {
			var cellNumber = parseInt(numbers[i], 0);
			if (cellNumber == 0) {				
				if ([8, 17, 26].includes(i) && qrAdded == false) {
					qrAdded = true
					$('#cell'+i).addClass("qrCode");
					jQuery('#cell'+i).qrcode({ text: card, correctLevel: 0 });
					var canvas = $('canvas')[0];
					$('#cell'+i).css("background-image", 'url(' + canvas.toDataURL() + ')');
					canvas.remove();
				} else {
					$('#cell'+i).addClass("empty");
				}
			} else {
				$('#cell'+i).html(cellNumber);
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