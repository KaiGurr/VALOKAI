			function jumpDiv(element) {
				var newRed = Math.random() * 255;
				var newGreen = Math.random() * 255;
				var newBlue = Math.random() * 255;
				element.style.backgroundColor = "rgb(" + newRed + "," + newGreen + "," + newBlue + ")";
				var newTop = Math.random() * window.innerHeight;
				var newLeft = Math.random() * window.innerWidth;
				element.style.top = newTop + "px";
				element.style.left = newLeft + "px";
			}