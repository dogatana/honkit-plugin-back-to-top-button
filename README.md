# Gitbook Back to Top Button Plugin [![npm version](https://badge.fury.io/js/gitbook-plugin-back-to-top-button.svg)](https://badge.fury.io/js/gitbook-plugin-back-to-top-button)

This plugin adds a back to top button to your GitBook. All three GitBook themes (White, Sepia, Night) are supported.

## Usage

Add the plugin to your `book.json`:

```
{
	"plugins" : [ "back-to-top-button" ]
}		
```

## Screenshots

The back to top button in action:

![Screenshots](https://raw.githubusercontent.com/stuebersystems/gitbook-plugin-back-to-top-button/master/screenshots.png)

## Configuration

You can choose button glyph like following.

### Use another FontAwesome icon

```json
    "pluginsConfig": {
        "back-to-top-button": {
            "icon": "<i class='fa fa-angle-up'></i>"
        }
```

```css
.back-to-top i {
    font-size: 35px;
    top: 7px;
    left: 14px;
}

```

```json
    "pluginsConfig": {
        "back-to-top-button": {
            "icon": "<span>TOP</span>"
        }
    }
```

```css
.back-to-top span {
    position: relative;
    color: white;
    top: 16px;
    left: 11px;
}
```

## Changelog


* 0.1.4 First release as honkit-plugin-back-to-top-button
