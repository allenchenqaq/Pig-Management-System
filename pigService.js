System.register([], function (exports_1, context_1) {
    "use strict";
    var PigController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            PigController = class PigController {
                constructor() {
                    this.storeKey = "pig";
                    if (JSON.parse(localStorage.getItem(this.storeKey)) == null) {
                        this.pigs = [];
                    }
                    else {
                        this.pigs = JSON.parse(localStorage.getItem(this.storeKey));
                    }
                    this.typeResult = [];
                    this.nameResult = [];
                }
                add(d) {
                    this.pigs.push(d);
                    localStorage.setItem(this.storeKey, JSON.stringify(this.pigs));
                }
                getAll() {
                    return this.pigs;
                }
                delete(i) {
                    this.pigs.splice(i, 1);
                    localStorage.clear();
                    localStorage.setItem(this.storeKey, JSON.stringify(this.pigs));
                }
            };
            exports_1("PigController", PigController);
        }
    };
});
