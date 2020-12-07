/**
 * lgjs | A Node.js log framework
 * Copyright (C) <year>  <name of author>
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
const fsp = fs.promises;

/**
 * Class to describe I/O with the log files
 * @class
 */
export default class LogFile {
    /**
     * Creates a new LogFile
     * @param {LogFileOptions} options Options to pass
     */
    public constructor(options: LogFileOptions) {
        if (!options) options = {};
        this.baseDir = options.logsDir ?? './logs';
        this.time = Date.now();
        this.file = `${this.baseDir}/${this.time}.json`;
        this._init();
    }

    public baseDir: string;
    public file: string;
    public time: number;

    /**
     * Makes the base directory for the LogFile
     * @private
     * @function
     */
    private _init(): void {
        ensureDir(this.baseDir);
        ensureFile(this.file, JSON.stringify([]))
    }

    /**
     * Write to the file
     */
    public async write(data: { [key: string]: any }): Promise<void> {
        return new Promise(async (resolve, reject) => {
            const text = JSON.parse(await fsp.readFile(this.file, 'utf8'));
            text.push(data);
            const s = fs.createWriteStream(this.file);
            await s.write(JSON.stringify(text))
            await s.close();
            resolve();
        });
    }
}
