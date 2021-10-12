// var stack = [];
// stack.push("g")
// stack.push("i")
// stack.push("y")

// console.log(stack)

class Node {
  constructor(value){
    //Node will carry out values we implement
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.first = null
    this.last = null
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop(){
    if(!this.first) return null;
    var temp  = this.first;
    if(this.first === this.first) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value
  }
}
var stack = [];
stack.push(40);
stack.push(35);
stack.push(95);
stack.push(45);
stack.push(9);
stack.push(5);
stack.pop();
stack.pop();
console.log(stack)