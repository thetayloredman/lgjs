# lgjs

## What is lgjs?

lgjs is a Node.js log framework! It's designed to produce machine-readable logs that can be later parsed and read.

## How do I use it?

It's very easy!

```js
import lgjs from 'lgjs';
// OR
import { Logger } from 'lgjs';
```

Then, make an instance of Logger:

```js
//                 Name your logger!
//                      vvvvv
let logger = new Logger('main', {/* options */});
```

To log, use the functions on `Logger`!

```js
//                                  (Optional) location
//                                  vvv
await logger.info('Hello, World!', 'HelloWorldHandler');
```

### Note:

`await` is needed to prevent data corruption.

## How do I read the raw log data?

If you have to, you can read the raw data.

Data is formatted like this, in an array:

```json
{
    "message": "My error message",
    "type": "The type of log",
    "stack": [
        "the",
        "stack",
        "trace",
        "to",
        "the",
        "log"
    ],
    "time": 0, // Date.now() timestamp of time
    "sender": {
        "facility": "Logger name",
        "describer": "Optional, the location argument"
    }
}
```