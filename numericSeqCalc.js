(function(root, undefined){
	function seqNums(){}
	function oddNums(){}
	function evenNums(){}
	function notMultiOf3and5Nums(){}
	function fibNums(){}
	
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


