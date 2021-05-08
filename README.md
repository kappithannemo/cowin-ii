# Cowin Whatsapp Notifier

## What does it do
Specify pincode, age limit(18 or 45) and a mobile number. Whenever slot becomes available for given age at specified pincode, you will receive a message on whatsapp.

## Steps to setup:

1. Run `npm install`.
2. Setup twillio account to enable whatsapp notification. 
    - Signup from https://www.twilio.com/try-twilio
    - Setup whatsapp sandbox from https://www.twilio.com/console/sms/whatsapp/sandbox 
3. Configure `config.js`, refer comments in file.
4. Run `npm run start`.

You will just get a message on whatsapp, message will just contain the pincode where slot has been found. 

## Honor the system
This is an automated task but please be respectful to the system and don't overstress the cowin app by putting cron interval of less than 5 minutes. 
