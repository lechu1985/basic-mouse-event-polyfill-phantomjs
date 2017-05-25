
describe('basic-mouse-event-polyfill added so phantomJS', function() {

  it('should not throw an error if you try to create a MouseEvent', function() {
    expect(function(){ new MouseEvent('click', {ctrlKey: true})}).not.toThrow();
    expect(function(){ new MouseEvent('mouseover')}).not.toThrow();
  });

});
