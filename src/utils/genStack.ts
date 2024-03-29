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

/**
 * Generates a stack trace
 * @returns The stack trace
 * @private
 */
export default function genStack(): string[] {
    const tempErr = new Error();
    const stack = (tempErr.stack ?? '').split('\n');
    stack.shift();
    stack.forEach((v, i) => {
        stack[i] = v.trim();
    });
    return stack;
}
