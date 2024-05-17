### Question - 1: **What is Doctype in HTML?**

The declaration is not an `HTML` tag. It is "information" to the browser about what **document type** to expect. It tells the browser which version of the `HTML` we are using.
`<!DOCTYPE html>` means we are using `HTML 5`.

`HTML 5` is the newest version of `HTML`. It brings some new features like semantic tags. It also increases the **SEO** capability.

### Question - 2: **What are semantic tags in HTML?**

Semantic tags in HTML are elements that carry meaning, providing information about the content they enclose. Unlike non-semantic tags like `<div>` and `<span>`, which primarily serve as generic containers, semantic tags convey the structural and logical meaning of the content within them.

Some commonly used semantic tags include:

- `<header>`: Represents the introductory content of a section or page.
- `<nav>`: Defines a section of navigation links.
- `<main>`: Specifies the main content of a document.
- `<article>`: Represents a self-contained piece of content, such as a blog post or article.
- `<section>`: Defines a thematic grouping of content within a document.
- `<aside>`: Represents content related to the primary content, such as sidebars or pull quotes.
- `<footer>`: Represents the footer of a section or page.

Using semantic tags not only makes the HTML code more readable and understandable for developers but also provides valuable information to search engines and assistive technologies, improving accessibility and search engine optimization (SEO) of the web page.

In summary, semantic tags in HTML play a crucial role in structuring and organizing web content, enhancing both human comprehension and machine understanding.

### Question - 3: **What are the differences between `head` and `header` tags?**

| Feature       | `<head>`                                                   | `<header>`                                                                           |
| ------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Purpose       | Contains metadata and links                                | Represents introductory content                                                      |
| Placement     | Typically appears at the beginning of the document         | Often located at the top of a section or page                                        |
| Content       | Includes elements like `<title>`, `<meta>`, `<link>`, etc. | Contains navigational links, logos, introductory text, etc.                          |
| Visibility    | Not visible to users in the browser                        | Visible to users, often displayed at the top of the webpage                          |
| Usage         | Single occurrence in the HTML document                     | Can occur multiple times within a document, representing different sections or pages |
| Semantic Role | Structural and organizational role                         | Communicates the introductory content and navigation structure                       |

### Question - 4: **How would you define HTML `tag` and `element`?**

**HTML tag:**

An HTML tag is a syntax element used to define the structure and appearance on a webpage. Tags are enclosed within angle brackets (<>) and usually come in pairs: an opening tag and a closing tag with content sandwiched in between them. Tags can also be self-closing, meanign they don't require a separate closing tag.

Give examples-

**HTML Elements:**

An HTML element consists of of an opening tag, optional content, and a closing tag(in most cases). It ecompasses everything from the openig tag to the closing tag, including any content or nested elements within. Elements are building blocks of HTML documents and define the structure, semantics, and presentation of the content. Each HTML element contributes to the overall structure and layout of the webpage, and they can be styled and manipulated using CSS adn Javascript.

In summary, HTML tags are individual syntaxt elements used to defien different parts of a webpage, while HTML elements comprise the entire structure and content enclosed within those tags.
