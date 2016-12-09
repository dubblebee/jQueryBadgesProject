$(function() {

  // your code will go here

  $.ajax({
    url: 'https://www.codeschool.com/users/2331517.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response

      for (var i of response.courses.completed) {

      	var badge = i.badge;
      	var title = i.title;
      	var url = i.url;
      	
      	$("#badges").append('\
      		<div class="course">\
      		    <h3>'+ title +'</h3>\
      		    <img src="'+ badge +'"></img>\
      		    <a href="'+ url +'" target="_blank" class="btn btn-primary">See Course</a>\
      		</div>\
      	');
      }

    }
  });

});
