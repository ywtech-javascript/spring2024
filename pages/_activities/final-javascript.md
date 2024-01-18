---
layout: two-column
title: Final Exam (JavaScript)
draft: 1
points: 20
due_date: 2023-12-08
---

<style>
    img.preview {
        max-width: 60%;
        min-width: 500px;
    }
</style>

{:.blockquote-no-margin}
> ## Should I take this part of the exam?
> * If you are happy with your Quiz 3 scores (check Moodle to see), you **DO NOT** need to take this part of the exam. 
> * If you do want to replace your Quiz 3 score, download the starter files and follow the instructions below.

1. First, take the written portion of the Exam (60 points)
2. Then, complete the coding portion of the Exam (40 points) as described below. Note that **only the first question** is required.


<a href="/spring2024/course-files/exams/javascript-final-exam.zip" class="nu-button">Download Starter Files <i class="fas fa-download"></i></a>

## 1. Required: DOM Manipulation
Open the `exercise01` folder and complete the three tasks described in the picture below: 

<img class="large" src="/spring2024/assets/images/final-exam/dom-manipulation.gif" />


## 2. Optional: Functions & Loops

{:.blockquote-no-margin}
> If you're worried about the paper portion of the exam and would like to show your JavaScript knowledge via code, try implementing the following task described below. Completing this task won't count against you, but will help your score if you accidentally messed up a a question in the paper-based exam.


Open the `exercise02` folder and examine all of the files. Inside of `main.js`, there is a `fetchCourses` function (already built for you) that fetches all of the UNCA course offerings for Spring, 2023: (<a href="https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2023/spring/">here</a>). Note that by modifying the year or term in the URL string, you can also view course offerings from previous semesters. 

### Your job
1. Modify the *function body* of the `displayResults(courses)` function so that it outputs to the `#results` element only courses that offered within the **CSCI department.** You may use any kind of loop that you like.
2. Ensure that your HTML snippet displays the following information for each course (using a template literal like we did in `HW7`):
    * Title
    * Instructor
    * Location
    * Days (i.e., which days does the course meet?)
3. Location and Days may be `null`. That's OK for this exercise (though in real life, you'd probably want to output a friendlier message).

<img class="large frame" src="/spring2024/assets/images/quizzes/quiz03/exercise03.png" />

**Hints**
* Loop through the `courses` array.
* If the current course's `Department` property is "CSCI", then insert an HTML representation of the course into the `<div class="results"></div>` container. 
* Partial credit will be given.
* We went over this in Lectures 22-24 (and there are lecture videos that you can even follow along with).
* A sample of the HTML representation of a course is shown below, and also in `exercise02-extra-credit/template.html`:

```html
 <section class="course">
    <h3>NM 101.001: Digital Design Principles</h3>
    <ul>
        <li>Instructor: Cosette, Ashe</li>
        <li>Location: OWE 305</li>
        <li>Days: MW</li>
    </ul>
</section>
```

## What to Submit
**Please read carefully:** Doublecheck your work to make sure you've completed the first task (the second task is optional). Then, update your homepage by adding a link to `javascript-final-exam/exercise01` (required) and a link to `javascript-final-exam/exercise02-extra-credit` (optional). Sarah's final exam looks like this: <a href="https://vanwars.github.io/csci185-coursework/" target="_blank">https://vanwars.github.io/csci185-coursework/</a>

After committing and syncing your changes to GitHub, paste the following links into the Moodle under the Final Exam submission section:

1. A link to your **homepage** on GitHub pages.
2. A link to your GitHub **code repository** (where your code files are stored).

If your GitHub is not working for whatever reason, just zip your **COMPLETED** `final-exam` folder and upload it to the Moodle.