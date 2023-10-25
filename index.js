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
