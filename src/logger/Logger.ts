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

import type LoggerOptions from '../interfaces/LoggerOptions';
import LogFile from './LogFile';
import serialize from '../utils/serialize';
import genStack from '../utils/genStack';

/**
 * Class to represent logging
 * @class
 */
export default class Logger {
    public constructor(facility: string, options?: LoggerOptions) {
        options ??= {};
        this.facility = facility;
        this.file = new LogFile(options.file);
    }

    public facility: string;
    public file: LogFile;

    public log(message: any, describer?: string): void {
        this.file.write({
            message: serialize(message) ?? '',
            type: 'default',
            stack: genStack(),
            time: Date.now(),
            sender: { facility: this.facility, describer: describer ?? null }
        });
    }

    public debug(message: any, describer?: string): void {
        this.file.write({
            message: serialize(message) ?? '',
            type: 'debug',
            stack: genStack(),
            time: Date.now(),
            sender: { facility: this.facility, describer: describer ?? null }
        });
    }

    public info(message: any, describer?: string): void {
        this.file.write({
            message: serialize(message) ?? '',
            type: 'info',
            stack: genStack(),
            time: Date.now(),
            sender: { facility: this.facility, describer: describer ?? null }
        });
    }

    public notice(message: any, describer?: string): void {
        this.file.write({
            message: serialize(message) ?? '',
            type: 'notice',
            stack: genStack(),
            time: Date.now(),
            sender: { facility: this.facility, describer: describer ?? null }
        });
    }

    public warn(message: any, describer?: string): void {
        this.file.write({
            message: serialize(message) ?? '',
            type: 'warning',
            stack: genStack(),
            time: Date.now(),
            sender: { facility: this.facility, describer: describer ?? null }
        });
    }

    public err(message: any, describer?: string): void {
        this.file.write({
            message: serialize(message) ?? '',
            type: 'err',
            stack: genStack(),
            time: Date.now(),
            sender: { facility: this.facility, describer: describer ?? null }
        });
    }

    public crit(message: any, describer?: string): void {
        this.file.write({
            message: serialize(message) ?? '',
            type: 'crit',
            stack: genStack(),
            time: Date.now(),
            sender: { facility: this.facility, describer: describer ?? null }
        });
    }

    public emerg(message: any, describer?: string): void {
        this.file.write({
            message: serialize(message) ?? '',
            type: 'emerg',
            stack: genStack(),
            time: Date.now(),
            sender: { facility: this.facility, describer: describer ?? null }
        });
    }
}
