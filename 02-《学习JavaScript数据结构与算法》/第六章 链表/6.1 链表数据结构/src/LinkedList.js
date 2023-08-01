import {defaultEquals} from './util.js';
import {Node} from './Node.js'

export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }
}