#include <iostream>
#include <ctime>


// typedef std::string text_t;
// typedef int num;
// using text_t = std::string;
// using num = int;


// double square(double length);

// std::string merge(std::string string1, std::string string2){
//   return string1 + " " + string2;
// }

// int num = 2; //Global variables

void showBalance(double balance){
  std::cout << "Your balance is: $" << balance << '\n';
};
double deposit(){
  return 0;
};
double withdraw(double balance){
  return 0;
};


int main(){


  double balance = 0;
  int choice = 0;

  do
  {
    std::cout << "*****************\n";
    std::cout << "Enter your choice:\n";
    std::cout << "*****************\n";
    std::cout << "1.Show Balance\n";
    std::cout << "2.Deposit Money\n";
    std::cout << "3.Withdraw Money\n";
    std::cout << "4.Exit\n";
    std::cin >> choice;

    switch (choice)
    {
    case 1: 
      showBalance(balance);
      break;
    case 2: 
      balance + deposit();
      break;
    case 3: 
      balance - deposit();
      break;
    case 4: 
      std::cout << "Thank you for your visiting\n";
      break;
    default:
      std::cout << "Invalid\n";
    }
  } while (choice != 4);
  
 


  // local variables = declared inside a function or block;
  // Global variables = declared outside of all functions;
  // int num = 3; //local variables 




  // return

  // double length = 5.0;
  // double res = square(length);
  // // std::cout << res << '\n';

  // std::string firstName = "Bro";
  // std::string lastName = "Code";
  // std::string fullName = merge(firstName, lastName);
  // std::cout << fullName << '\n';


  // function = a block of reusable code
  
  // std::string name;
  // if (name.empty()){
  //   std::cout << "Enter your name: ";
  //   std::getline(std::cin, name);
  // }
  // std::cout << "Hello " << name; 

  // Guess game
  // int num;
  // int guess;
  // int tries;
  // srand(time(NULL));
  // num = rand() % 100 + 1;
  // std::cout << "****Guessing Number*****" << '\n';
  // do{
  //   std::cout << "Enter a guess between 1 to 100" << '\n';
  //   std::cin >> guess;
  //   tries++;
  //   if (guess > num){
  //     std::cout << "larger" << '\n';
  //   }else if (guess < num){
  //     std::cout << "Lower" << '\n';
  //   }
  // }while (guess != num);
  

  // peseudo-random = not truly random
  // srand(time(NULL));
  // srand(time(0));

  // int num = (rand() % 6) + 1;
  
  // switch (num)
  // {
  // case 1:
  //   std::cout << "High" << '\n';
  //   break;
  // case 2:
  //   std::cout << num << '\n';
  //   break;
  // case 3:
  //   std::cout << num << '\n';
  //   break;
  // case 4:
  //   std::cout << num << '\n';
  //   break;
  // case 5:
  //   std::cout << num << '\n';
  //   break;
  // case 6:
  //   std::cout << "Low" << '\n';
  //   break;
  // default:
  //   break/* code */;
  // }


  // Section2
  // const double pi = 3.14;
  // double r = 10;
  // double circumference = 2 * r * pi;
  // std::cout << circumference << '\n';

  // text_t firstName = "Bro";
  // num age = 20;
  // std::cout << firstName << '\n';
  // // std::cout << age << '\n';
  // int students = 20;
  // // students = students + 1;
  // // students += 1; 
  // // students ++;
  // students %= 2;
  // std::cout << (char) 100 << '\n';

  // cin >> extraction operator
  // cout >> insertion operator
  // std::string name;
  // std::cout << "What's your name?";
  // // std::cin >> name;
  // std:getline(std::cin >> std::ws, name); //std::ws is used when it is not the first cin.
  // std::cout << "Hello " << name <<'\n';


  // max math
  // double x = 1;
  // double y = 2;
  // double z = std::max(x, y); // std::min(x, y)
  // double l = std::pow(2, 4); // 2^4
  // double m = std::sqrt(9);
  // double n = std::abs(-1);
  //double z = round(3.99); // round 
  //  double z = ceil(3.1); //round up
  // double z = floor(3.99); //round down
  // std::cout << z << '\n';

  // double a;
  // double b;
  // double c;

  // std::cout << "Enter side a:";
  // std::cin >> a;

  // std::cout << "Enter side b:";
  // std::cin >> b;

  // a = pow(a, 2);
  // b = pow(b, 2);
  // c = sqrt(a + b);
  // std::cout << "side C: " << c;

  // if statements = do something if a condition is true.
  //                 if not, then don't do it.
  // int age;
  // std::cout << "Enter yout age";
  // std::cin >> age;
  // if(age <= 18){
  //   std::cout << "Welcome";
  // }


  // // Switch
  // int month;
  // std::cout << "Enter yout month";
  // std::cin >> month;

  // switch (month)
  // {
  // case 1:
  //   std::cout << "Monday";
  //   break;
  // case 2:
  //   std::cout << "February";
  //   break;
  
  // default:
  //   break;
  // }

  // ternary operator ? : = replacement to an if/else statement
  // condition ? expression1 : expression2
  // int grade = 75;
  // grade >= 60 ? std::cout << "Great" : std::cout << "Bad";

  // std::string name;
  // std::cout << "Enter your name: ";
  // std::getline(std::cin, name);

  // // name.clear();
  // name.insert(0, "@"); //insert char into the string
  // name.find(" "); //find the location of element
  // name.erase(0, 3); // delete from 0 to 2

  // if (name.length() > 12){
  //   std::cout << "Your name can not be over 12 characters.";
  // }else if(name.empty()){
  //   std::cout << name;
  //   std::cout << "OK";
  // }else{
  //   std::cout << name.at(1);
  //   std::cout << "OK";
  // }


  // && = and 
  // || = or
  //  ! = not


  





  





  // Section1
  // // Integer
  // int x; //declaration
  // int y = 6;
  // // double including decimal
  // double gpa = 3.7;

  // // character single char
  // char grade = 'A';

  // // boolean true or false
  // bool student = true;

  // // String represents a sequence of text
  // std::string name = "Hello";



  // std::cout << x << '\n';
  // std::cout << y << '\n';


  // std::cout << "I like pizza!" << '\n';
  // std::cout << "It's really good." << std::endl;
  return 0;
}

double square(double length){
  double res = length * length;
  return res;
}