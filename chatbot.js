  function returnTime() {
  var now = new Date(Date.now());
  var hours = now.getHours();
  }


var responses = {
 'name ': 'im skye ',
'age ': 'im a computer ',
'hi ': 'hello ',
'morning ' : 'Good morning ',
'hows the weather ' : 'sunny ',
'how are you ' : 'im good ',
'whats 8273 * 5 ' : '41365 ',
'im bored ' : 'ok? ',
'what time is it ' : "It is currently " + returnTime() + ".",
'whats month is it ' : 'october ',
'ok ':'how are you? ',
'good ':'great what are you doing? ',
'nothing ': 'k ',
'bye ': 'See you! '

};

function speak(){

var question = $("#input").val();
var answer = responses[question];

  $("#chat-area").prepend(question);

   if(answer == undefined){
      var fallBackResponse = ' i have no answer for that ';
      $("#chat-area").prepend(fallBackResponse);
  }
else{

  $("#chat-area").prepend(answer);
}





}

 $(document).keydown(function(e) {
  if (e.keyCode == 13) {
   speak();
  }
});
