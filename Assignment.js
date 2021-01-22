
//Function Taking kilometer and return meter in distence
//define function
function  kilometerToMeter(distenceInKilometer)
{
    //checking wheather number or not 
    if(typeof distenceInKilometer=='number')
    {
        //checking wheather input positive or negetive number
        if(distenceInKilometer<0)
        {
            var message="Distence can not be a negetive number"
            return message;
        }

    //1 kilometer =1000meter
    var meter=distenceInKilometer*1000;
    return meter;
    } 
  var message=  "Please Enter a number you entered a string or other Thing";
  return message;
}

/*Function call and printing in console

var output= kilometerToMeter("hi");
console.log(output)

*/













//Function which  Take How many watch,mobile,and laptop you want to buy as input,,and return the total cost of that 

//define function
function budgetCalculator(numberOfWatch,numberOfMobile,numberOfLaptop)
{
    //checking wheather number or not 
    if(typeof numberOfWatch =='number' &&  typeof numberOfMobile=='number'&&  typeof numberOfLaptop =='number')
    {
        //checking input is integer or fractional
        if(Number.isInteger(numberOfWatch) && Number.isInteger(numberOfMobile) && Number.isInteger(numberOfLaptop))
        { 
            //checking whether number is positive or negetive
            if(numberOfWatch >=0  && numberOfMobile>=0 && numberOfLaptop>=0 )
            {
                var unitPriceOfWatch= 50;
                var unitPriceOfMobile= 100;
                var unitPriceOfLaptop= 500;
                var total=(numberOfWatch*unitPriceOfWatch)+(numberOfMobile*unitPriceOfMobile)+(numberOfLaptop*unitPriceOfLaptop);
                return total;

            }
            var message=  "You can not put negetive number  as  a parameter ";
            return message;
        }
        var message=  "This Type Of Product can not  be fractional  please enter integer number";
        return message;
    }
    var message=  "Please Enter a number you entered a string or other Thing";
    return message;
}

/*Function call and printing in console

var totalBudget=budgetCalculator(2.5,5,5)
console.log(totalBudget);

*/














//Function Taking how many day you want to stay at hotel as input ,and it will generate output how much money you will pay

//define function
function hotelCost(numberOfDay)
//checking wheather number or not 
{
    if(typeof numberOfDay =='number')
    { 
        if(numberOfDay<0)
        {
            var message="Day can not be a negetive number"
            return message;
        }

        //for floating value it will change value to upper integer number as 2.5 will be 3
    
        numberOfDay=Math.ceil(numberOfDay);
        var hotelcost;

        if (numberOfDay>=1 && numberOfDay<=10)
        {
            hotelcost=numberOfDay*100;
        }
        else if(numberOfDay>=11 && numberOfDay<=20)
        {
            var restOfDay=numberOfDay-10;
            hotelcost=(100*10)+(restOfDay*80);

        }
        else if(numberOfDay>=21)
        {
            var firstTenDayPrice=(10*100)
            var tenToTwentyDayPrice=10*80
            restOfDay=numberOfDay-20;
            hotelcost=firstTenDayPrice+tenToTwentyDayPrice+(restOfDay*50);      
        }

        return hotelcost;
    }
    var message=  "Please Enter a number you entered a string or other Thing";
    return message;
}

/*Function call and printing in console

var totalHotelCost=hotelCost(15);
console.log(totalHotelCost);

*/






//Function which will take an array of name and will find longest name in array
//define function
function megaFriend(friendList)
 {
    if (friendList[0] == " ")
    {
            return "This word is not correct!";
    }
    else 
    {
        var maximumLength= friendList[0].length;
        var message;
        var  j = 0;
        for (var i = 1; i < friendList.length; i++) 
        {
            if(friendList[i] == " ")
            {
                message = "This word is not correct";
                return message;
             
            }
            else if(friendList[i].length > maximumLength)
             {
                maximumLength = friendList[i].length
                j = i;
                message = friendList[j];
            }
        }
        return message;
    }
}

/*Function call and printing in console

var longString=megaFriend(["Afrin", "Mehjabin", "Ahad", "Rahman", "Sabbir "])
console.log(longString);
*/