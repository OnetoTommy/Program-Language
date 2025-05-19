#include <iostream>
#include "head.h"
using namespace std;

// 函数声明
// int get_sum(int a, int b)
// {
//   int sum = a + b;
//   return sum;
// };

// int max(int a, int b)
// {
//   return a > b ? a : b;
// }
int main()
{
  int a = 10;
  int * p;
  p = &a;
  // cout << &a << endl; 
  // cout << p << endl;

  * p = 1000;
  cout << a << endl; 
  cout << *p << endl;

  cout << sizeof(p) << endl; // int * is also ok.
  cout << sizeof(int *) << endl; // int * is also ok.
  cout << sizeof(float *) << endl; // int * is also ok.
  cout << sizeof(char *) << endl; // int * is also ok.
  cout << sizeof(double *) << endl; // int * is also ok.


  // // int sum = get_sum(a, b); 
  // int sum = max(a, b); 
  // cout << sum << endl;
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

  // // Break
  // int num = 0;
  // cout << "Please select the options" << endl;
  // cin >> num;
  // switch (num)
  // {
  // case 1:
  //   cout << "Hello World" << endl;
  //   break;

  // default:
  //   cout << "Hello Campus" << endl;
  //   break;
  // }

  // // goto
  // cout << 1 << endl;
  // goto Flag;
  // cout << 2 << endl;
  // Flag:
  // cout << 3 << endl;

  // // Array:相同的类型数据元素；连续的内存位置
  // double num[10];
  // int arr2[3] = {1,2,3};
  // int arr3[] = {1,2,3,4,5};
  // cout << sizeof(num) << endl; //space for every byte
  // cout << (uintptr_t)arr3 << endl;
  // cout << &arr3[0] << endl;

  // // Example
  // int arr[7] = {3,4,5,6,8,1,10};
  // int res = 0;
  // for(int i = 0; i < 7; i++){
  //   if (arr[i] >= res)
  //   {
  //   res = arr[i];
  //   }
  // }
  // cout << res << endl;

  // // Example
  // int arr1[7] = {3,4,5,6,8,1,10};
  // int l = 0;
  // int r = 6;
  // while (l < r)
  // {
  //   int temp = arr1[l];
  //   arr1[l] = arr1[r];
  //   arr1[r] = temp;
  //   l++;
  //   r--;
  // }
  // for(int i = 0; i < 7; i++)
  // {
  //   cout << arr1[i] << endl;
  // }




  system("pause");
  return 0;
}