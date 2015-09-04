

//enter on result box

$(".result").on("click" , function(event){

		var num1= $(".value1").val();
		var num2= $(".value2").val();
		var operation='add';

		var answer= calculate(num1, num2, operation);
		// console.log(answer);
		$(".list").text(answer);
	
});


	results = [];
	var num=[];
	var choice = 'yes';
	var primeNum=[];
	var num1= $(".value1").val();
		var num2= $(".value2").val();

	function calculate (num1, num2, operation) {

		switch(operation) {

		case 'add' : 		num=parseInt(num1)+ parseInt(num2);
							break;

		case 'subtract': 	num=num1-num2;
							break;

		case'multiply': 	num=num1*num2;
							break;

		case'divide': 		num=num1/num2;
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

		case 'primeNumbers':{	
								var count=0;
								

								if (num1>num2)
							  	{
							  		low=num2;
							  		high=num1
							  	}
							  	else  
							  	{
							  		low=num1;
							  		high=num2;
							  	}
								
							  for(var i=low; i<=high; i++)
							  {
									for(var j=2; j<=i;j++)
									{
										
										if(i%j === 0)
											count++;
									}

									if (count === 1)
									primeNum.push(i);				

							  }	

							  num=primeNum;

							  }

		default: alert("This is not a vaild choice.");										
							break;

		}
		//close switch case
	return num;

	} 

	//close function
	

	 //var num1 = prompt('Please enter the first number.');
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

	 // var operation = prompt('Please enter the operation');
	// var operation = 'add';

	 //var operation= $("value1 arrange").val();

		// operation='subtract';
		
			results.push( calculate(num1,num2,operation));
			prompt(results);


				// choice = prompt("would you like to try this again?");


// 			}
// -->
		}

		else 
			alert("Invalid choice.");
	}

	else 
		alert("Invalid choice.");




//close while loop




