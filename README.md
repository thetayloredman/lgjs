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
let logger = new Logger('main', {
    /* options */
});
```

To log, use the functions on `Logger`!

```js
//                            (Optional) location
//                                  vvv
logger.info('Hello, World!', 'HelloWorldHandler');
```

## How do I read the raw log data?

If you have to, you can read the raw data.

Data is formatted like this, in an array:

```json
{
    "message": "My error message",
    "type": "The type of log",
    "stack": ["the", "stack", "trace", "to", "the", "log"],
    "time": 0, // Date.now() timestamp of time
    "sender": {
        "facility": "Logger name",
        "describer": "Optional, the location argument"
    }
}
```

## Parsing log data

Log data can be parsed by the `Parser` export.

```js
import { Parser } from 'lgjs';
```

Now, create a Parser:

```js
const parser = new Parser({
    /* options */
});
```

### Options:

| Key          | Optional | Default  | Description                                                                |
| ------------ | -------- | -------- | -------------------------------------------------------------------------- |
| `dir`        | Yes      | `./logs` | The directory to read logs from, **avoid trailing slashes.**               |
| `separator`  | Yes      | `''`     | Separate log files with this string, newlines will be added automatically. |
| `verbose`    | Yes      | `false`  | `console.log()` verbose output while parsing?                              |
| `showStacks` | Yes      | `false`  | Show stack traces to every log?                                            |

### Parsing logs

Once you've set up a Parser, you can parse logs like this:

```js
parser.parse();
```

## Docs

See [DOCS.md](DOCS.md) for the documentation!
