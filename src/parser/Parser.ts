/**
 * lgjs | A Node.js log framework
 * Copyright (C) 2020  BadBoyHaloCat
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { ParserOptions, SolidOptions } from '../interfaces/ParserOptions';
import chalk from 'chalk';
import * as fs from 'fs';
import LogEntry from '../interfaces/LogEntry';
import parseLevel from '../utils/parseLevel';

/**
 * Parses log data for display.
 * @class
 */
export default class Parser {
    /**
     * Creates a new Parser.
     * @param options The options passes
     */
    public constructor(options?: ParserOptions) {
        options ??= {};
        options.dir ??= './logs';
        options.separator ??= '';
        options.verbose ??= false;
        options.showStacks ??= false;
        this.options = options as SolidOptions;
    }

    /**
     * The parsed options
     */
    public options: SolidOptions;

    /**
     * Parses the log input
     * @function
     * @returns The parsed log
     */
    public parse(): string {
        const outArr: string[] = [];
        this._log('Starting...');
        this._log(`Reading directory ${this.options.dir}...`);
        const logs = fs.readdirSync(this.options.dir);
        this._log('Found logs:', logs);
        for (let logFile of logs) {
            this._log(`Reading log file ${logFile}...`);
            const data = JSON.parse(fs.readFileSync(`${this.options.dir}/${logFile}`, 'utf8')) as LogEntry[];
            this._log(`Found ${data.length} entries!`);
            const ind = outArr.push('') - 1;
            function appendEntry(txt: string) {
                outArr[ind] += `\n${txt}`;
            }
            this._log('Parsing entries...');
            for (let entry of data) {
                this._log('Parsing entry...');
                appendEntry(this.parseEntry(entry, this.options.showStacks));
            }
        }
        let sep = this.options.separator === '' ? '\n' : `\n${this.options.separator}\n`;

        return outArr.join(sep);
    }

    /**
     * Parse one entry
     * @param d The log entry to parse
     * @param stack Show stacks?
     */
    public parseEntry(d: LogEntry, stack: boolean = false): string {
        let out: string = `[${new Date(d.time).toLocaleString()}]  ${parseLevel(d.type)}  ${d.sender.facility}:  ${
            d.sender.describer !== null ? '(' + d.sender.describer + ')' : ''
        }  ${d.message}`;
        if (stack) {
            for (let i of d.stack) {
                out += `\n    ${i}`;
            }
        }

        return out;
    }

    /**
     * Sends an internal log message
     * @function
     * @private
     * @param data The log data
     */
    private _log(...data: any[]) {
        if (this.options.verbose) {
            console.log(...data);
        }
    }
}
