import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: '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 OAUTH-TOKEN',
  },
});

export const trending = axios.create({
  baseURL: 'https://gh-trending-api.herokuapp.com',
  headers: {
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
