var responses = {
 'name': 'im skye',
'age': 'im a computer',
'hi': 'hello',
'morning' : 'Good morning',
'hows the weather' : 'sunny',
'how are you' : 'im good',
'whats 8273 * 5' : '41365',
'im bored' : 'ok?',
'what time is it' : '9:03am',
'whats todays date' : 'september 27, 2016'
};


function speak(){

  var question = $("#input").val();
var answer = responses[question];
  $("#chat-area").html(answer);



}

  // $("#chat-area").prepend(responses);
  // $("#input").append(question);
