TuneTravelr
==========================

A Music Hack Day NYC 2013 Production


About
------

TuneTravelr is a web app designed mostly as a learning experience, 
that can be used to listen from the sounds that were popular in cities between a given time range.

To do this we made queries into the EchnoNest DB for analytics, and after that pipped and converted the results into playable 
track information for the Rdio Web API.

The website itself is run using a simple python-Flask setup and pushed to Heroku.

Sign up for a Rdio account, and you will be able to stream songs for the full duration as opposed to 30 second snippets

*NOTE*: 
* Some of the code is definitely not production proof, but debugging Javascript of all things after being awake for 20+ hours
is a pretty nightmarish task
* Currently only browsers supported are Chrome and Safari




Libraries Used
--------------

* [Metronomilk](https://github.com/Metronomik/Rdio-Player-Controls) - For their Rdio player controls
* [Parallax](http://wagerfield.github.io/parallax/) 
* [Toastr](https://github.com/CodeSeven/toastr)


Live Demo
-----------

You can see the website here: [TuneTravelr](http://tunetravelr.herokuapp.com/)

