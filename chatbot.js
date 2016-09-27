var responses = {
 'name': 'im skye',
'age': 'im a computer',
'hi': 'hello',
'morning' : 'Good morning',
'hows the weather' : 'sunny'
};


function speak(){

  var question = $("#input").val();
var answer = responses[question];
  $("#chat-area").html(answer);



}

  // $("#chat-area").prepend(responses);
  // $("#input").append(question);
