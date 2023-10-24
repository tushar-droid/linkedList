class LinkedList {
    head = new Node();
    current_head = this.head;
    size = 0;

    append(value){
        var new_val = new Node(value, null);
        if(this.head.nextNode == null){
            this.head.nextNode = new_val;
            this.current_head = new_val;
        }
        else{
            this.current_head.nextNode = new_val;
            this.current_head = new_val;
        }
        this.size = this.size+1;
    };
    prepend(value){
        var new_val = new Node(value, null);
        new_val.nextNode = this.head.nextNode;
        this.head.nextNode = new_val;
        this.size = this.size+1;
    }   

    toString(){
        var nodes= this.head.nextNode;
        var st = ``;
        while(nodes!=null){
            st += `->(${nodes.value})`;
            nodes = nodes.nextNode;
        }
        return st;
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
l.append(19);
l.append(23);
var val = l.toString();
console.log(val);