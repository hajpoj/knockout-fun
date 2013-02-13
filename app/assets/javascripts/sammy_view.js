if(window.location.href.indexOf("/sammy") > -1) {

  $(function() {

    function AppViewModel() {
      var self = this;
      self.pageNum = ko.observable('1');
      self.pageNum('2');

      Sammy(function() {
        this.get('#:pageNum', function(){
          self.pageNum(this.params.pageNum);
          console.log(self.pageNum());
        });

        this.get('', function() {
          this.app.runRoute('get', '#1');
        });
      }).run();

    }

    var avm = new AppViewModel();
    ko.applyBindings(avm);

  });

}