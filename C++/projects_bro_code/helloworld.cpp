#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main()
{
    vector<string> msg {"Hello", "C++", "World", "from", "VS Code", "and the C++ extension!"};

    for (const string& word : msg)
    {
        std::cout << word << " ";
    }
    std::cout << "I like pizza!" << std::endl;
    cout << '\n';
}
