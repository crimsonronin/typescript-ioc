import {HomeController} from './home/home-controller';
import kernal from './inversify.config';

/*
 * Factory function. Returns a default first app.
 */
export default function defaultGreeter() {

    //kernal.get<HomeController>('HomeController');
}
