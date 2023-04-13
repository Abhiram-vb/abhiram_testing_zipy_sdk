import {ErrorHandling} from './src/modules/ErrorHandling';
import FloatingButton from './src/modules/FloatingButton';
import Interceptor from './src/modules/Interceptor';
import NewInterceptor from './src/modules/NewInterceptor';
import {logException, logMessage} from './src/modules/ZipyLogger';
export {ErrorHandling, Interceptor, logException, logMessage, FloatingButton};

const Zipy = () => {
  ErrorHandling();
  Interceptor((start = new Date().getTime()), true);
  NewInterceptor;
};
export default Zipy;
