#include<iostream>
using namespace std;

const int N = 5;
struct myStack{
    private:
        int stack[N];
        int top = -1;
    
    public:
        bool isEmpty(){
            return (top == -1);
        }
        bool isFull(){
            return (top == N-1);
        }
        
        bool push(int value){
            if(isFull()){
                return false;
            }
            stack[++top]= value;
            return true;
        }
        int pop(){
            if(isEmpty()){
                return -1;
            }
            return stack[top--];
        }
        int peek(){
            if(isEmpty()){
                return -1;
            }
            return stack[top];
        }
        void printStack(){
            for(int i = top; i >= 0; i--){
                cout<<stack[i]<<" ";
            }
            cout<<endl;
        }

};



int main(){
    cout<<"Stack here ..."<<endl ;
    myStack stack;
    stack.push(1);
    stack.push(2);  
    stack.push(3);
    stack.push(4);
    
    cout<<stack.peek();
    stack.printStack();
    cout<<stack.pop();
    stack.printStack();
    cout<<stack.peek();
    // stack.pop();



    
}