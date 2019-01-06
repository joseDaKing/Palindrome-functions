class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
 
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }
 
    size() {
        return this.count;
    }
 
    isEmpty() {
        return this.count === 0;
    }
 
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
       
        this.count--;
 
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
 
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
 
        return this.items[this.count - 1];
    }
 
    clear() {
        this.items = {};
        this.count = 0;
    }
}


const palindromeSimple = str => {
    if (str === ""|| str === undefined || str === null || str.length === 1) {
        const message = "Invalid value!";
        console.error(message);
        return message;
    }

    else {
        const strTrim = str.trim();
        const strArr = strTrim.split("");
        const strArrReversed = strArr.reverse();
        const strReversed = strArrReversed.join("");

        if (str === strReversed) {
            const message = `The word/name ${str} is a palindrome.`;
            console.log(message);
            return message;
        }

        else {
            const message = `The word/name ${str} is not a palindrome.`;
            console.log(message);
            return message;
        }
    }
}

const palindromeArr = str => {
    if (str === ""|| str === undefined || str === null || str.length === 1) {
        const message = "Invalid value!";
        console.error(message);
        return message;
    }

    else {
        const strTrim = str.trim();
        const strArr = strTrim.split("");
        const strArrLength = strArr.length - 1;
        let strReversed = "";

        for(let i = strArrLength; 0 <= i; i--) {
            strReversed += strArr[i];
        }

        if (str === strReversed) {
            const message = `The word/name ${str} is a palindrome.`;
            console.log(message);
            return message;
        }

        else {
            const message = `The word/name ${str} is not a palindrome.`;
            console.log(message);
            return message;
        }
    }    
}

const palindromeStack = str => {
    if (str === ""|| str === undefined || str === null || str.length === 1) {
        const message = "Invalid value!";
        console.error(message);
        return message;
    }

    else {
        const strTrim = str.trim();
        const strArr = strTrim.split("");
        const strArrLength = strArr.length;
        let strReversed = "";
        let stack = new Stack();
        
        for(let i = 0; i < strArrLength; i++) {
            stack.push(strArr[i]);
        }

        for(let i = 0; i < strArrLength; i++){
            strReversed += stack.pop();
        }

        if (str === strReversed) {
            const message = `The word/name ${str} is a palindrome.`;
            console.log(message);
            return message;
        }

        else {
            const message = `The word/name ${str} is not a palindrome.`;
            console.log(message);
            return message;
        }
    }    
}

palindromeStrManipulation("abc")