# Honkit Back to Top Button Plugin 

This plugin adds a back to top button to your Honkit. All three Honkit themes (White, Sepia, Night) are supported.

## Usage

Add the plugin to your `book.json`:

```
{
	"plugins" : [ "@dogatana/back-to-top-button" ]
}		
```

## Screenshots

The back to top button in action:

![Screenshots](screenshots.png)

## Fork of gitbook-plugin-back-to-top-button

honkit-plugin-back-to-top is a fork of https://github.com/stuebersystems/gitbook-plugin-back-to-top-button

This plugin has more features to customize.

### icon

You can choose button glyph like following.

#### Use another FontAwesome icon

`book.json`

```js
    "pluginsConfig": {
        "back-to-top-button": {
            "icon": "<i class='fa fa-angle-up'></i>"
        }
```

`style sheet`

```css
.back-to-top i {
    font-size: 35px;
    top: 7px;
    left: 14px;
}

```

#### Use text label

`book.json`

```js
    "pluginsConfig": {
        "back-to-top-button": {
            "icon": "<span>TOP</span>"
        }
    }
```

`style sheet`

```css
.back-to-top span {
    position: relative;
    color: white;
    top: 16px;
    left: 11px;
}
```

### animation time

You can specify animation time to move from bottom to top.
Default value is 800 miliseconds.

`book.json`
```js
    "pluginsConfig": {
        "back-to-top-button": {
            "animate": 100;
        }
    }
```
