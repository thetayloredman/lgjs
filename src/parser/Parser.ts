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

export default class Parser {
    public constructor(options?: ParserOptions) {
        options ??= {};
        options.dir ??= './logs';
        options.color ??= false;
        options.separator ??= '';
        options.verbose ??= false;
        options.showStacks ??= false;
        this.options = options as SolidOptions;
    }

    public options: SolidOptions;

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
                appendEntry(
                    `[${new Date(entry.time).toLocaleString()}]  ${parseLevel(entry.type)}  ${entry.sender.facility}:  ${
                        entry.sender.describer !== null ? '(' + entry.sender.describer + ')' : ''
                    }  ${entry.message}`
                );
                if (this.options.showStacks) {
                    for (let i of entry.stack) {
                        appendEntry(`    ${i}`);
                    }
                }
            }
        }
        let sep = this.options.separator === '' ? '\n' : `\n${this.options.separator}\n`;

        return outArr.join(sep);
    }

    private _log(...data: any[]) {
        if (this.options.verbose) {
            console.log(...data);
        }
    }
}
