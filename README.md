# adamsintentfunctions
﻿# adamsintentfunctions
This is a file containing the functions used for running APL / Standard card / speakoutput / and a random repromt. This uses lists defined at the top of the page.
this requires a list called displayList.js which will contain name,title,URL, description,speakOutput, document, datasources.
the document and datasources should be linked to the file containing the apldocument and apldatasources respecivly.
the apl files should also be defined at the top of your list file so that it can gather the information.

        var intentName = 'WHO';

        let responseBuilder = intentMethod.canDoAPLFunction(handlerInput, intentName);
        const speakOutput = intentMethod.speakOutputFunction(intentName);
        const repromptText = intentMethod.repromptFunction();
      
this is the code that calls the functions inside this file.
the intentName should be the same as the name: used in your created list, this is how the functions link the intent with the correct information stored in the list.
then the intent name should be passed into the functions to allow them to access the variable created.

        const repromptText = intentMethod.repromptFunction();
        
The reprompt function should have its own list called repromptList.js
This will contain all the different reprompts that you would like to reprompt to the user.
The function will look through the list randomly select one and return it to the user.

        return responseBuilder.speak(speakOutput).reprompt(repromptText).getResponse()
        
This is the return function used to display the information to the user.

    if(intentName != 'LAUNCH' && intentName != 'HELP')
    {
        APLDataSettings(intentData)
    }
    
Inside the intentFunction there is this if statement when running the APL This can be removed if needed.
This code will check to see if the intentName matches any of the intent names listed.
If it matches then the code will skip the function inside which changes the data inside the APL.
This is due to me using 2 different APL's in which the APL for LAUNCH and HELP do not need information changed.

  function APLDataSettings(intentData){

      intentData.datasources.detailImageRightData.image.sources[0].url = `${intentData.URL}`;
      intentData.datasources.detailImageRightData.textContent.locationText.text = `${intentData.description}`;
      intentData.datasources.detailImageRightData.textContent.primaryText.text = `${intentData.title}`;
  };
  
This is the code that changes the data inside the APL.
after the = and the intentData.datasources will get the information from inside the list you have created.
the middle section should be changed to match the APL you are using so that the code will change the correct information.

  function speakOutputFunction(intentName){
      const intentData = helperMethod.search(intentName, displayList);
      var speakOutput = intentData.speakOutput
      return speakOutput;
  };

  function repromptFunction(){
      const repromptExist = repromptList[Math.floor(Math.random() * repromptList.length)];
      const repromptText = repromptExist.description;
      return repromptText;
  };
  
these lines of code are what selects and displays the information for the speakoutput and reprompt returns.
this is where you would input any voice changes you want to implement as this will make the changes to any voice outputs you have run through these functions.