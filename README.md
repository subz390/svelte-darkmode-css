# svelte-darkmode-css

- Svelte Darkmode CSS is for the https://svelte.dev/docs website.
- The edits in `svelte-docs-dark.css` are created for inheritence overwrite.
- `svelte-logo-horizontal.svg` is edited for use in the darkmode.

## userscript version
- `svelte-darkmode-css.user.js` contains the css and svg images in a single file userscript format.
- the userscript injects the css and pins the light/dark button at the top left of the page.
- I'm using [Tampermonkey](https://www.tampermonkey.net/) userscript host in Firefox.

### how to install
  1. first install the [Tampermonkey](https://www.tampermonkey.net/) browser plugin
  2. then open [svelte-darkmode-css.user.js](https://github.com/subz390/svelte-darkmode-css/raw/master/svelte-darkmode-css.user.js) and Tampermonkey will open a browser window with prompts to install the script.
  3. After that navigate to the https://svelte.dev/docs website.  
