const express = require('express');
const cors = require('cors');
const { scrapeSnapFollowers } = require('./snapchatScrape');
const { scrapeTwitterFollowers } = require('./twitterScrape');
const { scrapeInstaFollowers } = require('./instagramScrape');

const app = express();
app.use(cors());

app.get('/api/snap-followers', async (req, res) => {
    try {
        const followers = await scrapeSnapFollowers();
        const onlyFollowers = followers.split(' ')[0].trim();
        console.log("This is the Snapchat followers: ", onlyFollowers);
        res.json( { followers: onlyFollowers } );
    } 
    catch (error) { 
        console.error(error);
        res.status(500).json({ message: 'Error scraping Snapchat followers' });
    }
});
app.get('/api/twitter-followers', async (req, res) => {
    try {
        const followers = await scrapeTwitterFollowers();
        // const onlyFollowers = followers.split(' ')[0].trim();
        console.log("This is the Twitter followers: ", followers);
        res.json( { followers } );
    } 
    catch (error) { 
        console.error(error);
        res.status(500).json({ message: 'Error scraping Twitter followers' });
    }
});
app.get('/api/insta-followers', async (req, res) => {
    try {
        const followers = await scrapeInstaFollowers();
        // const onlyFollowers = followers.split(' ')[0].trim();
        console.log("This is the Instagram followers: ", followers);
        res.json( { followers } );
    } 
    catch (error) { 
        console.error(error);
        res.status(500).json({ message: 'Error scraping Insta followers' });
    }
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
/*
const server = app.listen(PORT, () => {
    const address = server.address();
    console.log(`Server is listening at http://${address.address}:${address.port}`);
});
*/