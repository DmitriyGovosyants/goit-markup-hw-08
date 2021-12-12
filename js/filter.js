
  var example = new DataFilterJS({
    filterGroup: '.portfolio',
    filterNode: '.portfolio__item',
    filterButtonGroup: '.filter',
    transitionSpeed: '0ms'
  });

  function DataFilterJS(config){
    // define variables
    var filterGroup = config.filterGroup;
    var filterNode = config.filterNode;
    var filterButtonGroup = config.filterButtonGroup;
    var transitionSpeed = config.transitionSpeed;
    var filter_group = $(filterGroup);
    var filter_node = $(filterGroup+' > '+filterNode);
    var search_val = $(filterButtonGroup+'> '+'input[type="text"]').value;
    $(filterGroup+', '+filterNode+', '+filterNode+'.filter-me').css({"transition":"all "+transitionSpeed});
    
    // (Button) Data Filter Function
    $(filterButtonGroup+' .button--filter').on('click', function(e) {
      var eventFilter = e.currentTarget.attributes[1].nodeValue;
       // Loop through Filter Nodes on Button Click
       $.each(filter_node, function(i, v) {
          if(eventFilter == "*") {
            filter_node[i].classList.remove('filter-me');
          } else if(filter_node[i].getAttribute('data-filter').includes(eventFilter) == false) {
            filter_node[i].classList.add('filter-me')
          } else {filter_node[i].classList.remove('filter-me');}
       });
    }); // end click event

    // (Keystroke) Data Filter Function    
    $(filterButtonGroup+' > input[type="text"]').on('keypress keydown keyup', function(e, fnd) {
      // Loop through Filter Nodes on Keystroke
      $.each($(filterNode), function(i, v) {
        var node = v.getAttribute("data-filter").toString().toUpperCase();
        var search_string = $(filterButtonGroup+' > '+'input[type="text"]').val().toUpperCase();
        //console.log(node.getAttribute('data-filter'));
        if(node.includes(search_string) == false) {
          v.classList.add('filter-me');
        } else {v.classList.remove('filter-me');}
      }); // end each
    }); // end keypress
  }