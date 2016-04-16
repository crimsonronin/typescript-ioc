import {Kernel} from 'inversify';

import {HomeController} from '././home/home-controller';
import {HomeView} from './home/home-view';
import {HomeViewModel} from './home/home-view-model';
import {HomeViewModelInterface} from './home/home-view-model-interface';
import {ViewInterface} from './view-interface';

var kernel = new Kernel();

kernel.bind<HomeViewModelInterface>('HomeViewModelInterface').to(HomeViewModel);
kernel.bind<ViewInterface>('ViewInterface').to(HomeView);
kernel.bind<HomeController>('HomeController').to(HomeController);

export default kernel;
