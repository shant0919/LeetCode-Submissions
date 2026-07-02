class MyStack {
    Queue<Integer> myQueue = new LinkedList<>();
    public MyStack() {
        
    }
    
    public void push(int x) {
        myQueue.add(x);
    }
    
    public int pop() {
        for(int i=0;i<myQueue.size()-1;i++){
            myQueue.add(myQueue.remove());
        } 
        return myQueue.remove();
    }
    
    public int top() {
        for(int i=0;i<myQueue.size()-1;i++){
            myQueue.add(myQueue.remove());
        } 
        int peak = myQueue.peek();
        myQueue.add(myQueue.remove());
        return peak;
    }
    
    public boolean empty() {
        if(myQueue.size() == 0) return true;
        else return false;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * boolean param_4 = obj.empty();
 */