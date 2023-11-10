System.register([], function (exports_1, context_1) {
    "use strict";
    var Pig;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Pig = class Pig {
                constructor(name, breed, height, weight, personality, category, ability) {
                    this.name = name;
                    this.category = category;
                    this.breed = breed;
                    this.height = height;
                    this.weight = weight;
                    this.personality = personality;
                    this.ability = ability;
                }
            };
            exports_1("Pig", Pig);
        }
    };
});
