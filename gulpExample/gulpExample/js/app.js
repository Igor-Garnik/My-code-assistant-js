var total = 0,
	first,
	second,
	result,
	resultMsg; 

for (var i = 15; i >= 0; i--) {
	first = Math.floor((Math.random() * 6) + 1);
	second = Math.floor((Math.random() * 6) + 1);

	if ( i == 8 || i == 13 ) {
		continue	
	};

	result = 'Первая кость: ' + first + '; Вторая кость: ' + second + '</br>';

	resultMsg += result;

	if ( first === second ) {
		result = 'Выпал дубль. Число ' + first + '</br>';
		resultMsg += result;
	}

	if ( first <= 3 && second >= 4 || first >= 4 && second <= 3 ) {
		result = 'Большой разброс между костями. Разница составляет ' + Math.abs(second - first) + '</br>';
		resultMsg += result;
	}

	resultMsg += '</br>';

	total += first + second;
}

resultMsg += total >= 100 ? '</br>Победа, вы набрали ' + total + 'очков !' : '</br>Вы проиграли, у Вас ' + total + 'очков :('
console.log(resultMsg);