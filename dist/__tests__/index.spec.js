"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
describe('src/index.ts', function () {
    test('a. should return the instance type.', function (done) {
        var io = __1.default.instance;
        expect(typeof io).toBe('function');
        done();
    });
});
