import axios from 'axios';

const interceptor = axios.interceptors.request.use(config => {
  return config;
});
const logNetworkRequests = response => {
  let type = 'other';
  if (response?.config?.url?.endsWith('.css')) {
    type = 'css';
  } else if (response?.config?.url?.endsWith('.js')) {
    type = 'js';
  } else if (
    response?.config?.url?.endsWith('.woff') ||
    response?.config?.url?.endsWith('.woff2') ||
    response?.config?.url?.endsWith('.ttf')
  ) {
    type = 'fonts';
  } else if (
    response?.config?.url?.endsWith('.png') ||
    response?.config?.url?.endsWith('.jpg') ||
    response?.config?.url?.endsWith('.jpeg') ||
    response?.config?.url?.endsWith('.gif')
  ) {
    type = 'images';
  } else if (
    response?.headers['content-type']?.startsWith('application/json')
  ) {
    type = 'xhr';
  }
  return type;
};
axios.interceptors.response.use(
  response => {
    let respData = {
      response_code: response?.status,
      method: response?.request?._method,
      url: response?.request?._url,
      type: logNetworkRequests(response),
      size: response?.request?.responseHeaders['content-length'],
      time: Object.values(response.request?._performanceLogger?._timespans)[0]
        ?.totalTime,
      headers: response.headers,
    };
    console.log(
      respData,
      'this is the response data we need to send to clinet api',
    );
    return response;
  },
  error => {
    console.log('Error Response:', error.response);
    throw error;
  },
);

export default interceptor;
