# fetch-from-script-tag

This is a simple library making it very easy to make [fetch](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) calls from any HTML page. It uses [fetch](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch), and the init object matches [fetch](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) exactly.

This library is able to be hosted by yourself, but it is also available from jsdelivr at this url:

`https://cdn.jsdelivr.net/npm/fetch-from-script-tag/dist/index.min.js`

You can add a specific version like so (recommended for production):

`https://cdn.jsdelivr.net/npm/fetch-from-script-tag@1.0.0/dist/index.min.js`

## Usage

### Parameters

-   url: Required, this is the url to be called by fetch. This is always given through the `data-url` attribute.
-   init: Optional, this has various ways to be handed in, detailed below.

### Examples

It is recommended to run this script with `async` so it does not block the page render.

#### Simple - No init object

The simplest possible example is:

```html
<script
    async
    src="https://cdn.jsdelivr.net/npm/fetch-from-script-tag/dist/index.min.js"
    data-url="https://reqres.in/api/users?delay=1"
></script>
```

This is unlikely to be your use case, as GETting without caring about the response is rare, so will likely need an init object to POST, PUT, etc.

There are two ways to create an init object:

#### Init Object - JSON string

If you have a JSON string prepared, you can pass it in like so:

```html
<script
    async
    src="https://cdn.jsdelivr.net/npm/fetch-from-script-tag/dist/index.min.js"
    data-url="https://reqres.in/api/users?delay=1"
    data-init="{\"method\": \"POST\", \"data\": {\"testData\": \"theData\"}}"
></script>
```

This is less common, as stringifying in templating languages is rare.

#### Init Object - JSON object

You can also provide a JSON object through an `application/json` script, like so:

```html
<script id="anyIdYouLike" type="application/json">
    { "method": "POST", "data": { "testData": "theData" } }
</script>
<script
    async
    src="https://cdn.jsdelivr.net/npm/fetch-from-script-tag/dist/index.min.js"
    data-url="https://reqres.in/api/users?delay=1"
    data-init-element-id="anyIdYouLike"
></script>
```

This is more likely to be how this is used, as most templating languages have this built in, here is a liquid example:

```html
<script id="anyIdYouLike" type="application/json">
    { "method": "POST", "data": {{ item | json }} }
</script>
<script
    async
    src="https://cdn.jsdelivr.net/npm/fetch-from-script-tag/dist/index.min.js"
    data-url="https://reqres.in/api/users?delay=1"
    data-init-element-id="anyIdYouLike"
></script>
```
