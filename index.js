class LinkedList {
    head_node = new Node();
    tail_node = this.head_node;
    size = 0;

    append(value){
        var new_val = new Node(value, null);
        if(this.size ===0){
            this.head_node = new_val;
            this.tail_node = new_val;
        }
        else{
            this.tail_node.nextNode = new_val;
            this.tail_node = new_val;
        }
        this.size = this.size+1;
    };
    prepend(value){
        var new_val = new Node(value, null);        
        new_val.nextNode = this.head_node;
        this.head_node = new_val;
        this.size = this.size+1;
    }   

    toString(){
        var nodes= this.head_node;
        var st = ``;
        while(nodes!=null){
            st += `->(${nodes.value})`;
            nodes = nodes.nextNode;
        }
        return st;
    }

    head = () => this.head_node.value;
    tail = () => this.tail_node.value;

    at = (index) =>{        
        if(index>this.size-1 || index<0){
            return null;
        }
        var current_node = this.head_node;
        for(var i =0; i<index; i++){
            current_node = current_node.nextNode;
        }
        return current_node.value;
    }
    pop = () =>{
        var current_node = this.head_node;
       
        while(current_node.nextNode.nextNode != null){
            current_node = current_node.nextNode;
        }
        var val = current_node.nextNode.value;
        current_node.nextNode = null;
        this.size = this.size-1;
        this.tail_node = current_node;
        return val;
    }
    
}

class Node{
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}


var l = new LinkedList();
l.append(10);
l.append(15);
l.append(17);
l.prepend(8);
l.append(23);
l.prepend(-3);
var val = l.toString();
console.log(val);
console.log('The head_node value: ', l.head());
console.log('The Tail value: ', l.tail());
console.log('The value at index 0 is: ', l.at(-1));
console.log('The value poped from the list is: ', l.pop());
var val = l.toString();
console.log('The updated looks like: ', val);
l.append(10);
l.append(15);
l.append(17);
l.prepend(8);
l.append(23);
l.prepend(-3);
var val = l.toString();
console.log('The new updated looks like: ', val);
console.log('The value poped from the list is: ', l.pop());
console.log('The value poped from the list is: ', l.pop());
console.log('The value poped from the list is: ', l.pop());
console.log('The value poped from the list is: ', l.pop());
var val = l.toString();
console.log('The updated looks like: ', val);

