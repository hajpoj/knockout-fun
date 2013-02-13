if(window.location.href.indexOf('/pager') > -1)  {
  $(function() {
    function AppViewModel() {
    }

    var appVM = new AppViewModel();

    pager.extendWithPage(appVM);
    ko.applyBindings(appVM);
    pager.start();
  });
}