#include <iostream>
using namespace std;

int main()
{
  // // 用do...while method
  // int num = 100;
  // do
  // {
  //   int a = num % 10;
  //   int b = num / 10 % 10;
  //   int c = num / 100;
  //   if(a*a*a + b*b*b + c*c*c == num)
  //   {
  //     cout << num << endl;
  //   }
  //   num++;
  // }while (num < 1000);

  // //Use for function to identify the number that contains 7 or can be divided.
  // for (int num = 1; num <= 100; num++)
  // {
  //   if (num % 10 == 7 || num / 10 == 7 || num % 7 == 0)
  //   {
  //     cout << num << endl;
  //   }
  // }

  // // Print the matrix of *
  // for (int i = 0; i < 10; i++)
  // {
  //   for (int j = 0; j < 10; j++)
  //   {
  //     cout << "*";
  //   }
  //   cout << endl;
  // }

  // // Print the matrix of mutiply
  // for (int i = 1; i < 10; i++)
  // {
  //   for (int j = 1; j <= i; j++)
  //   {
  //     cout << j << "*" << i << "=" << j*i << " ";
  //   }
  //   cout << endl;
  // }

  // Break
  int num = 0;
  cout << "Please select the options" << endl;
  cin >> num;
  switch (num)
  {
  case 1:
    cout << "Hello World" << endl;
    break;

  default:
    cout << "Hello Campus" << endl;
    break;
  }

  system("pause");
  return 0;
}