var JobCollection = require('../collections/JobCollection');
var moment = require('moment');

var currentDate = moment();

module.exports = new JobCollection([
    {
        id: 1,
        jobTitle: 'Junior Front-End Developer',
        companyName: 'Dallas Codes',
        dateCreated: currentDate,
        dateExpires: moment(currentDate).add(2, 'weeks').calendar(),
        jobLocation: 'Dallas, Texas',
        shortDescription: 'Front-end developer committed to constant learning',
        longDescription: 'Our company is seeking a junior developer who has a start in coding and a big desire to learn more on a closely-formed team',
        qualifications: 'At least one year experience coding and superb problem-soliving skills. Must know how to work with others in a team setting.',
        keywords: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Backbone']
    },
    {
        id: 1,
        jobTitle: 'Junior Video Game Player',
        companyName: 'Austin Plays',
        dateCreated: currentDate,
        dateExpires: moment(currentDate).add(1, 'month').calendar(),
        jobLocation: 'ATX',
        shortDescription: 'Seeking a game-enthusiast to join our ranks',
        longDescription: 'We are in the need of a video game person to sit and play for hours and hours. We provide the coffee and soda, you provide the thumbs.',
        keywords: ['Sega Master System', 'Super Nintendo', 'Sega Genesis', 'Super Famicom']
    },
    {
        id: 3,
        jobTitle: 'Professional Code Samurai',
        companyName: 'Code Warrior Poets',
        dateCreated: currentDate,
        dateExpires: moment(currentDate).add(5, 'days').calendar(),
        shortDescription: 'Do you battle code and philosophize about your role in the world? Do you write...',
        longDescription: 'We are in need of a warrior who nobly rides into the fray with MacBook Pro and MDN in hand. Your enemies should rue the day that they put technical debt in your path.',
        jobLocation: 'Dallas, TX',
        keywords: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'React']
    },
    {
        id: 4,
        jobTitle: 'Remote Engineer Hipster',
        companyName: 'Vintage Glass House',
        dateCreated: currentDate,
        dateExpires: moment(currentDate).add(6, 'month').calendar(),
        shortDescription: 'Looking for a node.js champion who loves long bike rides and Warby Parker glasses...',
        longDescription: 'If you appreciate the finer things in life like a curated desk from the forests of Narnia, then you will fit right in with our corporate culture. We are in need of a remote engineer to disintegrate problems with our codebase.',
        jobLocation: 'Austin, TX',
        keywords: ['HTML/CSS', 'node.js', 'JavaScript', 'jQuery', 'Backbone']
    }
]);
