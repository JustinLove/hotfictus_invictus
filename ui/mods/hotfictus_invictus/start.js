(function() {
  var setupDialog = function() {
    $(".hotfictus_invictus_dialog").dialog({
      dialogClass: "no-close",
      draggable: false,
      resizable: false,
      height: 400,
      width: 600,
      modal: true,
      autoOpen: model.buildVersion() != '63234',
      buttons: {
          "EXIT": function () {
              model.exit();
          },
          "LATER": function () {
              $(this).dialog("close");
          }
      }
    });
  }

  //load html dynamically
  loadTemplate = function (element, url, model) {
    element.load(url, function () {
      console.log("Loading html " + url);
      ko.applyBindings(model, element.get(0));
      setupDialog()
    });
  };

  //var container = $('<div id="insertion_point"></div>')
  //container.appendTo('body')
  //loadTemplate(container, 'coui://ui/mods/hotfictus_invictus/start.html', model);
})()