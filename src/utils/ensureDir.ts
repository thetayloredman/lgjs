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

import * as fs from 'fs/promises';

export default function ensureDir(path: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
        fs.readdir(path)
            .then((files) => {
                resolve(false);
            })
            .catch((e) => {
                if (e.code !== 'ENOENT') {
                    throw new Error(e);
                } else {
                    fs.mkdir(path)
                        .then(() => {
                            resolve(true);
                        })
                        .catch((e) => {
                            throw new Error(e);
                        });
                }
            });
    });
}
