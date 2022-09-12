const Node = (value) => {
  next = null;
  value = value;
  return { value, next };
};

const LinkedList = () => {
  head = null;

  const prepend = (value) => {
    //add first
    const newNode = Node(value);
    newNode.next = head;
    head = newNode;
  };

  const append = (value) => {
    //add last
    if (head == null) {
      prepend(value);
      return;
    }

    const newNode = Node(value);
    let temp = head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = newNode;
  };

  const size = () => {
    let temp = head;
    let counter = 0;
    while (temp != null) {
      counter += 1;
      temp = temp.next;
    }
    return counter;
  };

  const getHead = () => {
    return head.value;
  };

  const tail = () => {
    let temp = head;
    while (temp.next != null) {
      temp = temp.next;
    }
    return temp.value;
  };

  const at = (index) => {
    let temp = head;
    for (let i = 0; i < index; i++) {
      if (temp.next === null) {
        break;
      }
      temp = temp.next;
    }
    return temp.value;
  };

  const pop = () => {
    let temp = head;
    while (temp.next.next != null) {
      temp = temp.next;
    }
    temp.next = null;
  };

  const contains = (value) => {
    let boolean = false;
    let temp = head;
    while (temp.next != null) {
      if (temp.value === value) {
        boolean = true;
      }
      temp = temp.next;
    }
    return boolean;
  };

  const find = (value) => {
    let counter = 0;
    let temp = head;
    while (temp.next != null) {
      if (temp.value === value) {
        break;
      }
      counter += 1;
      temp = temp.next;
    }
    if (temp.value !== value) return null;
    return counter;
  };

  const toString = () => {
    let temp = head;
    let string = '';
    while (temp != null) {
      string += `${temp.value} -> `;
      temp = temp.next;
    }
    return string + 'null';
  };

  return {
    append,
    prepend,
    size,
    getHead,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
  };
};

const list = LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
console.log(list.toString());
