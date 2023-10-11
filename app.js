// CHAPTER NO 13 TO 15; 
//QUESTION NO 01;

// var students = [];

//QUESTION NO 02;

// var student1 =["waleed","huzaifa","ayan"];

//QUESTION NO 03;

// var student2 = [3,4,6,8,9];

//QUESTION NO 04;

//  var student3 =[true == false  ];

//QUESTION NO 05;

// var student4 =["waleed",1,"huzaifa",2,];

//QUESTION NO 06;

// var educationpak = ['SSC','HSC','BCS','BS','BCOM','MS','M. Phil.','PhD'] ;
// document.write(  " 1) " + educationpak[0] + '</br>');
// document.write(  " 2) " + educationpak[1] + '</br>');
// document.write(  " 3) " + educationpak[2] + '</br>');
// document.write(  " 4) " + educationpak[3] + '</br>');
// document.write(  " 5) " + educationpak[4] + '</br>');
// document.write(  " 6) " + educationpak[5] + '</br>');
// document.write(  " 7) " + educationpak[6] + '</br>');
     
//QUESTION NO 07;

// var student5 =["waleed","huzaifa","ayan"];
// var studentscr = [200, 120, 300];
// var studave =  studentscr[0] / 500 * 100;
// var studave1 = studentscr[1] / 500 * 100;
// var studave2 = studentscr[2] / 500 * 100;
// document.write("Score of " + student5[0] +" is " + studentscr[0] + " Percrentage is " + studave + "% </br>" );
// document.write("Score of " + student5[1] +" is " + studentscr[1] + " Percrentage is " + studave1 + "% </br>" );
// document.write("Score of " + student5[2] +" is " + studentscr[2] + " Percrentage is " + studave2 + "% </br>" );

//  QUESTION NO 08;

// var color = ["orange" ,"blue","green","yellow",];
// var askcol = prompt("Write the colour name u want to print the array")
// var newcol= color.unshift(askcol) ; 
//  console.log(color)
//  var colors = ["orange" ,"blue","green","yellow",];
// var askcol1 = prompt("Write the colour name u want to print the array")
// var newcol1= colors.push(askcol1) ; 
//  console.log(colors)
// var color1 = ["orange" ,"blue","green","yellow",];
// var askcol2 = prompt("Write the colour name u want to print the array")
// var askcol3 = prompt("Write the colour name u want to print the array")
// var newcol2= color1.unshift(askcol2,askcol3) ; 
// //  console.log(color1)
// var color2 = ["orange" ,"blue","green","yellow",];
// var newcol3= color2.shift(0) ; 
//  console.log(color2)

//  QUESTION NO 09;

// var studscr = [320,230,480,120];
// console.log(studscr.sort((a, b) => a - b));

//  QUESTION NO 10;

// var citties =  ["karachi","islamabad","quetta","peshawer","rawalpindi"];
// var newcity = citties.slice(1,3);
// console.log(newcity);

//  QUESTION NO 11;

// var arr = ["This" ,  "is" , "my", "cat" ];
// console.log(arr.join());

//    QUESTION NO 12;

//  var crt1 = [];
// crt1.unshift("Keyboard","Mouse","Printer","Monitor");
// console.log( "out " + crt1[0]);
// console.log( "out " + crt1[1]);
// console.log( "out " + crt1[2]);
// console.log( "out " + crt1[3]);

//   QUESTION NO 13;

// var crt = [];
// crt.unshift("Keyboard","Mouse","Printer","Monitor");
// console.log( "out " + crt[3]);
// console.log( "out " + crt[2]);
// console.log( "out " + crt[1]);
// console.log( "out " + crt[0]);


//    QUESTION NO 14 (NOT DONE);

// CHAPTER NO 17 TO 19;
//   QUESTION NO 01;

// var op =[[[]]];

//QUESTION NO 02;

// var dp = ["0","1","2","3" , ["1","0","1","2"] ,["2","1","0","1"]];
// document.write(dp.slice(0,4) + "  </br>");
//document.write(dp.slice() + "  </br>");

//   QUESTION NO 03;

// for (var n  = 0 ; n <= 10 ; n++){
// console.log(n)
// };

//   QUESTION NO 04 ;   

//  var num = +prompt("Enter the  number to show multiplication table");
//  var tak = +prompt("Enter the  Your Length ");
//  for ( var i = 1; i <= tak; i++ ){
//     console.log(num + " X " + i + " = " + num*i)
// }    

//  QUESTION NO 05 ;

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"] ;

// for(var j = 0 ; j < fruits.length ; j++){
// console.log(fruits[j])
// }
 
//  QUESTION NO 06 ;


//  for (k = 20 ; k >= 0 ; k-- ){
//     document.write(k + ",")
//  }

// for (l = 20 ; l >= 1; l-- ){
//     if ( l % 2 === 0)
//     console.log((l + " is an even number."))
// else { 
//     console.log((l + " is an odd number."))
// } 
// }  

//   QUESTION NO 07 ;

// var A = ["cake", "apple" , "pie" , "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search for:"); 
// var found = false;
// for (var i = 0; i < A.length; i++) {
//     if (A[i] === userInput) {
//         found = true;
//         break;
//     }
// }
// if (found) {
//     alert(userInput + " is found in the list.");
// } else {
//     alert(userInput + " is not found in the list.");
// }

//   QUESTION NO 08;

// var nump =  [24, 53, 78, 91, 12]
// // console.log(nump[2])
// for ( var q = 0 ; q < nump.length ; q++){
//     console.log(q)
//     for ( var j = q+1 ; j < nump.length ; j++){
//         debugger
//     if (nump[q] > nump[j] ){
//         alert(nump[q])
//     }
    
//     }
// }

//    QUESTION NO 09;

// b = [24, 53, 78, 91, 12]
// var small = b[0];
//  for (var i = 1; i < b.length ;i++ ){
//     if(b[i] < small ){
//         small = b[i]
//     }
//     alert("the smallest number is " + small)
//  }

//  QUESTION NO 10;

// for (var o = 1 ; o <= 100 ; o++){
//  if ( o % 5 === 0 ){
//     console.log(o)
//  }

// }

//  CHAPTER NO 20 TO 25 ;

// QUESTION NO 01;

// var myname = ("Waleed");
// var mname = ("Shoaib");
// alert("Your Name Is " + myname + " "+ mname)

//   QUESTION NO 02;

// var mob = prompt("Write Your Mobile Model");
// console.log(mob.length);

//    QUESTION NO 03;

// var cont = ("Pakistani");
// console.log(cont.indexOf("n"))


//   QUESTION NO 04;

// var rest = "Hello World";
// console.log(rest.lastIndexOf("l"))


//    QUESTION NO 05;

// var cont = ("Pakistani");
// console.log(cont.charAt(3))

//      QUESTION NO 06  (REPEAT);

//       QUESTION NO O7; 

// var peace = "hyderabad";
// var newpeace = peace.replace("hyder","islam");
// console.log(newpeace)

//    QUESTION NO 08;

// var message = "Ali and Sami are best friends They play cricket and football together";
// var message1 = message.replace(/and/g,"&");
// console.log(message1);

//  QUESTION NO 09 ;

// var num = "472";
// console.log( parseFloat(num))
  
//     QUESTION  NO 10;

// var use = prompt("write your data to change upper case");
//  use = use.toUpperCase();
// console.log(use);

//  QUESTION NO 11;

// var nop = "javascript";
// var pp = nop.charAt(0);
// var mak = pp.toUpperCase();
// var lol = mak + nop.slice(1);
// console.log(lol);

//    QUESTION NO 12;

// var num7 = 35.36;
// var num6 = num7.toString().replace('.' ,'');
// console.log(num6)

//    QUESTION NO 13; (REPEAT)


//   QUESTION NO 14;

// var specialchars = ["!", ")" , "(" ,  "*" ," &",  "^" ,"% " , " $" ," # ", "@", "~" , "{" , "}" , "|" ," <" ,">" ,"/",] ;
// var usersinp = prompt("Write Your Password");
// var isValid = true ;
// for (i = 0 ;i < usersinp.length ;i++ ){
//     if (specialchars.indexOf(usersinp[i]) !== -1) {
//         isValid = false;
//         break;
// }
// }
// if (isValid) {
//     alert("Username is valid!");
//   } else {
//     alert("Invalid username. Please try again.");
//   }

// QUESTION NO 15;
// var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","10"] ;
// var userp = prompt("Write Your Password");
// var isValid = true ;
// for (i = 0 ;i < userp.length ;i++ ){
//     if (alpha.indexOf(userp[i]) === -1) {
//         isValid = false;
//         break;
// }
// }
// if (isValid) {
//     alert("Username is valid!");
//   } else {
//     alert("Invalid username. Please try again.");
//   }
  
//  QUESTION NO 16 ;

// var university = "University Of Karachi";
// Split the string into an array using a comma (,) as the delimiter
// var arr = university.split('');

// console.log(arr); 

//     QUESTION NO 17;

// var pok = "Pakistan";
// console.log(pok.charAt(7))

//     QUESTION NO 18 ;
  


  
  



