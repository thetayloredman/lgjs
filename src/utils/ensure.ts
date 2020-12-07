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

import * as fs from 'fs';

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