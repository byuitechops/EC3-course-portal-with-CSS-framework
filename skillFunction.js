window.onload = function() {
    //Grab the inline template
    var template = document.getElementById('template').innerHTML;
  
    //Compile the template
    var compiled_template = Handlebars.compile(template);
  
    //Render the data into the template
    var context = {
        breadCrumb: "Vocabulary",
        level: "1",
        imgSrc: "./images/Reading.jpg",
        icon_id: "vocabIcon-desktop",
        icon_symbol: "R",
     };

     var compiledHtml = compiled_template(context);
  
    //Overwrite the contents of #target with the renderer HTML
    document.getElementById('target').innerHTML = compiledHtml;
  }