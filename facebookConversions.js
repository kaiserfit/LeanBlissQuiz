// facebookConversions.js

import { post } from 'axios';

const accessToken = 'EAAwkitiYFnYBO3zGv5zDnt8UomufZAKEeycEL3ZCfz1lPISHP0qJAdsptvJHGQ3mmtZALOXLp2UzNfAjxMotXrSArBUZARm6KC8qgHKTJZAwD5ovjjGr1W3zsjyTBihkoX8yefdoQ2okVLsLBKviuRHZAtM6654ZAZC5ypv2lFp1a6aKcOJRndqRkZANT4UsWxC6nawZDZD';
const pixelID = '759662146057719';

// Function to track PageView event
const trackPageView = () => {
  const payload = [
    {
      event_name: 'PageView',
    },
  ];

  sendEventsToFacebook(payload);
};

// Function to track ViewContent event
const trackViewContent = (contentId, contentType, value) => {
  const payload = [
    {
      event_name: 'ViewContent',
      custom_data: {
        content_id: contentId,
        content_type: contentType,
        value: value,
      },
    },
  ];

  sendEventsToFacebook(payload);
};

// Function to send events to Facebook Conversions API
const sendEventsToFacebook = (payload) => {
  const url = `https://graph.facebook.com/v19.0/${pixelID}/events?access_token=${accessToken}`;

  post(url, payload)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error.response.data);
    });
};

export default {
  trackPageView,
  trackViewContent,
};
