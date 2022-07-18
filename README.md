# Resume

I was sick of using LaTeX to shape my resume, so I built a simple resume bundler using the far more expressive CSS.
While at it, I made it so that I can source the actual contents of my resume through various Markdown files.
This way, it is far easier to move and edit content.

Feel free to clone the repository and give it a go! 

## Development

1. Run `npm install`
2. Run `npm run develop`
3. Edit the appropriate files to include your personal information or create a new theme. The Webpack dev server will propogate changes in a live fashion.

## Build

1. Run `npm install` (if you haven't in development)
2. Run `npm run build`
3. See the `.html` file in the `output` directory; I was lazy about the path prefix, so styling issues may occur.


## I want a pdf!

Just use your web browser to print the document! 
The styling should all work out; `<CTRL>+P` is likely your friend!
