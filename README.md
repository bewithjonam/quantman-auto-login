# quantman-auto-login

Daily Cron Job runner that opens browser, do login via your broker credentials and close the browser.
# Setup:

- In the quantman-auto-login respository page. 
- Fork the repo using the fork button. (at the top right area in the page.) 
- In the forked repository page do the below 2 steps. (You should already be in the forked repo, if not Go to the forked repo)
- *Settings* 
  - Click the "Settings" button to go to the settings page.
  - Select Secrets. And within secrets Actions (in the left side panel).
    1. Click New Repository Secret. Add USERNAME => <value> (fill in your fyers broker client id)
    2. Click New Repository Secret. Add PASSWORD => <value> (fill in your fyers broker client password)
    3. Click New Repository Secret. Add PIN => <value> (fill in your fyers broker client pin)
- *Actions*
  - Click "Actions" button at the top of the page.
  - Click "I Understand my workflows, go ahead and enable them"
  - Select the "Autologin" in the left side panel.
  - In the disclaimer warning message in the center of the page, click "Enable Workflow"
- Now daily at 07:30, the enabled action will login in you into QuantMan using the credentials filled in the repository's secret.

![Help Image](/blob/main/helpimage.png?raw=true)