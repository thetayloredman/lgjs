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
 * Options for a Parser
 */
export interface ParserOptions {
    dir?: string;
    separator?: string;
    verbose?: boolean;
    showStacks?: boolean;
}

/**
 * Solid options for a Parser
 */
export interface SolidOptions {
    dir: string;
    separator: string;
    verbose: boolean;
    showStacks: boolean;
}
