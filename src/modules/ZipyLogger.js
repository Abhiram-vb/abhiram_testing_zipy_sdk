export const logMessage = (
  message,
  jsonArg = null,
  maxLength = 75,
  maxJsonSize = null,
) => {
  let logMessage = message;
  let jsonString = '';

  if (jsonArg !== null) {
    try {
      jsonString = JSON.stringify(jsonArg);
      if (maxJsonSize !== null && jsonString.length > maxJsonSize) {
        console.warn('JSON argument size exceeds limit.');
        jsonString = jsonString.substring(0, maxJsonSize);
      }
      logMessage += ' ' + jsonString;
    } catch (error) {
      console.error('Invalid JSON argument: ', error);
    }
  }

  if (logMessage.length > maxLength) {
    console.warn('Log message exceeds length limit.');
    logMessage = logMessage.substring(0, maxLength);
  }

  console.log(logMessage);

  const logData = {
    timestamp: Date.now(),
    message: message,
    jsonContent: jsonString,
  };
  console.log(logData, 'this is the log data');

  // Here we need to write a code to send logData to backend through a specific event.
};

export const logException = (message, exceptionObject, maxLength = 75) => {
  let msg = message.substring(0, maxLength);
  console.log(exceptionObject, 'this is exception object');
  let stackTrace = exceptionObject.stack;
  if (stackTrace) {
    stackTrace = stackTrace.toString();
  } else {
    stackTrace = '';
  }

  console.error(message, exceptionObject);

  const logData = {
    timestamp: Date.now(),
    message: msg,
    stackTrace: stackTrace,
  };
  console.log(logData, 'this is the logdata of the logexception');
  //Here we need to write a code to send logData to backend through a specific event.
};
