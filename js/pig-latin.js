// business logic
//translates words
var pigWord = function(word) {
  var pigWord = "";

  //if start with a vowel, add ay to the end
  if (word[0].toLowerCase() === 'a' || word[0].toLowerCase() === 'e' || word[0].toLowerCase() === 'i'|| word[0].toLowerCase() === 'o'|| word[0].toLowerCase() === 'u') {
    pigWord = word + "ay";
  }
  //if start with consonants, move consonants to end and add "ay"
  else {
    var firstVowel = NaN;
    var tempWord = "";

    //get index of first vowel
    for (var index = 0; index < word.length; index++) {
      if (word[index].toLowerCase() === 'a' || word[index].toLowerCase() === 'e' || word[index].toLowerCase() === 'i'|| word[index].toLowerCase() === 'o'|| word[index].toLowerCase() === 'u') {
        //check if q is present before 'u'
        if (word[index].toLowerCase() === 'u' && word[index - 1].toLowerCase() === 'q') {
          //change firstVowel location to include moving "qu"
          firstVowel = index + 1;
        }
        else {
          firstVowel = index;
        }
        break;
      }
    }
    //move consonants (before first vowel) to end and add "ay"
    //get consonants (tempWord)
    tempWord = (word.split("").splice(0, firstVowel)).join("");
    //remove consonants from pigWord
    pigWord = (word.split("").splice(firstVowel, (word.length - firstVowel))).join("");
    //combine words
    pigWord += tempWord + "ay";
  }
  //return translated word
  return pigWord;
};

//splits sentence up (into array of words)
var pigSentence = function(sentence) {
  var tempSentence = "";
  var pigSentence = "";
  //split sentence into array of words
  tempSentence = sentence.split(" ");

  //got through words in array, and call translator
  pigSentence = tempSentence.map(function(word) {
    return pigWord(word);
  });

  pigSentence = pigSentence.join(" ")
  //return translated sentence
  return pigSentence;
};



// user interface logic
$(document).ready(function(){
  $("#input").submit(function(event) {
    event.preventDefault();
    var sentence = $("#sentence").val();
    var translatedSentence = pigSentence(sentence);

    $(".sentence").text(sentence);
    $(".pigSentence").text(translatedSentence)

    $("#result").show();
  });
});
