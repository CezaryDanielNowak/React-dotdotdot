React-dotdotdot
================
Cross-browser multiline text ellipsis for react

<img src="http://dotdotdot.frebsite.nl/img/preview.png" width="100%" border="0" />


Inspired by:
https://github.com/BeSite/jQuery.dotdotdot

Internally uses:
https://www.npmjs.com/package/clamp-js

Installation
----------------
```
npm install --save react-dotdotdot
```

Sample usage
----------------
```
import React from 'react'
import Dotdotdot from 'react-dotdotdot'

...

render() {
	return (
		<div>
			<Dotdotdot clamp={3}>
				<p>
					Long, long <br />
					content,<br />
					3 lines <br />
					will be shown.
				</p>
			</Dotdotdot>
		</div>
	)
}

```


Dotdotdot props:
----------------
**clamp** (Number | String | 'auto'). This controls where and when to clamp the text of an element. Submitting a number controls the number of lines that should be displayed. Second, you can submit a CSS value (in px or em) that controls the height of the element as a String. Finally, you can submit the word 'auto' as a string. Auto will try to fill up the available space with the content and then automatically clamp once content no longer fits. This last option should only be set if a static height is being set on the element elsewhere (such as through CSS) otherwise no clamping will be done.

**useNativeClamp**: [default: `true`] Use -webkit-line-clamp available in Webkit (Chrome, Safari) only.

**splitOnChars**: [default: `['.', '-', '–', '—', ' ']`] Split on sentences (periods), hypens, en-dashes, em-dashes, and words (spaces).

**animate**: [default: false] animated clamp

**truncationChar**: The character to insert at the end of the HTML element after truncation is performed. This defaults to an ellipsis (…).
  `useNativeClamp` overrides it to default.

**truncationHTML**: String of HTML to use instead of truncationChar

**tagName**: [default: `div`] (String). The type of HTML tag which will wrap the component's content.

Notes
-----------------
React-dotdotdot is simple plugin, if you need more functionality, consider using react-truncate
https://www.npmjs.com/package/react-truncate

Known issues:
-----------------
- react-dotdotdot does not work with text containers with nested markup.
- `padding-bottom` CSS rule breaks clamp
- `line-height` units might be important for React-dotdotdot. We recommend `px` over `em`

Changelog
-----------------
1.3.1
- Update TypeScript definition to add missing props (thanks @tuxracer)
- round line-height value from computed float value - IE11 fix (thanks @YoonjiJang)

1.3.0
- `useNativeClamp` prop is set to false by default, it was causing some issues.
- Comments are not counted as a text anymore
- Remove Github's `potential security vulnerability ` with `react-dom`

1.2.4
- Added TypeScript typings (thanks @vojty and @feimosi)

1.2.3
- Add the option to choose a tag other than `div` (thanks @Kalita-Roman)
- Fix demo on Firefox
- Added `.npmignore` to limit package size

1.2.2
- Revert: Fix break word for long text
- Update documentation

1.2.1
- Update documentation
- Re-trigger clamp on window.load
- Allow for all params to passed to clamp-js (splitOnChars, animate, etc)

1.2.0
- Fix word breaking for long text (issues #21 and #15; Thanks @krzysztofczernek).
- calculate correct height for many childs + clamp: 'auto' (thanks @rurquia)
- Update dependencies to support react 16 (thanks @emersonbroga)

1.0.17
- Support for IE11, Edge and Firefox (thanks, @kkwiatkowski)

1.0.16
- Remove clamp-js from package.json dependencies, as it's not maintained anymore.
- Bugfix for `TypeError: elem.lastChild is null` in Firefox.
