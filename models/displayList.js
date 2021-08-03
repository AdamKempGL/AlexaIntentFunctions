const aplDocumentInfo = require('../aplDocumentInfo.json');
let aplDataSourceInfo = require('../apl/aplDataSourceInfo.json');
const aplDocument = require('../aplDocument.json')
let aplDataSource = require('../apl/aplDataSource.json')

const displayList = [
    { 
        name: 'LAUNCH', 
        title: 'Welcome to Adams Alexa Skill', 
        URL: 'https://www.zoomly.co.uk/wp-content/uploads/2018/09/Depositphotos_128917830_l-2015.jpg', 
        description: 'Ask me informtion about Adam Kemp \n who is he \n whats skills does he have \n what qualifications he has \n Contact information',
        speakOutput: 'Welcome to Adams skill you can ask about his work experience, his personal life, or if you need more information ask for help. What would you like to ask?',
        document:aplDocument,
        datasources:aplDataSource
    }, 
    { 
        name: 'WHO', 
        title: 'Who is Adam Kemp?', 
        URL: 'https://i.imgur.com/drR0YNR.jpg', 
        description: 'AI developer /n DOB - 05/08/1998',
        speakOutput: 'Adam is an AI Developer in training. He spends most of his time Coding and refining his skills. He is 23 years old and is very ambitious and looking forward to his future products in the industry. Is there anything else you would like to know?',
        document:aplDocumentInfo,
        datasources:aplDataSourceInfo
    },   
    { 
        name: 'WORK', 
        title: 'Adams work history', 
        URL: 'https://e1.pngegg.com/pngimages/298/527/png-clipart-snoopy.png', 
        description: 'Supervisor - The Sandmartin Pub - Three Years \n Volunteer Teaching Assistant - The Gateway Academy - 1 Year',
        speakOutput: 'Adam has worked three years as a supervisor for a pub called The Sandmartin, while also spending a year teaching computer science and math at a secondary school. What else would you like to know about Adam?',
        document:aplDocumentInfo,
        datasources:aplDataSourceInfo
    },   
    { 
        name: 'QUALIFICATION', 
        title: 'Adams Qualifications', 
        URL: 'https://www.callcentrehelper.com/images/stories/2006/07/qualifications-760.jpg', 
        description: 'A level double applied ICT \n Use of Maths \n food and safety level two',
        speakOutput: 'Adam has an A level in double applied ICT, Use of maths, and has completed an apprentership in food and berverage Level two. What other information would you like to find out?',
        document:aplDocumentInfo,
        datasources:aplDataSourceInfo
    },   
    { 
        name: 'SKILL', 
        title: 'Adams skills', 
        URL: 'https://img.icons8.com/ios/452/development-skill.png', 
        description: 'Building computers \n Team Leader \n Organisation \n Time management',
        speakOutput: 'Adam has spent a lot of time around computers, building computers, and doing IT support for friends and family. What else would you like to ask about Adam?',
        document:aplDocumentInfo,
        datasources:aplDataSourceInfo
    },   
    { 
        name: 'HOBBY', 
        title: 'Adams hobbies', 
        URL: 'https://www.worcester.gov.uk/images/easyblog_shared/2019/b2ap3_large_Football---carousel.jpg', 
        description: 'Watching anime \n Playing competitive games \n Learning new skills',
        speakOutput: 'Adam spends his free time playing competitive team based games, watching japanese anime. What else would you like to ask about Adam?',
        document:aplDocumentInfo,
        datasources:aplDataSourceInfo
    },   
    { 
        name: 'CONTACT', 
        title: 'Adams Contact Information', 
        URL: 'https://financeguru.com/storage/uploads/2020/09/dial-up-1599662236TYeHC.jpg', 
        description: 'Email - Adam.kemp@Geniuslead.com \n Phone Number - 012323443455',
        speakOutput: 'Adam\'s phone number is <say-as interpret-as="telephone">012323443455</say-as> and his email is <say-as interpret-as="spell-out">adamjkemp</say-as>@hotmail.co.uk. Is there anything else you would like to ask?',
        document:aplDocumentInfo,
        datasources:aplDataSourceInfo
    },
    { 
        name: 'JAVASCRIPT', 
        title: 'JAVASCRIPT',
        URL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png', 
        description: 'Adam has done some graphic coding and simple repeatable patterns using javascript but never ventured too deep.', 
        speakOutput: 'Adam has done some graphic coding and simple repeatable patterns using javascript but never ventured too deep.',
        document:aplDocumentInfo,
        datasources:aplDataSourceInfo
    },

    { 
        name: 'PYTHON', 
        title: 'PYTHON',
        URL:'https://preview.redd.it/rxezjyf4ojx41.png?width=640&crop=smart&auto=webp&s=61f4647f327a1fee4554b82965cc8b2e8b208c4f', 
        description: 'Adam has used phyon for creating automatic databases, and simple adds to help with data collection',
        speakOutput: 'Adam has used phyon for creating automatic databases, and simple adds to help with data collection',
        document:aplDocumentInfo,
        datasources:aplDataSourceInfo
    },
    { 
        name: 'C PLUS PLUS', 
        title: 'C PLUS PLUS',
        URL:'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg', 
        description: 'Adam originally started coding using this language but has moved away to try others out and expand his knowledge.',
        speakOutput: 'Adam originally started coding using this language but has moved away to try others out and expand his knowledge.',
        document:aplDocumentInfo,
        datasources:aplDataSourceInfo
    },
    { 
        name: 'C SHARP', 
        title: 'C SHARP',
        URL:'https://w7.pngwing.com/pngs/340/226/png-transparent-purple-and-white-logo-c-computer-programming-software-development-programmer-marklogic-coder-miscellaneous-purple-class.png', 
        description: 'Adam has created a rythum game similar to guitar hero using this language, but used another persons game engine for the ground work.',
        speakOutput: 'Adam has created a rythum game similar to guitar hero using this language, but used another persons game engine for the ground work.',
        document:aplDocumentInfo,
        datasources:aplDataSourceInfo
    },
    { 
        name: 'NODEJS', 
        title: 'NODEJS',
        URL:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png', 
        description: 'Adam has only just started working with this as he is creating this online portfolio using alexa.',
        speakOutput: 'Adam has only just started working with this as he is creating this online portfolio using alexa.',
        document:aplDocumentInfo,
        datasources:aplDataSourceInfo
    },
    { 
        name: 'UNDEFINED', 
        title: 'Adam doesnt know this language',
        URL:'https://adaptastraining.com/wp-content/uploads/2020/06/brain-map.jpg', 
        description: 'Adam doesnt know this language',
        speakOutput: 'Adam doesnt know this language',
        document:aplDocumentInfo,
        datasources:aplDataSourceInfo
    },
    {
        name: 'EXPOSURE',
        title: 'EXPOSURE',
        URL:'https://s3.amazonaws.com/theoatmeal-img/thumbnails/exposure_big.png',
        description: 'Exposure is a thiong that will help you get notice more easily, with creating a voice profile you will stand out from the rest as its a new way to share your CV with others.',
        speakOutput: 'Exposure is a thiong that will help you get notice more easily, with creating a voice profile you will stand out from the rest as its a new way to share your CV with others.',
        document:aplDocumentInfo,
        datasources:aplDataSourceInfo
    },
    {
        name: 'EASEOFUSE',
        title: 'EASEOFUSE',
        URL:'https://thumbs.dreamstime.com/b/text-sign-showing-ease-use-conceptual-photo-user-friendly-easy-to-operate-simple-technology-everybody-text-sign-showing-140256234.jpg',
        description: 'Allows peopel to know about you and learn more about you on the move theres is no need to keep a piece of paper with all the information on since you could ask an alexa device or your own phone and it will give them all the information they would need.',
        speakOutput: 'Allows peopel to know about you and learn more about you on the move theres is no need to keep a piece of paper with all the information on since you could ask an alexa device or your own phone and it will give them all the information they would need',
        document:aplDocumentInfo,
        datasources:aplDataSourceInfo
    },
    { 
        name: 'HELP', 
        title: 'HELP',
        URL:'https://adaptastraining.com/wp-content/uploads/2020/06/brain-map.jpg', 
        description: 'This is a skill for Adam Kemps CV you can ask me about his work or his personal life. what would you like to ask?',
        speakOutput: 'This is a skill for Adam Kemps CV you can ask me about his work or his personal life. what would you like to ask?',
        document:aplDocument,
        datasources:aplDataSource
    }


    ]
    module.exports = { displayList};