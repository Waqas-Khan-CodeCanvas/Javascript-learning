#include<iostream>
using namespace std;
const int N = 5;
struct myStack{
    private:
        int stack[N];
        int top = -1;
    
    public:
        bool isFull(){
            return (top == N-1);
        }
        bool isEmpty(){
            return (top == -1);
        }    

        bool push(int value){
            if(isFull()){
                return false;
            }
            stack[++top] = value;
            return true;
        }
        int pop(){
            if(isEmpty()){
                return false;
            }
            return stack[--top];
        }
        int peek(){
            if(isEmpty()){
                return false;
            }
            return stack[top];
        }
        void printStack(){
            if(isEmpty()){
                cout<<"No Item Found";
            }
            for (int i = top; i >= 0; i--){
                cout<<stack[i]<< " ";
            }
            cout<<endl;
        } 
};

int main(){
    myStack stack;
    stack.push(10);
    stack.push(11);
    stack.push(12);
    stack.push(13);

    stack.printStack();
    stack.pop();
    stack.printStack();
    cout<<stack.peek();


}