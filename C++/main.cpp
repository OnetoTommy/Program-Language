#include <iostream>
using namespace std;
#define day 7

int main()
{
//   int a = 10;
//   cout << "Days" << day << endl;

//   // there are 2 methods to define constant: "#define day 7" and "const int b = 7;" 
//   const int b = 7;
//   cout << "b = " << b << endl;

//   cout << "a = " << a << endl;
// /* Integer type */
//   // short(2): 2^15: 32768
//   short num1 = 10;
//   cout << "Memory space" << sizeof(num1) << endl;
//   // int(4): 2^31
//   int num2 = 10;
//   // long(4): 2^31
//   long num3 = 10;
//   // long long(8): 2^63
//   long long num4 = 10;

// /* float and double*/
// // f is important when you use the type of float
//   float f1 = 3.14f; //byte:4； 7 numbers will be shown
//   double d1 = 3.14; // byte:8  15 numbers will be shown

//   /* character: space is 1*/
//   char ch = 'a';
//   cout << (int)ch << endl; //ASCII

//   // Special character: \n; \\ ; \t: from start to end is totally 8 characters.
//   cout << "Memory space\n";
//   cout << "\\" << endl;
//   cout << "Memory\tspace"<< endl;

  // // String for c++
  // string str = "Hello World";
  // cout << str << endl;
  // // String for c
  // char st01[] = "Hello World";
  // cout << st01 << endl;

  // // if(){} else if(){} else{};
  // int score = 0;
  // cout << "Please enter the score" << endl;
  // cin >> score;

  // if(score >= 600){
  //   cout << "No.1" << endl;
  // } 
  // else if (score >= 500 && score < 600)
  // {
  //   cout << "No.2" << endl;
  // }
  // else 
  // {
  //   cout << "No.3" << endl;
  // }

  // // 三目运算符
  // int a = 10;
  // int b = 20;
  // int c = 0;
  // c = a > b ? a : b;
  // cout << c << endl;
  // (a > b ? a : b) = 100;
  // cout << a << endl;
  // cout << b << endl;

  // // Switch
  // int score = 0;
  // cout << "Please enter the score" << endl;
  // cin >> score;
  // switch (score)
  // {
  // case 500:
  //   cout << "Good" << endl;
  //   break;
  
  // default:
  //   cout << "Perfect" << endl;
  //   break;
  // }

  // // while
  // int num = 0;
  // while (num < 10)
  // {
  //   cout << num << endl;
  //   num++;
  // }

  // Case1
  int num = rand() % 100 + 1;
  


  system("pause");

  return 0;
};