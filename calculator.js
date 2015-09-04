
	results = [];
	var num=0;

	function calculate (num1, num2, operation) {

		switch(operation) {

		case 'add' : num=num1+num2;
					break;

		case 'subtract' : num=num1-num2;
					break;

		case'multiply': num=num1*num2;
					break;

		case'divide': num=num1/num2;
					break;

		default: console.log("This is not a vaild choice.");										
					break;

		}
		//close switch case

	return num;

	} 

	//close function

	var num1 = prompt('Please enter the first number.');
	num1=parseInt(num1);

	if (typeof (num1) === typeof(0))
	{

		var num2 = prompt('Please enter the second number');
			num2=parseInt(num2);


		if (typeof (num2) === typeof (0))

		{

		var operation = prompt('Please enter the operation');


			results.push( calculate(num1,num2,operation));
			console.log(results);


// 		 choice = 'yes';

// 			while(choice === 'yes')
// 			{
// 				console.log(calculate()
// 				choice = alert("would you like to try this again?");
// 				continue;

// 			}
// -->
		}

	}





