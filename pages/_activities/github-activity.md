---
layout: two-column
title: Publish your first web page using GitHub
type: activity
abbreviation: Activity 2
draft: 1
num: 2
---

<!-- 
TODO for next time:
git config --global user.name "Sarah"
git config --global user.email "my_email@gmail.com"

On Mac, people had to install XCode Tools
-->
<style>
    img {
        max-width: 750px;
        width: 60%;
        border: solid 1px #000;
    }
    img.large {
        max-width: 100%;
        width: 100%;
        border: solid 1px #000;
    }
    .schematic {
        border: none;
        max-width: 850px;
        width: 70%;
        display: block;
        margin: auto;
    }
    table.instructions td, table.instructions th {
        font-size: 1.0em;
    }
    table.instructions td:first-child {
        white-space: nowrap;
    }
    ul.spaced li, ol.spaced li {
        margin-bottom: 25px;
    }

</style>


{:.blockquote-no-margin}
> ## Activity Overview
> Today, you will be publishing the web page you made in tutorial02 to GitHub. To do this, please complete the following:
>
> 1. [Complete the suggested background readings](#part1)
> 1. [Install git](#part2)
> 1. [Register for GitHub](#part3)
> 1. [Configure the Git / Visual Studio Code Plugin](#part4)
> 1. [Configure Git Pages](#part5)


{:#part1}
## 1. Suggested Readings
It is recommended that you complete the following readings / videos:
1. [Intro to git and GitHub](https://medium.com/the-underdog-writing-project/introduction-to-git-and-github-a5fdf5633923). A little technical, but useful.
2. [Using GitHub with Visual Studio Code](https://youtu.be/i_23KUAEtUM). How we will be using GitHub in this class.

{:#part2}
## 2. Install Git (Skip -- you've already done this)
Follow these instructions: <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" target="_blank">https://git-scm.com/book/en/v2/Getting-Started-Installing-Git</a>.

{:#part3}
## 3. Register for an account on GitHub (Skip -- you've already done this)
If you don’t already have a GitHub account, register for one: <a href="https://github.com/" target="_blank">https://github.com/join</a>.

Please **remember your password** -- particularly if you are using the computer lab computers (as you will continually be prompted to enter it).

{:#part4}
## 4. Configure the Git / Visual Studio Code Plugin

### 1. Tell the system who you are  (skip -- you've already done this)
Tell your computer who you are on Git by running the following commands in GitBash (Windows) or in the Terminal (Mac):

```bash
git config --global user.name "<Your Name>"
git config --global user.email "<your_username>@unca.edu"
```

Please use **your name**, and the **email you used when registering with GitHub**.

### 2. Verify your file structure

Please ensure that your `ywtech-javascript` folder looks kind of like this:

```shell
ywtech-javascript
    ├── exercises
    │   └──── exercise01
    ├── homework
    ├── labs
    └── index.html
```

Make sure your `ywtech-javascript` folder, `exercises` folder, `homework` folder, and `labs` folder looks exactly like the one shown above. This is very important. Ask Sarah if you're unsure whether your folder nesting is correct..

### 3. Initialize a Git Repository
After you've doublechecked your file structure, open your entire `ywtech-javascript` folder in VS Code. Your file list should look like this (click on the icon that looks like two pieces of paper in the upper left-hand corner of your screen):

<img class="large" src="/spring2024/assets/images/activities/github-activity/ss1.png" />

Next, click on the icon that looks like a tree branch, and click the blue button that says "Initialize Repository":

<img class="large" src="/spring2024/assets/images/activities/github-activity/ss2.png" />

You have now created a git repository on your computer in the same folder as your `csci185` folder. Now, you will want to "stage" all of your changes. Click the button with the three dots, then select "Changes", and then "Stage All changes":

<img class="large" src="/spring2024/assets/images/activities/github-activity/ss3.png" />

After you "stage" your changes, you will note that the left-hand panel has changed. Specifically:

{:.compact}
* The panel lists all of the files that are "staged" to be committed, with an "A" next to each file (indicating that you are adding the files for the first time). 
* To commit these changes, type a message in the text box that says "My First Commit" and then click the check button to actually issue the commit:

<img class="large" src="/spring2024/assets/images/activities/github-activity/ss4.png" />

Afterwards, a button will appear that says "Publish Branch." Click this button. It may prompt you to install a GitHub plugin. Please agree that you are OK to install the GitHub plugin.

<img class="large" src="/spring2024/assets/images/activities/github-activity/ss5.png" />

You will now create a new GitHub repository called `csci185-coursework`. Please ensure that you create a PUBLIC repository:

<img class="large" src="/spring2024/assets/images/activities/github-activity/ss6.png" />

After VS code issues the "create repository" request to GitHub, it will give you a message indicating that your files are being sent up to GitHub. When the file transfer is complete, you will see a blue button that says "Open On GitHub". Click that button. 

<img class="large" src="/spring2024/assets/images/activities/github-activity/ss7.png" />

Clicking the button will open your newly created `csci185-coursework` repository and show you all of your files (which are now in the cloud):

<img class="large" src="/spring2024/assets/images/activities/github-activity/ss8.png" />




{:#part5}
## 5. Finally, Configure GitHub Pages
GitHub also allows you to host pages. To enable GitHub pages:

{:.compact}
1. Go to your repository and click on the settings tab. 
2. Click the "GitHub Pages" link in the left-hand menu
3. Click the dropdown menu that asks you to select a branch.
4. Select the "master" or "main" branch (depending on which one you see -- either is fine)
5. Click "Save"

<img class="large" src="/spring2024/assets/images/activities/github-activity/ss9.png" />

This will generate a link to your GitHub site. 

<img class="large" src="/spring2024/assets/images/activities/github-activity/ss10.png" />

