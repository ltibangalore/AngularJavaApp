//demo_spec.js //scm test

describe('Demo Browser Test', function() {
	it('should have a valid title', function() {
		
		browser.get('http://10.103.21.91:8080/AngularJavaApp/')
		
		expect(browser.getTitle()).toEqual('AngularJavaApp');
	});
});