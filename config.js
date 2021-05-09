module.exports = {
    /**
     * You can poll for multiple pincodes and districts as per your needs.
     */
    pincodes: [301001], // Pincodes to poll
    districts: [['Rajasthan', 'Alwar'], ['Rajasthan', 'Jaipur I'], ['Rajasthan', 'Jaipur II']], // State and district to poll.
    age: 18,    // Age limit, 18 or 45
    telegram: {     // Refer https://gist.github.com/mraaroncruz/e76d19f7d61d59419002db54030ebe35
        token: '',
        channelId: '',
    }
}
