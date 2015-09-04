
	results = [];
	var num=0;
	var choice = 'yes';

	function calculate (num1, num2, operation) {

		switch(operation) {

		case 'add' '+' : 		num=num1+num2;
							break;

		case 'subtract' '-' : 	num=num1-num2;
							break;

		case'multiply' '*': 	num=num1*num2;
							break;

		case'divide' '/': 		num=num1/num2;
							break;

		case 'sumOfSquares':num= num1*num1 + num2*num2;
							break;

		case 'isMultipleOf':{

							if(num1!=0 && num2!=0)
								{

								if (num1>num2 && num1%num2 === 0)
									num= true;
								else if(num1<num2 && num2%num1 === 0)
									num=true;
								else
									num=false;

								}

							else
								num=false;
							}
							break;

		case 'PrimeNumbers':{	num=num1;
						
								if(
										for(var i=2; i<=num;i++)
									{
										var count=0;
										if(num1%i === 0)
											count++;
									}

									if (count===1)
										{
											num=num2;
											count=0;
											continue;
										}

									else
										return false){

								})
								num=true;		

							  }	

		default: alert("This is not a vaild choice.");										
							break;

		}
		//close switch case
	return num;

	} 

	//close function
	while(choice === 'yes')
			{

	 var num1 = prompt('Please enter the first number.');
	 //var num1= $("value1 arrange").val();
	 // num1=parseInt(num1,10);
//	num1='a';
 
	if (!isNaN(num1))
	{

	 var num2 = prompt('Please enter the second number');
	 //var num1= $("value2 arrange").val();
	  //num2=parseInt(num2,10);

	if (!isNaN(num2))

		{

	 var operation = prompt('Please enter the operation');
	 //var operation= $("value1 arrange").val();

		// operation='subtract';
		
			results.push( calculate(num1,num2,operation));
			prompt(results);


				choice = prompt("would you like to try this again?");


// 			}
// -->
		}

		else 
			alert("Invalid choice.");
	}

	else 
		alert("Invalid choice.");


}

//close while loop




