import { fetch } from 'undici';

const getFile = async (url) => {
  try {
    const response = await fetch(url);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}


getFile('https://example.com');