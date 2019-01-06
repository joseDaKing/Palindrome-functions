"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Stack =
/*#__PURE__*/
function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.count = 0;
    this.items = {};
  }

  _createClass(Stack, [{
    key: "push",
    value: function push(element) {
      this.items[this.count] = element;
      this.count++;
    }
  }, {
    key: "size",
    value: function size() {
      return this.count;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.count === 0;
    }
  }, {
    key: "pop",
    value: function pop() {
      if (this.isEmpty()) {
        return undefined;
      }

      this.count--;
      var result = this.items[this.count];
      delete this.items[this.count];
      return result;
    }
  }, {
    key: "peek",
    value: function peek() {
      if (this.isEmpty()) {
        return undefined;
      }

      return this.items[this.count - 1];
    }
  }, {
    key: "clear",
    value: function clear() {
      this.items = {};
      this.count = 0;
    }
  }]);

  return Stack;
}();

var palindromeSimple = function palindromeSimple(str) {
  if (str === "" || str === undefined || str === null || str.length === 1) {
    var message = "Invalid value!";
    console.error(message);
    return message;
  } else {
    var strTrim = str.trim();
    var strArr = strTrim.split("");
    var strArrReversed = strArr.reverse();
    var strReversed = strArrReversed.join("");

    if (str === strReversed) {
      var _message = "The word/name ".concat(str, " is a palindrome.");

      console.log(_message);
      return _message;
    } else {
      var _message2 = "The word/name ".concat(str, " is not a palindrome.");

      console.log(_message2);
      return _message2;
    }
  }
};

var palindromeArr = function palindromeArr(str) {
  if (str === "" || str === undefined || str === null || str.length === 1) {
    var message = "Invalid value!";
    console.error(message);
    return message;
  } else {
    var strTrim = str.trim();
    var strArr = strTrim.split("");
    var strArrLength = strArr.length - 1;
    var strReversed = "";

    for (var i = strArrLength; 0 <= i; i--) {
      strReversed += strArr[i];
    }

    if (str === strReversed) {
      var _message3 = "The word/name ".concat(str, " is a palindrome.");

      console.log(_message3);
      return _message3;
    } else {
      var _message4 = "The word/name ".concat(str, " is not a palindrome.");

      console.log(_message4);
      return _message4;
    }
  }
};

var palindromeStack = function palindromeStack(str) {
  if (str === "" || str === undefined || str === null || str.length === 1) {
    var message = "Invalid value!";
    console.error(message);
    return message;
  } else {
    var strTrim = str.trim();
    var strArr = strTrim.split("");
    var strArrLength = strArr.length;
    var strReversed = "";
    var stack = new Stack();

    for (var i = 0; i < strArrLength; i++) {
      stack.push(strArr[i]);
    }

    for (var _i = 0; _i < strArrLength; _i++) {
      strReversed += stack.pop();
    }

    if (str === strReversed) {
      var _message5 = "The word/name ".concat(str, " is a palindrome.");

      console.log(_message5);
      return _message5;
    } else {
      var _message6 = "The word/name ".concat(str, " is not a palindrome.");

      console.log(_message6);
      return _message6;
    }
  }
};

palindromeStrManipulation("abc");