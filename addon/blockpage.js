"use strict";
/* jshint esversion: 6, strict: global */
/* globals document */
// licensed under the MPL 2.0 by (github.com/serv-inc)

document.querySelector("#page").innerText = decodeURIComponent(document.location.search.slice(1));

