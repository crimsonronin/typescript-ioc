/// <reference path='../../typings/tsd.d.ts' />
import 'reflect-metadata';
import { injectable, inject, Kernel } from 'inversify';

interface INinja {
    fight(): string;
    sneak(): string;
}

interface IKatana {
    hit(): string;
}

interface IShuriken {
    throw();
}

@injectable()
class Katana implements IKatana {
    public hit() {
        return 'cut!';
    }
}

@injectable()
class Shuriken implements IShuriken {
    public throw() {
        return 'hit!';
    }
}

@injectable()
class Ninja implements INinja {

    private _katana: IKatana;
    private _shuriken: IShuriken;

    public constructor(
        @inject('IKatana') katana: IKatana,
        @inject('IShuriken') shuriken: IShuriken
    ) {
        this._katana = katana;
        this._shuriken = shuriken;
    }

    public fight() {
        return this._katana.hit();
    };

    public sneak() {
        return this._shuriken.throw();
    };
}

var kernel = new Kernel();
kernel.bind<INinja>('INinja').to(Ninja);
kernel.bind<IKatana>('IKatana').to(Katana);
kernel.bind<IShuriken>('IShuriken').to(Shuriken);

var ninja = kernel.get<INinja>('INinja');
console.log(ninja.fight());