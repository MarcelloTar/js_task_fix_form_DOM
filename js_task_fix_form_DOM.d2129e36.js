"use strict";var inputs=document.querySelectorAll("form input");inputs.forEach(function(e){var t=e.name,l=document.createElement("label");l.htmlFor=e.id,l.textContent=t,l.classList.add("field-label"),e.parentElement.appendChild(l),e.placeholder=t[0].toLocaleUpperCase()+t.slice(1)});
//# sourceMappingURL=js_task_fix_form_DOM.d2129e36.js.map
