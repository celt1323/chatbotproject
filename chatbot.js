  function returnTime() {
  var now = new Date(Date.now());
  var hours = now.getHours();
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

function speak(){
  // if(responses == undefined){
  //    var fallBackResponse = ('ummmm');
  //    $("#chat-area").html(fallBackResponse);
  // }
var question = $("#input").val();
var answer = responses[question];
  $("#chat-area").html(answer);


}

 $(document).keydown(function(e) {
  if (e.keyCode == 13) {
    return speak();
  }
});

  // $("#chat-area").prepend(answer);
  // $("#chat-area").append(question);
