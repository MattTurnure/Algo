// Return unique array
Array.prototype.unique = Array.prototype.unique || function () {
	'use strict';

	var len = this.length,
	    obj = {},
	    ret = [],
	    i   = 0;

	for (; i < len; i += 1) {
		if (!obj.hasOwnProperty(this[i])) {
		    obj[this[i]] = this[i];
		}
	}

	for (i in obj) {
		if (obj.hasOwnProperty(i)) {
		    ret.push(i);
		}
	}

	return ret;
};

Function.prototype.bind = Function.prototype.bind || function (context) {
    var self = this;

    return function () {
        return self.apply(context, arguments);
    };
};

function sum() {
	var args   = Array.prototype.slice.call(arguments),
	    len    = args.length,
	    result = 0,
	    i      = 0;

	if (len > 1) {
		for (; i < len; i++) {
		    if (typeof args[i] === 'number' && !isNaN(args[i])) {
		    	result += args[i] * 100;
		    }
		}
		return result / 100;
	} else {
		return;
	}
}

// check to see if string is a palindrome in one line
function isPalindrome(str) {
	'use strict';

	return str.split('').reverse().join('') === str;
}

// return fibonacci sequence to a set number of places
function fibonacciSequence(places) {
    'use strict';

    var ret = [0, 1], i = 0;

    for (; i < places - 2 ; i += 1) {
        ret.push(ret[ret.length - 1] + ret[ret.length - 2]);
    }

    return ret;
}

function makeRandomArray(num) {
    var i = 0;
    var a = [];
    var random = 0;

    for (; i < num; i++) {
        if (Math.random() > 0.3) {
            random = 'a';
        }

        if (Math.random() > 0.5) {
            random = 'b';
        }

        if (Math.random() > 0.7) {
            random = 'c';
        }

        a.push(random);
    }

    return a;
}

// Print the numbers 1..100
// For multiples of 3, print "Fizz" instead of the number
// For multiples of 5, print "Buzz" instead of the number
// For multiples of 3 and 5, print "FizzBuzz" instead of the number

var logFizzBuzz = function (num) {
	'use strict';

    var i = 1;

    for ( ; i <= num; i++) {
        if ( i % 3 === 0 && i % 5 === 0 ) {
            console.log('FizzBuzz');
        } else if ( i % 3 === 0 ) {
            console.log('Fizz');
        } else if ( i % 5 === 0 ) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
};

function flatten(ary) {
	var len         = ary.length,
		i           = 0,
		ret         = [],
		singles_ary = [],
		tmp_ary     = [];

	function munge(jary) {
		return [].concat.apply([], jary);
	}

	for (; i < len; i += 1) {
		if (Array.isArray(ary[i])) {
			tmp_ary = munge(ary[i]);
			ret = Array.isArray(tmp_ary) ? munge(tmp_ary) : ret.concat.apply(ret, ary[i]);
		} else {
			singles_ary.push(ary[i]);
		}
	}

	return singles_ary.concat(ret);
}

// K Difference
// Given N numbers, [N <= 10^5] we need to count the total pairs of numbers
// which have a difference of K. [K > 0 and K < 10^9]. The solution should
// have as low of a computational time complexity as possible.

function kDiff(config, set) {
    var arr  = set.sort().reverse(),
        len  = arr.length,
        slen = arr.length,
        diff = config[1],
        ret  = [],
        i    = 0,
        j    = 0,
        temp;


    for (; i < len; i++) {
        temp = arr[i] - diff;
        for (j = 0; j < slen; j++) {
            if (arr.indexOf(temp) !== -1 && ret.indexOf(arr[i] + ', ' + temp) === -1) {
                ret.push(arr[i] + ', ' + temp);
            }
        }
    }

    return ret;
}

// kDiff([5,2], [5,4,3,2,1]); // returns ["5,3", "4,2", "3,1"]
// kDiff([10,1],[363374326, 364147530, 61825163, 1073065718, 1281246024, 1399469912, 428047635, 491595254, 879792181, 1069262793]); // returns []

