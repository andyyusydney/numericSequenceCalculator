(function(root, undefined){
		
	function seqNums(n){
		if ((n<0) || (parseInt(n) != n)) {
			return {
				error: 'Param should be positive number and integer.'
			}
		}
		
		var ret = [];
		for (var i=1;i<=n;i++) {
			ret.push(i);
		}
		
		return ret;
	}
	
	function oddNums(n){
		if ((n<0) || (parseInt(n) != n)) {
			return {
				error: 'Param should be positive number and integer.'
			}
		}
		
		var ret = [],
			i = 1;
			
		while (i<=n) {
			ret.push(i);
			i += 2;
		}
		
		return ret;
	}
	
	function evenNums(n){
		if ((n<0) || (parseInt(n) != n)) {
			return {
				error: 'Param should be positive number and integer.'
			}
		}
		
		var ret = [],
			i = 0;
			
		while (i<=n) {
			ret.push(i);
			i += 2;
		}
		
		return ret;
	}
	
	function notMultiOf3and5Nums(n){
		if ((n<0) || (parseInt(n) != n)) {
			return {
				error: 'Param should be positive number and integer.'
			}
		}
		
		var ret = [],
			i = 1;
			
		while (i<=n) {
			if ((i%3 !== 0) && (i%5 !== 0)) {
				ret.push(i);
			}
			i++;
		}
		
		return ret;
	}
	
	function fibNums(n){
		if ((n<0) || (parseInt(n) != n)) {
			return {
				error: 'Param should be positive number and integer.'
			}
		}
		
		var ret = [0,1],
			sum = 0,
			a = 0,
			b = 1,
			i = 2;
			
		if ((n >= 0) && (n < 2)) {
			return ret;
		}

		while (i<=n) {
			sum = ret[i-1] + ret[i-2];
			ret.push(sum);
			i++;
		}
		
		return ret;
	}
	
	var numSeqCalc = {
		seqNums: seqNums,
		oddNums: oddNums,
		evenNums: evenNums,
		notMultiOf3and5Nums: notMultiOf3and5Nums,
		fibNums: fibNums
	}
	
	// module export
    if ((typeof module !== 'undefined') && module.exports) { // Node
        module.exports = numSeqCalc;
    } else {
        root.numSeqCalc = numSeqCalc;
    }
})(this);


