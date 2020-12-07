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

import Levels from '../interfaces/Levels';

export default function parseLevel(d: Levels): string {
    if (d === 'default') {
        return 'Default';
    } else if (d === 'info') {
        return 'Info';
    } else if (d === 'notice') {
        return 'Notice';
    } else if (d === 'alert') {
        return 'Alert';
    } else if (d === 'debug') {
        return 'Debug';
    } else if (d === 'warning') {
        return 'Warning';
    } else if (d === 'err') {
        return 'Error';
    } else if (d === 'crit') {
        return 'Critical';
    } else if (d === 'emerg') {
        return 'Emergency';
    } else {
        return '';
    }
}
