module.exports = {
    /**
     * You can poll for multiple pincodes and districts as per your needs.
     */
    pincodes: [671531], // Pincodes to poll
    districts: [['Kerala', 'Kasaragod'], ['Kerala', 'Kannur'], ['Kerala', 'Malappuram']], // State and district to poll.
    age: 18,    // Age limit, 18 or 45
    telegram: {     // Refer https://gist.github.com/mraaroncruz/e76d19f7d61d59419002db54030ebe35
        token: '1836312473:AAHrs5LLQrqk57BXJEa9yBg7tbQVkP-uuDw',
        channelId: '1001264121416',
    }
}
