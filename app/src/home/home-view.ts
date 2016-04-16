import {injectable} from 'inversify';
import {ViewInterface} from '../view-interface';

/**
 * Instance is a message logger; outputs messages to console.
 */
@injectable()
export class HomeView implements ViewInterface {
    public display(msg:string):void {
        console.log(msg);
    }
}
