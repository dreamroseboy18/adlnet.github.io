$(function() {

  var groups = ["xAPI","LRS","LRSTools","APTools","Reporting","Mobile","SCORM","Profile","VirtualWorlds","Tutorials"];

  var items = [
    {
      tags: ["LRS","xAPI"],
      color: 'blue',
      icon: 'fa-university',
      title: 'ADL LRS',
      description: 'ADL’s Open Source Learning Record Store (LRS) is used to store learning data collected with the xAPI. It is a reference implementation of the system described in the <a href="https://github.com/adlnet/xAPI-Spec" target="_blank">xAPI Spec repository</a>. Use this project if you are looking to setup an LRS for testing purposes, try the live demo linked below.',
      link_ex: 'https://lrs.adlnet.gov',
      link_ex_title: 'Public LRS',
      link_gh: 'https://github.com/adlnet/ADL_LRS'
    },
    {
      tags: ["LRSTools","APTools","xAPI"],
      color: 'blue',
      icon: 'fa-flask',
      title: 'xAPI Lab',
      description: 'Assisting in developing xAPI statements and communicating with a Learning Record Store (LRS).',
      link_ex: 'http://adlnet.github.io/xapi-lab',
      link_ex_title: 'Live Demo',
      link_gh: 'https://github.com/adlnet/xapi-lab'
    },
    {
      tags: ["LRSTools","xAPI"],
      color: 'blue',
      icon: 'fa-list',
      title: 'xAPI Statement Viewer',
      description: 'A datatables and bootstrap based xAPI statement viewer for easier reading',
      link_ex: 'http://adlnet.github.io/xapi-statement-viewer',
      link_ex_title: 'Live Demo',
      link_gh: 'https://github.com/adlnet/xapi-statement-viewer'
    },
    {
      tags: ["APTools","xAPI"],
      color: 'blue',
      icon: 'fa-gift',
      title: 'xAPI Wrapper',
      description: 'This JavaScript wrapper drastically simplifies communication to a Learning Record Store (LRS). All of our web-based xAPI samples use this file to abstract their communication to the LRS. Use this file for quick prototyping or proofs of concept in a web environment.',
      link_ref: 'http://adlnet.github.io/xAPIWrapper',
      link_ref_title: 'Reference Docs',
      link_gh: 'https://github.com/adlnet/xAPIWrapper'
    },
    {
      tags: ["Reporting","LRSTools","xAPI"],
      color: 'blue',
      icon: 'fa-bar-chart',
      title: 'xAPI Dashboard',
      description: 'Provides a quick and easy way to generate graphs from your xAPI data, as well as a powerful query language to manipulate it.',
      link_ex: 'http://adlnet.github.io/xAPI-Dashboard',
      link_ex_title: 'Website',
      link_gh: 'https://github.com/adlnet/xAPI-Dashboard'
    },
    {
      tags: ["APTools","xAPI"],
      color: 'blue',
      icon: 'fa-puzzle-piece',
      title: 'xAPI API Client Examples',
      description: 'These are client examples to help you learn and get started using the new API. These were created under the original Broad Agency Announcement (BAA) effort and have been updated to use the latest version of the xAPI. The samples include a Statement viewer, a Reporting example, and a Tetris game example. Use these examples to test out connectivity to a Learning Record Store or write learning content that is compatible with using the xAPI.',
      link_ex: 'https://lrs.adlnet.gov/prototypes',
      link_ex_title: 'Live Demo',
      link_gh: 'https://github.com/adlnet/experienceapi_client_examples'
    },
    {
      tags: ["Mobile","APTools","xAPI"],
      color: 'blue',
      icon: 'fa-mobile',
      title: 'xAPI jQuery Mobile',
      description: 'Integration of xAPI using jQuery Mobile with course examples and templates to get you started.',
      link_ex: 'http://adlnet.github.io/xapi-jqm',
      link_ex_title: 'Website',
      link_gh: 'https://github.com/adlnet/experienceapi_client_examples'
    },
    {
      tags: ["SCORM","APTools","xAPI"],
      color: 'blue',
      icon: 'fa-cogs',
      title: 'SCORM to xAPI Wrapper',
      description: 'APIWrapper.js file commonly used with SCORM with xAPI calls embedded.',
      link_gh: 'https://github.com/adlnet/SCORM-to-xAPI-Wrapper'
    },
    {
      tags: ["Profile","SCORM","xAPI"],
      color: 'blue',
      icon: 'fa-cog',
      title: 'xAPI SCORM Profile',
      description: 'Document describing how to report SCORM data to the Experience API.',
      link_ex: 'http://adlnet.github.io/xAPI-SCORM-Profile',
      link_ex_title: 'Website',
      link_gh: 'https://github.com/adlnet/xAPI-SCORM-Profile'
    },
    {
      tags: ["VirtualWorlds"],
      color: 'blue',
      icon: 'fa-cube',
      title: 'Sandbox',
      description: 'The ADL Sandbox is a persistent virtual environment that runs in a web browser.',
      link_ex: 'http://vwf.adlnet.gov',
      link_ex_title: 'Website',
      link_gh: 'https://github.com/adlnet/Sandbox'
    },
    {
      tags: ["Tutorials","xAPI"],
      color: 'blue',
      icon: 'fa-group',
      title: 'xAPI Cohort Resources',
      description: 'An archive of xAPI resources developed by and for groups in the xAPI Design Cohorts.',
      link_ex: 'http://adlnet.github.io/xapi-cohorts',
      link_ex_title: 'Website',
      link_gh: 'https://github.com/adlnet/xapi-cohorts'
    },
    {
      tags: ["APTools","xAPI"],
      color: 'blue',
      icon: 'fa-language',
      title: 'xAPI Verbs',
      description: 'Predefined ADL Experience API Verbs.',
      link_gh: 'https://github.com/adlnet/xAPIVerbs'
    },
    {
      tags: [],
      color: 'grey',
      icon: 'fa-github',
      title: 'ADL on Github',
      description: 'The adlnet organization on github.',
      link_gh: 'https://github.com/adlnet'
    }
  ];

  // Wrote this function because HB is adding &#8203 characters that screw up the tag lists
  Handlebars.registerHelper('listDataGroups', function(items, options) {
    var out = '<li class="active"><a href="#" data-group="">All</a></li>';
    for(var i=0, l=items.length; i<l; i++) { out += '<li><a href="#" data-group="' + options.fn(items[i]) + '">' + options.fn(items[i]) + '</a></li>'; }
    return out;
  });

  // Converts an array to '['item1','item2']' string notation
  Handlebars.registerHelper('arrayToString', function(items, options) {
    var out = '[';
    for(var i=0, l=items.length; i<l; i++) { out += '"' + options.fn(items[i]) + '",'; }
    var out = out.slice(0, -1) + ']';
    return out;
  });

  // Wrote this function because HB is adding &#8203 characters that screw up the tag lists
  Handlebars.registerHelper('listTags', function(items, options) {
    var out = '<ul>';
    for(var i=0, l=items.length; i<l; i++) { out += '<li>#' + options.fn(items[i]).substring(1) + '</li>'; }
    out += '</ul>';
    return out;
  });

  // Get the HTML from the template in the script tag​
  var groupScript = $('#group-list-template').html(); 

  // Compile the template​
  var groupTemplate = Handlebars.compile(groupScript);
  $('#filter').append(groupTemplate(groups)); 

  // Get the HTML from the template in the script tag​
  var itemScript = $('#item-template').html(); 

  // Compile the template​
  var itemTemplate = Handlebars.compile(itemScript);
  $('#grid').append(itemTemplate(items)); 


  // Setup the filter grid
  var $grid = $('#grid'),
      $sizer = $grid.find('.shuffle__sizer');

  $grid.shuffle({
    itemSelector: '.item', // the selector for the items in the grid
    sizer: $sizer
  });

  /* reshuffle when user clicks a filter item */
  $('#filter a').click(function (e) {

    // set active class
    $('#filter a').parent("li").removeClass('active');
    $(this).parent("li").addClass('active');

    // get group name from clicked item
    var groupName = $(this).attr('data-group');

    // reshuffle grid
    $grid.shuffle('shuffle', groupName );

    e.preventDefault();

  });

  // Allow filtering by tags
  $('.panel-google-plus-tags li').click(function() {
    $('#filter a[data-group="' + $(this).text().substring(1) + '"]').click();
  });
});
