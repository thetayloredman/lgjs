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

import type LogFileOptions from '../interfaces/LogFileOptions';
import { ensureDir, ensureFile } from '../utils/ensure';
import * as fs from 'fs';
import LogEntry from '../interfaces/LogEntry';

/**
 * Class to describe I/O with the log files
 * @class
 */
export default class LogFile {
    /**
     * Creates a new LogFile
     * @param options Options to pass
     */
    public constructor(options?: LogFileOptions) {
        if (!options) options = {};
        this.baseDir = options.logsDir ?? './logs';
        // @ts-ignore
        global.__lgjs__initDate__ ??= Date.now();
        // @ts-ignore
        this.time = global.__lgjs__initDate__;
        this.file = `${this.baseDir}/${this.time}.json`;
        this._init();
    }

    /**
     * The base directory for the logs
     */
    public baseDir: string;
    /**
     * The log file
     */
    public file: string;
    /**
     * The time the LogFile was initialized
     */
    public time: number;

    /**
     * Makes the base directory for the LogFile
     * @private
     * @function
     */
    private _init(): void {
        ensureDir(this.baseDir);
        ensureFile(this.file, JSON.stringify([]));
    }

    /**
     * Write to the file
     * @param data The data to write
     */
    public write(data: LogEntry): void {
        const text = JSON.parse(fs.readFileSync(this.file, 'utf8'));
        text.push(data);
        fs.writeFileSync(this.file, JSON.stringify(text));
    }
}
