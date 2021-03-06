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

import type Levels from './Levels';

/**
 * Represents a log's entry
 */
export default interface LogEntry {
    message: string; // the log message
    type: Levels; // the log type
    stack: string[]; // the stack trace
    time: number; // the timestamp
    sender: {
        // sender info
        facility: string; // the item like "cored: "
        describer: string | null; // the "(section)" after facility
    };
}
