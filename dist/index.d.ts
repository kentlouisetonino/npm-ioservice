/// <reference types="node" />
import * as readline from 'node:readline/promises';
export default class IOService {
    static instance(): readline.Interface;
}
