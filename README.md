# EasyEmbed
> 0.0.3

EasyEmbed is a jQuery plugin...

### Features
  - YouTube video embedding
  - Standard definition thumbnail fallback

### Initialization
Initialization can be done in two ways, either by a html data tag, or by JavaScript
######HTML
```
<div data-easy-embed></div>
```

######JavaScript
```
<div id="easy-embed"></div>
$('#easy-embed').easyEmbed();
```

### Options
Options can be applied in the same two ways as the initialization, by html data tags, or by JavaScript
######HTML
```
<div data-id="VIDEO_ID" data-easy-embed></div>
```

######JavaScript
```
$('#easy-embed').easyEmbed({
    id: 'VIDEO_ID'
});
```
Option | Type | Default | Description
------ | ---- | ------- | -----------
id | string | ScMzIvxBSi4 | ID of the wanted video
controls | boolean | false | Show player controls
info | boolean | false | Show video title and player actions
thumbnail | string | 'auto' | Override automatic thumbnail

### Todo's
* Better documentation
* Add option for fixed height and width