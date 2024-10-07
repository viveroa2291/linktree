const express = require('express');
const cors = require('cors');
const { scrapeSnapFollowers } = require('./snapchatScrape');

const app = express();
app.use(cors());

app.get('/api/snap-followers', async (req, res) => {
    try {
        const followers = await scrapeSnapFollowers();
        const onlyFollowers = followers.split(' ')[0].trim();
        console.log("This is the followers: ", onlyFollowers);
        res.json( { followers: onlyFollowers } );
    } 
    catch (error) { 
        console.error(error);
        res.status(500).json({ message: 'Error scraping followers' });
    }
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));