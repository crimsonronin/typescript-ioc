import {HomeViewModelInterface} from './home-view-model-interface';
import {ViewInterface} from '../view-interface';
import {injectable, inject} from 'inversify';

/**
 * Instance is an App controller. Automatically creates
 * model. Creates view if none given.
 */
@injectable()
export class HomeController {
    private model: HomeViewModelInterface;
    private view: ViewInterface;

    constructor(
        @inject('HomeViewModelInterface') model: HomeViewModelInterface,
        @inject('ViewInterface') view: ViewInterface
    ) {
        this.model = model;
        this.view = view;
    }

    public greet(): void {
        this.view.display(this.model.getGreeting());
    }
}
