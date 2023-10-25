

class Node{
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    head_node = new Node();
    tail_node = this.head_node;
    size_val = 0;
    append = (value) =>{
        var new_val = new Node(value, null);
        if(this.size_val ===0){
            this.head_node = new_val;
            this.tail_node = new_val;
        }
        else{
            this.tail_node.nextNode = new_val;
            this.tail_node = new_val;
        }
        this.size_val = this.size_val+1;
    };
    prepend = (value) => {
        var new_val = new Node(value, null);        
        new_val.nextNode = this.head_node;
        this.head_node = new_val;
        this.size_val = this.size_val+1;
    }   

    toString = () =>{
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
    size = () => this.size_val;

    at = (index) =>{        
        if(index>this.size_val-1 || index<0){
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
        this.size_val = this.size_val-1;
        this.tail_node = current_node;
        return val;
    }
    
    contains = (value) =>{
        var current_node = this.head_node;
        while(current_node!= null){
            if(current_node.value ===value){
                return true;
            }
            else{
                current_node = current_node.nextNode;
            }
        }        
        return false;
    }

    find = (value) =>{
        var current_node = this.head_node;
        var index = 0
        while(current_node!= null){
            if(current_node.value ===value){
                return index;
            }
            else{
                current_node = current_node.nextNode;
                index +=1;
            }
        }        
        return null;
    }

    insertAt = (value, index) =>{
        var new_node = new Node(value, null);
        var current_node = this.head_node;
        if(index ==0){
            this.prepend(value);
            return
        }



        for(var i = 0;i<index-1; i++){
            current_node = current_node.nextNode;    
        }
        
        var temp = current_node.nextNode;
        current_node.nextNode = new_node;
        new_node.nextNode = temp;
        this.size_val += 1;
    }

    removeAt = (index) =>{
        var current_node = this.head_node;
        if(index==0){
            this.head_node = this.head_node.nextNode;
            this.size -= 1;
            return
        }
        var i = 1;
        while(i<index){
            current_node = current_node.nextNode;
            i++;
        }
        current_node.nextNode = current_node.nextNode.nextNode;
        this.size_val -= 1;
    }


}


//Uncomment below to test


// test = (() =>{

//     var l = new LinkedList();
//     l.append(10);
//     l.append(15);
//     l.append(17);
//     l.prepend(8);
//     l.append(23);
//     l.prepend(-3);
//     var val = l.toString();
//     console.log(val);
//     console.log('The head_node value: ', l.head());
//     console.log('The Tail value: ', l.tail());
//     console.log('The value at index 0 is: ', l.at(-1));
//     console.log('The value poped from the list is: ', l.pop());
//     var val = l.toString();
//     console.log('The updated looks like: ', val);
//     l.append(10);
//     l.append(15);
//     l.append(17);
//     l.prepend(8);
//     l.append(23);
//     l.prepend(-3);
//     var val = l.toString();
//     console.log('The new updated looks like: ', val);
//     console.log('The value poped from the list is: ', l.pop());
//     console.log('The value poped from the list is: ', l.pop());
//     console.log('The value poped from the list is: ', l.pop());
//     console.log('The value poped from the list is: ', l.pop());
//     var val = l.toString();
//     console.log('The updated looks like: ', val);
//     console.log('Find a value: ', l.contains(8));
//     console.log('Find index of value: ', l.find(17));
//     console.log(l.size());
//     l.insertAt(999999, 0);
//     var val = l.toString();
//     console.log('The updated looks like: ', val);
//     l.removeAt(0);
//     var val = l.toString();
//     console.log('The updated looks like: ', val);
//     console.log(l.head())
    
// })();

