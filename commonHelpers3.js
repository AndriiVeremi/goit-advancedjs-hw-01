import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{l as o}from"./assets/vendor-78be7656.js";const t={form:document.querySelector(".js-feedback-form"),input:document.querySelector(".js-feedback-form input"),message:document.querySelector(".js-feedback-form textarea")};let r={};const a="feedback-form-state";t.form.addEventListener("input",o(n,500));t.form.addEventListener("submit",s);m();function n(){r={email:t.input.value,message:t.message.value},localStorage.setItem(a,JSON.stringify(r))}function s(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(a)}function m(){const e=JSON.parse(localStorage.getItem(a));e&&(t.input.value=e.email??"",t.message.value=e.message??"")}
//# sourceMappingURL=commonHelpers3.js.map
