function printToDom(string,id){
    document.getElementById(id).innerHTML = string;
}

function getUserInput(){
    var userInput = document.getElementById('input_field').value;
    return userInput;
}

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}

function translateTo(outputLanguage){
    var userInput = getUserInput();
    var inputArry = userInput.replace(/\s+/g,' ').split(' ');
    var languagueIndex;
    var output = '';
    var invalidInput = [];
    var invalidInputString = '';
    switch (outputLanguage) {
        case 'chinese_btn':
            languagueIndex = 1;
            break;
        case 'french_btn':
            languagueIndex = 2;
            break;
        case 'spanish_btn':
            languagueIndex = 3;
            break;
        case 'random_btn':
            languagueIndex = getRandomInt(4);
            break;
        default:
            languagueIndex = 0;
            break;
    }

    for(var i = 0; i < inputArry.length; i++){   
        if(dictionary[inputArry[i]]){
            output += dictionary[inputArry[i]][languagueIndex] + ' ';
        }
        else{
            invalidInput.push(inputArry[i]);
        }
    }

    //invalidInput[0] != '': when no input,invalidInput.length will still be 1
    if(invalidInput.length > 0 && invalidInput[0] != ''){
        invalidInputString = invalidInput.join(',') + ' is(are) not in the dictionary.';
    }else if(invalidInput.length > 0 && invalidInput[0] == ''){
        alert('Please type in the words you want to translate!');
    }else{
        invalidInputString = invalidInput.join(',');
    }

    printToDom(invalidInputString,'invalid_input');
    printToDom(output,'output_field');

    //for text-to-speech output
    var languageCode = ["en-US","zh-CN","fr-FR","es-ES"];
    var languageSelected = languageCode[languagueIndex];
    speak(output,languageSelected);
}

function speak(text, lang, callback) {
    var u = new SpeechSynthesisUtterance();
    u.text = text;
    u.lang = lang;
 
    u.onend = function () {
        if (callback) {
            callback();
        }
    };
 
    u.onerror = function (e) {
        if (callback) {
            callback(e);
        }
    };
 
    speechSynthesis.speak(u);
 }


var dictionary = 
{
    //[1]: Chinese, [2]: French, [3]: Spanish
    merry:['merry','快乐','joyeux','alegre'],
    christmas:['christmas','圣诞','Noël','Navidad'],
    and:['and','和','et','y'],
    happy:['happy','快乐','content','contento'],
    new:['new','新','Nouveau','nuevo'],
    year:['year','年','an','año']
}



