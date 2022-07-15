# Resume

I was sick of using LaTeX to shape my resume, so I built a simple resume bundler using the far more expressive CSS.
While at it, I made it so that I can source the actual contents of my resume through various Markdown files.
This way, it is far easier to move and edit content.

Feel free to give it a go! 
By cloning the repository, setting it up with `npm install`, and running `npm run develop`, you will be able to edit the files to include your personal information or create a new theme.

Note that I am using Webpack to serve an app which updates with filesystem changes.
Exporting the Webpack app will be useless, since it is running a React runtime.
Instead, just use your web browser to print the document! 
`<CTRL>+P` is likely your friend!
