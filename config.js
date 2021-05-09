module.exports = {
    twilio: {   // Get twilio details(accountSid, authToken) from https://console.twilio.com
        accountSid: '',
        authToken: '',
    },
    whatsapp: '+919999999999',  // whatsapp should be same number which you used to setup twilio sandbox, append +91
    pincodes: [302017], // Pincodes where slots are needed to be found
    districts: [['Rajasthan', 'Jaipur I'], ['Rajasthan', 'Jaipur II']], // State and district, you can choose to specify anyone or both out of pincodes and districs.
    age: 18,    // Age limit, 18 or 45
}
