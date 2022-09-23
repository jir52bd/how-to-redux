
<!-- PROJECT LOGO -->
<br />
<p align="center">
    <h3 align="center"><a href="#">HOW TO REDUX - MODULE 3 - LESSON 3</a></h3>
</p>

<!-- TABLE OF CONTENTS -->
### Table of contents
|Branch No:| Decsription         |
|----------|---------------------|
|3.1 | Setup react-redux project |
|3.2 | Defining Actions          |
|3.3 | Defining Reducer - todo slice|
|3.4 | Defining Reducer - filter slice|
|3.5 | Store setup |
|3.6 | Todo List and Todo |
|3.7 | Filter Section - Footer |
|3.8 | Filtering Todo List |
|3.9 | Adding Todo |
|3.10| Task - Create a blog webpage |



<br>

এসাইনমেন্ট আমরা করবো redux এবং react-redux দিয়ে। এসাইনমেন্ট শুরু করার আগে আপনি পার্ট বাই পার্ট চিন্তা করেন তাহলে দেখবেন এসাইনমেন্ট অনেক সহজ হয়ে গেছে। এসাইনমেন্টের প্রতিটা ফিচার এর জন্য আলাদা আলাদা নাম্বার আছে।

# ১) এসাইনমেন্টে কি কি করতে হবে:

১.১) প্রজেক্টটি react-redux দিয়ে করতে হবে। এসাইনমেন্টের জন্য প্রয়োজনীয় HTML Template আমাদের কোর্স এর গিটহাব রিপোসিটরির "3.10" ব্রাঞ্চে দিয়ে দেয়া হয়েছে। এই টেম্পলেটটি রিয়্যাক্ট এ কনভার্ট করে নিয়ে আপনাদের কে এসাইনমেন্টটি সম্পন্ন করতে হবে।

১.২) প্রথমে প্রজেক্ট এর রিকুয়ারমেন্ট এনালাইসিস করে প্রয়োজনীয় state টি নিজের মতো করে ডিজাইন করে নিবেন। নিচের সব গুলো রিকুয়ারমেন্ট পড়ে বুঝে নিন আপনার state টি কেমন structure এর হওয়া উচিৎ। সেই অনুযায়ী state object এর স্ট্রাকচার ঠিক করে নিন। যেভাবে লেসন 3.1 এ Requirement Analysis করা হয়েছে। State এর স্ট্রাকচার ঠিক করা হয়ে গেলে, কিছু সুন্দর ডাটা state এ input দিয়ে ফেলুন। যেখানে image আছে সেখানে আপনি চাইলে আপনার প্রজেক্ট এ একটা ফোল্ডার করে সেটার URL দিতে পারেন, অথবা বাইরের কোন image এর লিঙ্ক বসিয়ে দিতে পারেন - যেমন unsplash বা এধরণের ওয়েবসাইট থেকে কপিরাইট ফ্রি ইমেজ ব্যবহার করতে পারেন।

১.৩) আগের স্টেপ এ করা Requirement Analysis করে ফেলার পর, আপনার state থেকে HTML Template অনুযায়ী ব্লগ লিস্টটি দেখিয়ে ফেলুন। ব্লগলিস্টটি আপনার state থেকে read করে UI তে খাপে খাপে দেখিয়ে দিলেই চলবে। কোন API call বা এধরণের কিছু প্রয়োজন নেই।

১.৪) প্রতিটি blog post এ দেখবেন blog author এর নাম এবং ইমেজ দেখানো হয়েছে। যেমন UI Template এ author এর নাম দেখানো হয়েছে "Learn with Sumit" এবং লার্ন উইথ সুমিত এর logo দেখানো হয়েছে। আপনারা অবশ্যই এখানে multiple author দিবেন এবং একই author একাধিক blog post এ রাখবেন যেন পরে সার্চ করলে উক্ত author এর multiple blog post match করে। Author এর ইমেজ হিসেবে যেকোন image ব্যবহার করতে পারেন যেভাবে উপরের 1.2 point এ বলা হয়েছে।

1.5) প্রতিটি blog post এ দেখবেন একটি করে category দেখানো হয়েছে। যেমন UI Template এ প্রতিটা blog post এর ক্যাটাগরি দেখানো হয়েছে "Article"। একটি ব্লগ পোস্টে একটিই ক্যাটাগরি রাখবেন কিন্তু বিভিন্ন ক্যাটাগরি ব্যবহার করবেন যেন পরে ক্যাটাগরি দিয়ে সার্চ করা যায়।

1.6) কোন ক্যাটাগরিতে যখন ইউজার ক্লিক করবেন, তখন ঐ ক্যাটাগরির blog post গুলো ফিল্টার হয়ে দেখাবে। এখানে কোন ধরণের পেইজ রিলোড গ্রহণযোগ্য নয়। আপনার redux store state থেকে ফিল্টার করে দেখিয়ে দিতে হবে।

1.7) ক্যাটাগরির মতো কোন "author" এর নাম বা ছবিতে যখন ইউজার ক্লিক করবেন, তখন ঐ author এর সবগুলো blog post ফিল্টার হয়ে দেখাবে। এখানেও কোন ধরণের পেইজ রিলোড গ্রহণযোগ্য নয়। আপনার redux store state থেকে ফিল্টার করে দেখিয়ে দিতে হবে।

1.8) UI তে একটি সার্চ বার আছে। এই সার্চ ফিচারটি ইমপ্লেমেন্ট করতে হবে। ইউজার যখন কোন "keyword" লিখে সার্চ করবে, তখন প্রতিটা blog post এর "title" এর মধ্যে ঐ keyword টি সার্চ করে প্রাপ্ত filtered blog list টি দেখিয়ে দিতে হবে। এখানেও কোন ধরণের পেইজ রিলোড গ্রহণযোগ্য নয়।

1.9) সার্চ ফিচার implement করার সময় আপনাদের কে debouce technique apply করতে হবে। এর মানে হলো, ইউজার যদি খুব দ্রুত টাইপ করেন সার্চ বারে, তাহলে প্রতিটা key press এই state update না করে, টাইপিং থামলে search request করতে হবে।

<br>

<!-- GET HTML TEMPLATE -->

## Get HTML Template

You can find the raw HTML template of the todo application from the "html_template" folder.

<!-- HOW TO RUN -->

## How to run

Please follow the below instructions to run this branch in your machine:

1. You will make a To-Do app using React & Redux. You will find contact details below.

2. Clone this repository -
   ```sh
   git clone https://github.com/jir52bd/how-to-redux.git
   ```
3. Go to the cloned project directory
   ```sh
   cd how-to-redux
   ```
4. Checkout/switch to branch 3.1
   ```sh
   git checkout 3.1
   ```
5. Install dependencies
   ```sh
   npm i
   ```
6. Install VS Code [Live Server plugin](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) & start the server.
   ```sh
   npm start
   ```
7. Your app should be available in http://localhost:3000

<br>

