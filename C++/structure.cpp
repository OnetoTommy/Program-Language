#include <iostream>
using namespace std;
#include <string>

struct stu
{
  string name;
  int age;
  int score;
};

struct teach
{
  int id;
  struct stu s;
};


int main()
{
  
  struct stu s = {"zhang", 20, 30};
  stu * p = &s;
  cout << p->age << endl;
  teach t;
  t.id = 1;
  t.s.age;



  system("pause");
  return 0;
}