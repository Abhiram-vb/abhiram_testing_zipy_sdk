export const Interceptor = (start, isEnabled) => {
  let method = 'other';
  const originalFetch = fetch;
  fetch = function () {
    end = new Date().getTime();
    console.log('time taken is ', start, end);
    return originalFetch
      .apply(this, arguments)
      .then(function (response) {
        const logNetworkRequests = response => {
          let type = 'other';
          if (response.url.endsWith('.css')) {
            type = 'css';
          } else if (response.url.endsWith('.js')) {
            type = 'js';
          } else if (
            response.url.endsWith('.woff') ||
            response.url.endsWith('.woff2') ||
            response.url.endsWith('.ttf')
          ) {
            type = 'fonts';
          } else if (
            response.url.endsWith('.png') ||
            response.url.endsWith('.jpg') ||
            response.url.endsWith('.jpeg') ||
            response.url.endsWith('.gif')
          ) {
            type = 'images';
          } else if (
            response?.headers?.map['content-type']?.startsWith(
              'application/json',
            )
          ) {
            type = 'xhr';
          }
          return type;
        };
        if (response.url.startsWith('https://your-package-base-url.com')) {
          return response;
        }
        let respData = {
          response_code: response.status,
          method: method,
          url: response.url,
          type: logNetworkRequests(response),
          size: response._bodyBlob._data.size,
          time: end - start,
          headers: response.headers,
        };
        console.log(respData, 'this is the response data we need to send');
        return response;
      })
      .catch(function (error) {
        console.log(`[NETWORK INTERCEPTOR] fetch error: `, error, 'network');
        throw error;
      });
  };

  const originalXhrSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function () {
    method = this._method;
    if (this._url.startsWith('https://your-package-base-url.com')) {
      return originalXhrSend.apply(this, arguments);
    }
    return originalXhrSend.apply(this, arguments);
  };
};

export default Interceptor;
