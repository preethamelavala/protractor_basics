describe('calculator application', function() {

  it('multiplication test', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');

    element(by.model('first')).sendKeys('20');
    element(by.model('second')).sendKeys('5');

    
   element(by.xpath("//select[@ng-model='operator']")).click();
   browser.sleep(1000);
   element(by.xpath("//option[@value='MULTIPLICATION']")).click();
   element(by.id("gobutton")).click();

   browser.sleep(5000);
    var result = element(by.tagName('h2'));

   expect(result.getText()).toEqual('100');
  });

    it('division test', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
  
      element(by.model('first')).sendKeys('20');
      element(by.model('second')).sendKeys('5');

      
     element(by.xpath("//select[@ng-model='operator']")).click();
     browser.sleep(1000);
     element(by.xpath("//option[@value='DIVISION']")).click();
     element(by.id("gobutton")).click();

     browser.sleep(5000);
      var result = element(by.tagName('h2'));
  
     expect(result.getText()).toEqual('4');
    });

    
  
    
  });

  