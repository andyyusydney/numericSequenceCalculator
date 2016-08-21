describe('Numeric Sequence Calculator', function() {
	describe('all calculations', function() {
		beforeEach(function() {
			browser.ignoreSynchronization = true;
			browser.get('http://localhost:8080/');
			
			var inputElem = element(by.id("number"));
			
			actions = browser.driver.actions();
			actions.mouseMove(inputElem);
			actions.click();
			actions.sendKeys('11');
			actions.perform();

			var submitBtn = element(by.id("calcBtn"));
			submitBtn.click();
		})
		
		it('should display all numbers up to and including the number entered', function() {
			var seqNumsTextElem = element(by.id("seqNums"));
			expect(seqNumsTextElem.getText()).toEqual("1,2,3,4,5,6,7,8,9,10,11");
		});
		
		it('should display all odd numbers up to and including the number entered', function(){
			var oddNumsTextElem = element(by.id("oddNums"));
			expect(oddNumsTextElem.getText()).toEqual("1,3,5,7,9,11");
		});
		
		it('should display all even numbers up to and including the number entered', function(){
			var evenNumsTextElem = element(by.id("evenNums"));
			expect(evenNumsTextElem.getText()).toEqual("0,2,4,6,8,10");
		});
		
		it('should display all numbers up to and including the number entered except multiple of 3 or/and 5', function(){
			var notMultiOf3and5NumsTextElem = element(by.id("notMultiOf3and5Nums"));
			expect(notMultiOf3and5NumsTextElem.getText()).toEqual("1,2,4,7,8,11");
		});
		
		it('should display all fibonacci numbers up to and including the number entered', function(){
			var fibNumsTextElem = element(by.id("fibNums"));
			expect(fibNumsTextElem.getText()).toEqual("0,1,1,2,3,5,8,13,21,34,55,89");
		});
	});
	
	describe('incorrect input', function() {
		beforeEach(function() {
			browser.ignoreSynchronization = true;
			browser.get('http://localhost:8080/');
			
			var inputElem = element(by.id("number"));
			
			actions = browser.driver.actions();
			actions.mouseMove(inputElem);
			actions.click();
			actions.sendKeys('-1');
			actions.perform();

			var submitBtn = element(by.id("calcBtn"));
			submitBtn.click();
		})
		
		it('should display error if not be passed a negative or decimal number', function(){
			var seqNumsTextElem = element(by.id("seqNums"));
			expect(seqNumsTextElem.getText()).toEqual("Error: Param should be positive number and integer.");
		});
	});
});