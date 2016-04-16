import {injectable} from 'inversify';
import {HomeViewModelInterface} from './home-view-model-interface';

/**
 * Instance is an App controller. Automatically creates
 * model. Creates view if none given.
 */
@injectable()
export class HomeViewModel implements HomeViewModelInterface {
    private greeting:string;

    constructor(greeting:string) {
        this.greeting = greeting;
    }

    public getGreeting():string {
        return this.greeting + ", world!";
    }
}
