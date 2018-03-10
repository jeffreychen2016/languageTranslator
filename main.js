function printToDom(string,id){
    document.getElementById(id).innerHTML = string;
}

function getUserInput(){
    var userInput = document.getElementById('input_field').value;
    return userInput;
}

function translateTo(outputLanguage){
    var userInput = getUserInput();
    var inputArry = userInput.replace(/\s+/g,' ').split(' ');
    var languagueIndex;
    var output = '';
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
        default:
            languagueIndex = 0;
            break;
    }

        for(var i = 0; i < inputArry.length; i++)
        {   
            if(dictionary[inputArry[i]][languagueIndex]){
                output += dictionary[inputArry[i]][languagueIndex] + ' ';
            }
        }
    printToDom(output,'output_field');
}







var dictionary = 
{
    //[1]: Chinese, [2]: French, [3]: Spanish
    merry:['merry','快活','joyeux','alegre'],
    christmas:['christmas','圣诞','Noël','Navidad'],
    and:['and','和','et','y'],
    happy:['happy','快乐','content','contento'],
    new:['new','新','Nouveau','nuevo'],
    year:['year','年','an','año']
}



