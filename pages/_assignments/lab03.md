---
layout: assignment-two-column
title: Make an online drawing program
type: lab
abbreviation: Lab 3
draft: 0
points: 6
num: 3
start_date: 2024-03-01
due_date: 2024-03-08
---

<style>
    .caption {
        font-weight: 700;
        margin: 0 0 20px 0;
        text-align: left;
    }

    .medium.frame {
        margin-bottom: 0;
    }

</style>

{:.blockquote-no-margin}
> ## Video Walkthrough
> Sarah has created some tutorial videos for this lab, located in <a href="https://drive.google.com/drive/folders/1CIP8Z983INutQmLRY6IotoHVX-7CzMlQ?usp=drive_link" target="_blank">this Google Drive folder</a>. Quick links:
>
> 1. <a href="https://drive.google.com/file/d/1Svh0Aeby7T3QoO57AVo7ZT2Q9VvnJ4DO/view?usp=sharing" target="_blank">Set up</a>
> 1. <a href="https://drive.google.com/file/d/1ARZBM-MgDEdj8RrLEglhhH52hT18rrm1/view?usp=sharing" target="_blank">Color</a>
> 1. <a href="https://drive.google.com/file/d/16SgwLRI37CxtIpDL8DpMcKvVgr1NGvhR/view?usp=sharing" target="_blank">Size</a>
> 1. <a href="https://drive.google.com/file/d/13Vx-33Un5vFpBK2cm_iB4JfXLfZ0VTUe/view?usp=sharing" target="_blank">Shapes: Circle and Square</a>
> 1. <a href="https://drive.google.com/file/d/1xTIzI5_x5B-7akJKXyfzC2QCpgRp905M/view?usp=sharing" target="_blank">Shapes: Triangle</a>

## Background Readings / References
* <a href="https://www.digitalocean.com/community/tutorials/how-to-write-conditional-statements-in-javascript" target="_blank">How To Write Conditional Statements in JavaScript</a>. <em>Digital Ocean</em>  
* <a href="https://www.w3schools.com/html/html5_canvas.asp" target="_blank">The canvas element</a>. <em>W3Schools</em>  
* Intro to <a href="https://p5js.org/" target="_blank">p5.js</a>
{:.compact}

## Introduction 
Today you are going to create a drawing program as a means to help you practice:
1. Accessing user input from form controls
1. Working with conditional statements
1. Using a third-party library (p5.js) and reading technical documentation.
{:.compact}

When you're done, you will have created something that looks like the video shown below:

<img class="medium frame" src="/spring2024/assets/images/labs/lab03/drawing.gif"/>


## Set Up
Please download the `tutorial08.zip` zip file, extract it, and move the `tutorial08` folder inside of your `csci185/tutorials` folder.

<a href="/spring2024/course-files/labs/lab03.zip" class="nu-button">Download Lab 3 <i class="fas fa-download"></i></a> 

When you're done, please examine the starter files before beginning the assignment.

### index.html
Notice that `index.html` has a reference to the <a href="https://p5js.org/reference/" target="_blank">p5.js</a> library, which has a bunch of functions that we will be using. It also has a reference to `main.js`, which is the JavaScript file that you will be editing.

In the body section, there are two panels. The panel on the left (`<aside></aside>` tag) contains some form controls that allow the user of your drawing program to specify the color, size, and shape of the paintbrush. The panel on the right will eventually hold a `<canvas></canvas>` tag, which is where the user will create their drawing.

```html
<html>
    <head>
        <title>DOM Demo</title>
        <link rel="stylesheet" href="style.css">
        <script src="https://cdn.jsdelivr.net/npm/p5@1.4.2/lib/p5.js" defer></script>
        <script src="main.js" defer></script>
    </head>
    <body>
        <main>
            <aside>
                <label for="color">Color:</label>
                <input type="text" id="color" value="red" />

                <label for="size">Size:</label>
                <input type="text" id="size" value="40" />

                <label for="shape">Shape:</label>
                <select id="shape">
                    <option value="circle">Circle</option>
                    <option value="square">Square</option>
                    <option value="triangle">Triangle</option>
                </select>

            </aside>

            <section id="canvas-holder"> 
                <!-- A canvas element will be inserted here (from main.js) -->
            </section>
        </main>
    
    </body>
</html>
```


### main.js
You will implement the logic of your drawing program in `main.js`. At the top, you will see a function called `setup()` (below), whose job is to create a canvas tag and register it with p5.js. This function is always required, but you do not need to edit it.

```js
function setup() {
    // Code to set up the canvas. Do not edit.
    const canvasEl = document.querySelector('#canvas-holder');
    const canvasWidth = canvasEl.offsetWidth;
    const canvasHeight = canvasEl.offsetHeight; 
    const myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("canvas-holder");
    background('#FFF');
}
```

You will be editing a function called `mouseDragged()` which is invoked anytime a user drags their mouse on the canvas. Currently, no matter what preferences the user has selected in the left-hand panel, the drag will always make a hotpink circle:

```js
function mouseDragged(){
    // Your job:
    // When the user drags the mouse on the canvas, you should honor
    // the color, shape, and size of the paintbrush that are selected
    // in the right-hand panel. Replace the code below with something
    // smarter:
    fill('hotpink');
    circle(mouseX, mouseY, 20);
}
```

## Your Task
Your job is to edit the function body of `mouseDragged()` so that it honors the user's color, shape, and size preferences (see animation above):


### Tips
Within the `mouseDragged()` function:
* Create three variables -- `color`, `shape`, and `size`. Store the value of the user's preferences in these variables.
* Use an if / else if / else statement to figure out which shape to draw
{:.compact}

I have pasted some code below that shows you how to make a triangle, circle, and square using p5.js.

```js
// Samples:

// https://p5js.org/reference/#/p5/circle
fill('pink');
circle(400, 400, 100);   // x, y, diameter

// https://p5js.org/reference/#/p5/square
fill('navy');
square(50, 300, 50);   // x (top left), y (top left), width

// https://p5js.org/reference/#/p5/triangle
fill('teal');
triangle(
    50, 50, // first point
    30, 80, // second point
    70, 80  // third point
)
```

### Optional Assignment Extensions
* Add a fourth shape that a user might choose
* Add the ability for the user to specify the outline color of the shape (currently it defaults to black)
{:.compact}

### Gallery of Inspiration
<div>
    <img class="medium frame" src="/spring2024/assets/images/labs/lab03/drawing01.png"/>
    <p class="caption">
        Credit: Ko Dowling
    </p>
</div>
<div>
<img class="medium frame" src="/spring2024/assets/images/labs/lab03/drawing02.png"/>
    <p class="caption">
        Credit: Isabella Hernandez
    </p>
</div>


## Update your homepage to link to your lab03
Please update your homepage (the index.html page you made on the first day) so that it links to your completed `Lab 3` web pages. See Sarah's <a href="https://vanwars.github.io/ywtech-javascript" target="_blank">example homepage</a> (format the links however you like).