import {useEffect} from 'react';
import {ErrorHandling} from './src/modules/ErrorHandling';
import FloatingButton from './src/modules/FloatingButton';
import Interceptor from './src/modules/Interceptor';
import {logException, logMessage} from './src/modules/ZipyLogger';
import {createTable} from './src/modules/SqlHandling';
export {
  ErrorHandling,
  Interceptor,
  logException,
  logMessage,
  FloatingButton,
  GeastureCapture,
};
import GeastureCapture from './src/modules/GeastureCapture';
const Zipy = () => {
  ErrorHandling();
  Interceptor((start = new Date().getTime()), true);
  // NewInterceptor;
  useEffect(createTable, []);
};
export default Zipy;
