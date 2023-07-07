import 'mocha';
import {assert} from 'chai';
import {add} from "../src";


describe('NPM Package', () => {
    it('should 1 add 2 equals 3', () => {
        const a = add(1, 2)
        assert.equal(a, 3);
    });

    it('should 1 add 2 not equals 4', () => {
        const a = add(1, 2)
        assert.notEqual(a, 4);
    });
});