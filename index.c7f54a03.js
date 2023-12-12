var e=document.querySelector("tbody"),t=document.querySelector("thead"),r=document.querySelector("tfoot"),o=e.querySelectorAll("tr"),l=t.querySelectorAll("tr"),c=r.querySelectorAll("tr");function u(e,t){e.forEach(function(e){var r=e.querySelectorAll(t),o=r[1].cloneNode(!0);r[4].before(o)})}u(o,"td"),u(l,"th"),u(c,"th");
//# sourceMappingURL=index.c7f54a03.js.map
