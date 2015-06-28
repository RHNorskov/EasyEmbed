# EasyEmbed
> 0.0.1

EasyEmbed is a jQuery plugin...

### Features
  - YouTube video embedding
  - Standard definition thumbnail fallback

### Initialization
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

######HTML
```
<div data-id="VIDEO_ID" data-easy-embed></div>
```

######JavaScript
```
<div id="easy-embed"></div>
$('#easy-embed').easyEmbed({
    id: 'VIDEO_ID'
});
```
Option | Type | Default | Description
------ | ---- | ------- | -----------
id | string | ScMzIvxBSi4 | ID of the wanted video
controls | boolean | false | Show player controls
info | boolean | false | Show video title and player actions

### Todo's
* Better documentation
* Add option for fixed height and width