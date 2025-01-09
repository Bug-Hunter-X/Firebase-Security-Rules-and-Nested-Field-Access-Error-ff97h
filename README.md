# Firebase Security Rules and Nested Field Access Error
This repository demonstrates an uncommon Firebase Realtime Database error related to security rules and data structure. The error occurs when trying to access a deeply nested field within a document that doesn't exist. This can lead to unexpected null values, resulting in application crashes or incorrect behavior.

## Problem
The `bug.js` file showcases an example where a nested field ('address/street') is accessed, but the parent node ('address') might not exist for all users. This results in a `null` value, and the application might not handle this scenario gracefully.  Insecure rules also exacerbate this by giving unrestricted access.

## Solution
The `bugSolution.js` file provides a solution to address this problem. It uses a conditional check to ensure the existence of the parent node ('address') before accessing the nested field ('street'). It also includes best practices for Firebase security rules to prevent unnecessary data exposure.

## Setup
1. Clone this repository.
2. Set up a Firebase project.
3. Configure the Firebase project in the Javascript files.
4. Run the code to observe the error and the fix in action.