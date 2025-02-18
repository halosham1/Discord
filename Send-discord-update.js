const axios = require('axios');

const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
const message = {
    content: "New update on the website! Check the latest changes."
};

axios.post(webhookUrl, message)
    .then(response => {
        console.log('Webhook sent successfully:', response.data);
    })
    .catch(error => {
        console.error('Error sending webhook:', error);
    });
