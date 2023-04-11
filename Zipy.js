import {ErrorHandling} from './src/modules/ErrorHandling';
import Interceptor from './src/modules/Interceptor';
import NewInterceptor from './src/modules/NewInterceptor';
export {ErrorHandling, Interceptor};
const Zipy = () => {
  ErrorHandling();
  Interceptor((start = new Date().getTime()), true);
  NewInterceptor;
};
export default Zipy;
