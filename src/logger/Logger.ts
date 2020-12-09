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
import Parser from '../parser/Parser';

/**
 * Class to represent logging
 * @class
 * @property {string} facility The facility
 * @property {LogFile} file The LogFile written to
 */
export default class Logger {
    /**
     * Creates a new Logger.
     * @param {string} facility The facility (location) of the logger
     * @param {LoggerOptions} [options] The options to pass the logger
     */
    public constructor(facility: string, options?: LoggerOptions) {
        options ??= {};
        this.facility = facility;
        this.file = new LogFile(options.file);
        this.doLog = options.log ?? false;
    }

    public facility: string;
    public file: LogFile;
    public doLog: boolean;

    /**
     * Sends a normal log message to the file.
     * @param {*} message The message to send
     * @param {string} describer The description of where the log is happening.
     */
    public log(message: any, describer?: string): void {
        this.file.write({
            message: serialize(message) ?? '',
            type: 'default',
            stack: genStack(),
            time: Date.now(),
            sender: { facility: this.facility, describer: describer ?? null }
        });
        if (this.doLog) {
            const temp = new Parser();
            console.log(
                temp.parseEntry({
                    message: serialize(message) ?? '',
                    type: 'default',
                    stack: genStack(),
                    time: Date.now(),
                    sender: { facility: this.facility, describer: describer ?? null }
                })
            );
        }
    }

    /**
     * Sends a debugging log message to the file.
     * @param {*} message The message to send
     * @param {string} describer The description of where the log is happening.
     */
    public debug(message: any, describer?: string): void {
        this.file.write({
            message: serialize(message) ?? '',
            type: 'debug',
            stack: genStack(),
            time: Date.now(),
            sender: { facility: this.facility, describer: describer ?? null }
        });
        if (this.doLog) {
            const temp = new Parser();
            console.log(
                temp.parseEntry({
                    message: serialize(message) ?? '',
                    type: 'debug',
                    stack: genStack(),
                    time: Date.now(),
                    sender: { facility: this.facility, describer: describer ?? null }
                })
            );
        }
    }

    /**
     * Sends an informational log message to the file.
     * @param {*} message The message to send
     * @param {string} describer The description of where the log is happening.
     */
    public info(message: any, describer?: string): void {
        this.file.write({
            message: serialize(message) ?? '',
            type: 'info',
            stack: genStack(),
            time: Date.now(),
            sender: { facility: this.facility, describer: describer ?? null }
        });
        if (this.doLog) {
            const temp = new Parser();
            console.log(
                temp.parseEntry({
                    message: serialize(message) ?? '',
                    type: 'info',
                    stack: genStack(),
                    time: Date.now(),
                    sender: { facility: this.facility, describer: describer ?? null }
                })
            );
        }
    }

    /**
     * Sends a notice message to the file.
     * @param {*} message The message to send
     * @param {string} describer The description of where the log is happening.
     */
    public notice(message: any, describer?: string): void {
        this.file.write({
            message: serialize(message) ?? '',
            type: 'notice',
            stack: genStack(),
            time: Date.now(),
            sender: { facility: this.facility, describer: describer ?? null }
        });
        if (this.doLog) {
            const temp = new Parser();
            console.log(
                temp.parseEntry({
                    message: serialize(message) ?? '',
                    type: 'notice',
                    stack: genStack(),
                    time: Date.now(),
                    sender: { facility: this.facility, describer: describer ?? null }
                })
            );
        }
    }

    /**
     * Sends a warning log message to the file.
     * @param {*} message The message to send
     * @param {string} describer The description of where the log is happening.
     */
    public warn(message: any, describer?: string): void {
        this.file.write({
            message: serialize(message) ?? '',
            type: 'warning',
            stack: genStack(),
            time: Date.now(),
            sender: { facility: this.facility, describer: describer ?? null }
        });
        if (this.doLog) {
            const temp = new Parser();
            console.log(
                temp.parseEntry({
                    message: serialize(message) ?? '',
                    type: 'warning',
                    stack: genStack(),
                    time: Date.now(),
                    sender: { facility: this.facility, describer: describer ?? null }
                })
            );
        }
    }

    /**
     * Sends an error log message to the file.
     * @param {*} message The message to send
     * @param {string} describer The description of where the log is happening.
     */
    public err(message: any, describer?: string): void {
        this.file.write({
            message: serialize(message) ?? '',
            type: 'err',
            stack: genStack(),
            time: Date.now(),
            sender: { facility: this.facility, describer: describer ?? null }
        });
        if (this.doLog) {
            const temp = new Parser();
            console.log(
                temp.parseEntry({
                    message: serialize(message) ?? '',
                    type: 'err',
                    stack: genStack(),
                    time: Date.now(),
                    sender: { facility: this.facility, describer: describer ?? null }
                })
            );
        }
    }

    /**
     * Sends a critical log message to the file.
     * @param {*} message The message to send
     * @param {string} describer The description of where the log is happening.
     */
    public crit(message: any, describer?: string): void {
        this.file.write({
            message: serialize(message) ?? '',
            type: 'crit',
            stack: genStack(),
            time: Date.now(),
            sender: { facility: this.facility, describer: describer ?? null }
        });
        if (this.doLog) {
            const temp = new Parser();
            console.log(
                temp.parseEntry({
                    message: serialize(message) ?? '',
                    type: 'crit',
                    stack: genStack(),
                    time: Date.now(),
                    sender: { facility: this.facility, describer: describer ?? null }
                })
            );
        }
    }

    /**
     * Sends an emergency (fatal) log message to the file.
     * @param {*} message The message to send
     * @param {string} describer The description of where the log is happening.
     */
    public emerg(message: any, describer?: string): void {
        this.file.write({
            message: serialize(message) ?? '',
            type: 'emerg',
            stack: genStack(),
            time: Date.now(),
            sender: { facility: this.facility, describer: describer ?? null }
        });
        if (this.doLog) {
            const temp = new Parser();
            console.log(
                temp.parseEntry({
                    message: serialize(message) ?? '',
                    type: 'emerg',
                    stack: genStack(),
                    time: Date.now(),
                    sender: { facility: this.facility, describer: describer ?? null }
                })
            );
        }
    }
}
