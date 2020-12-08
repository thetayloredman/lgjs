# API Documentation

## Classes

<dl>
<dt><a href="#LogFile">LogFile</a></dt>
<dd><p>Class to describe I/O with the log files</p>
</dd>
<dt><a href="#Logger">Logger</a></dt>
<dd><p>Class to represent logging</p>
</dd>
<dt><a href="#Parser">Parser</a></dt>
<dd><p>Parses log data for display.</p>
</dd>
</dl>

<a name="LogFile"></a>

## LogFile
Class to describe I/O with the log files

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| baseDir | <code>string</code> | The base directory |
| file | <code>string</code> | The file |
| time | <code>number</code> | The time of creation |


* [LogFile](#LogFile)
    * [new LogFile(options)](#new_LogFile_new)
    * [.write(data)](#LogFile+write)

<a name="new_LogFile_new"></a>

### new LogFile(options)
Creates a new LogFile


| Param | Type | Description |
| --- | --- | --- |
| options | <code>LogFileOptions</code> | Options to pass |

<a name="LogFile+write"></a>

### logFile.write(data)
Write to the file

**Kind**: instance method of [<code>LogFile</code>](#LogFile)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>LogEntry</code> | The data to write |

<a name="Logger"></a>

## Logger
Class to represent logging

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| facility | <code>string</code> | The facility |
| file | [<code>LogFile</code>](#LogFile) | The LogFile written to |


* [Logger](#Logger)
    * [new Logger(facility, [options])](#new_Logger_new)
    * [.log(message, describer)](#Logger+log)
    * [.debug(message, describer)](#Logger+debug)
    * [.info(message, describer)](#Logger+info)
    * [.notice(message, describer)](#Logger+notice)
    * [.warn(message, describer)](#Logger+warn)
    * [.err(message, describer)](#Logger+err)
    * [.crit(message, describer)](#Logger+crit)
    * [.emerg(message, describer)](#Logger+emerg)

<a name="new_Logger_new"></a>

### new Logger(facility, [options])
Creates a new Logger.


| Param | Type | Description |
| --- | --- | --- |
| facility | <code>string</code> | The facility (location) of the logger |
| [options] | <code>LoggerOptions</code> | The options to pass the logger |

<a name="Logger+log"></a>

### logger.log(message, describer)
Sends a normal log message to the file.

**Kind**: instance method of [<code>Logger</code>](#Logger)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>\*</code> | The message to send |
| describer | <code>string</code> | The description of where the log is happening. |

<a name="Logger+debug"></a>

### logger.debug(message, describer)
Sends a debugging log message to the file.

**Kind**: instance method of [<code>Logger</code>](#Logger)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>\*</code> | The message to send |
| describer | <code>string</code> | The description of where the log is happening. |

<a name="Logger+info"></a>

### logger.info(message, describer)
Sends an informational log message to the file.

**Kind**: instance method of [<code>Logger</code>](#Logger)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>\*</code> | The message to send |
| describer | <code>string</code> | The description of where the log is happening. |

<a name="Logger+notice"></a>

### logger.notice(message, describer)
Sends a notice log message to the file.

**Kind**: instance method of [<code>Logger</code>](#Logger)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>\*</code> | The message to send |
| describer | <code>string</code> | The description of where the log is happening. |

<a name="Logger+warn"></a>

### logger.warn(message, describer)
Sends a warning log message to the file.

**Kind**: instance method of [<code>Logger</code>](#Logger)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>\*</code> | The message to send |
| describer | <code>string</code> | The description of where the log is happening. |

<a name="Logger+err"></a>

### logger.err(message, describer)
Sends a error log message to the file.

**Kind**: instance method of [<code>Logger</code>](#Logger)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>\*</code> | The message to send |
| describer | <code>string</code> | The description of where the log is happening. |

<a name="Logger+crit"></a>

### logger.crit(message, describer)
Sends a critical log message to the file.

**Kind**: instance method of [<code>Logger</code>](#Logger)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>\*</code> | The message to send |
| describer | <code>string</code> | The description of where the log is happening. |

<a name="Logger+emerg"></a>

### logger.emerg(message, describer)
Sends an emergency (fatal) log message to the file.

**Kind**: instance method of [<code>Logger</code>](#Logger)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>\*</code> | The message to send |
| describer | <code>string</code> | The description of where the log is happening. |

<a name="Parser"></a>

## Parser
Parses log data for display.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options | <code>SolidOptions</code> | The options parsed |


* [Parser](#Parser)
    * [new Parser(options)](#new_Parser_new)
    * [.parse()](#Parser+parse) ⇒ <code>string</code>

<a name="new_Parser_new"></a>

### new Parser(options)
Creates a new Parser.


| Param | Type | Description |
| --- | --- | --- |
| options | <code>ParserOptions</code> | The options passes |

<a name="Parser+parse"></a>

### parser.parse() ⇒ <code>string</code>
Parses the log input

**Kind**: instance method of [<code>Parser</code>](#Parser)  
**Returns**: <code>string</code> - The parsed log
