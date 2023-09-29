# Email Faux Absolute & background image Generator


This generator allows, like backgrounds.cm, to develop a background image for email.
In addition to this, you can also move elements and overlap them to create absolute vertical and horizontal positioning.

Fields:

- **Media Query**  Maximum Width: Here you can set the maximum width of your media query, which matches the width of your template.
- **Your image** : place the URL of your image here
- **Image width** : You can leave it the same size as the maximum width of the media query, or shrink it to create a false absolute horizontal.
- **class for image container** : this class will be particularly targeted for moving the image.
- **Image background color** : For email clients that block images by default, provide a background color.
- **Class for your internal div** : here you can add your own class name, it will be targeted to move the text block
- **Desktop Inner div Top Position** : here put the value with which you want to move the text block vertically and create an overlay
- **Desktop Inner Div Width** : Set the width of your text frame
- **Inner div Background-color** : sets the background color of your text block
- **Center everything on the desktop?**  If you uncheck this box, the desktop content will be shifted to the left and you will be able to add a left margin to the image or text block, so you can create a fake absolute horizontal layout. You can move the image and text block from left to right. Depending on the size and format of your image, you can easily create a false horizontal absolute layout.

Same thing in the mobile General Settngs

**Code block** : grab the html code
**Css block** : grab the css code !


The green button above the preview allows you to switch from the desktop version to the mobile version.

The text block is only there for the preview and to better visualize the positioning of the block. It will not be present in the code

Given the difficulty, this tool will not be suitable for all types of layouts, and certain bugs may be observed here and there on different email clients. However, it is flexible enough to offer you a basic code, sufficient in the majority of cases, but which you can very easily adapt to your problem.

The main email clients causing problems are T-Online, Web.de Wall!mail, GMX.

Namely, this tool uses vml code to display an equivalent rendering on Outlook. The vml by definition is not accessible. The text in some cases will therefore not be interpreted by screen readers. If vertical positioning is sufficient for you, and accessibility is a priority, then please look at my [other generator](https://matthieusolente.github.io/mso-faux-absolute-generator/ ) . The latter uses simple mso properties and therefore remains fully accessible;
