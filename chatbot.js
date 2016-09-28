function returnTime(){
var now = new Date(Date.now());
var hours = now.getHours();
// returnTime(hours);
}


var responses = {
 'name': 'im skye',
'age': 'im a computer',
'hi': 'hello',
'morning' : 'Good morning',
'hows the weather' : 'sunny',
'how are you' : 'im good',
'whats 8273 * 5' : '41365',
'im bored' : 'ok?',
'what time is it' : "It is currently " + returnTime() + ".",
'whats todays date' : 'september 27, 2016'
};

// var fallbackResponse = {
//   'ummmm'
//   'i dont know what you mean'
//   '????'
// }


function speak(){
// if(responses == undefined){
//   var fallbackResponse = responses[question];
//     $("#chat-area").html(fallbackResponse);
// }


  var question = $("#input").val();
var answer = responses[question];
  $("#chat-area").html(answer);


}

  // $("#chat-area").prepend(responses);
  // $("#input").append(question);
