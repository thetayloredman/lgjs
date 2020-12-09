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

/** @hidden */
import * as fs from 'fs';

/**
 * Ensures that a folder exists
 * @param path The path to ensure
 */
export function ensureDir(path: string): void {
    try {
        fs.readdirSync(path);
    } catch (e) {
        if (e.code !== 'ENOENT') {
            throw new Error(e);
        } else {
            fs.mkdirSync(path);
        }
    }
}

/**
 * Ensures that a file exists
 * @param path The path to ensure
 * @param defaultContent The content to put in
 */
export function ensureFile(path: string, defaultContent: string = ''): void {
    try {
        fs.readFileSync(path);
    } catch (e) {
        if (e.code !== 'ENOENT') {
            throw new Error(e);
        } else {
            fs.writeFileSync(path, defaultContent);
        }
    }
}
