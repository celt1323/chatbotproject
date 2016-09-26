var responses = {
 'name': 'im skye',
'age': 'im a computer',
'hi': 'hello',
'morning' : 'Good morning'
};


function speak(){

  var question = $("#input").val();
  var answer = responses[question];
  $("#chat-area").html(answer);

}
