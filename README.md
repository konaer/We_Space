
<h3 align="center">We Space</h3>

  <p align="center">
    A step by step full stack blog website
    <br />
    <a href="https://github.com/konaer/my_blog/"><strong>Explore the source code »</strong></a>
    <br />
    <br />
    <a href="https://www.youtube.com/">View Demo</a>
    ·
    <a href="https://github.com/konaer/my_blog/issues">Report Bug</a>
  </p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About the project</a>
    </li>
    <li>
      <a href="#project-modules-and-functions">Project modules and functions</a>
    </li>
    <li><a href="#front-end">Front end</a></li>
    <li><a href="#back-end">Back end</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## About the project

We Space is a full stack website project. 
This website is aimed at providing a communication platform, an online space for the SDE community to post and share their ideas about different techs.Please check the demo video for detail functions.

This is a step by step full stack project, the front end framework is Vue, and the back end framework is Django. Many other techs are also used in this project, please see below sections for details.

## Project modules and functions

| Modules         | Functions                       | 
| :------------------ | :----------------------------- | 
| Register | Photo verification, SMS verification, async SMS send| 
|   Login  | Login status keep, Cookie, Session,         | 
| Profile center             | Photo upload, Update data         | 
| Post article         | Data saving              | 
| Main page         | Pagination, Search article(unpublished)   |
| Article detail page       | Article comment, Article reading data, Hot article recommendation|    


## Front end

* Bootstrap
As the CSS framework
* Captcha\
To make photo verification code
* Prism\
To make highlight labels 
* Jquery\
As part of the JS to design and render pagination
* Axios\
Use promise API to make XMLHttpRequests
* Vue\
As the front end framework to handle DOM

## Back end
* Use Django as the core back end framework
* Use MySQL as database
* Use Redis as cache to accelerate user query speed
* Use Redis as message queue to async send verification code

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Edward Kong - [@LinkedIn](https://www.linkedin.com/in/edwardkong123/) - dejingk@gmail.com

