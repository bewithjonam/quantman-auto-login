# quantman-auto-login

Daily Cron Job runner that opens browser, do login via your broker credentials and close the browser.
# Setup:

- In the quantman-auto-login respository page. 
- Fork the repo using the fork button. (at the top right area in the page.) 
- In the forked repository page do the below 2 steps. (You should already be in the forked repo, if not Go to the forked repo)
- *Settings* 
  - Click the "Settings" button to go to the settings page.
  - Select Secrets. And within secrets Actions (in the left side panel).
  1. FYERS
    1.1  Click New Repository Secret. Add USERNAMES => <value> (fill in your fyers broker client id's)
      e.g XP00000, 00000PQ
    1.2   Click New Repository Secret. Add PASSWORDS => <value> (fill in your fyers broker client password's)
      e.g ABCDF, ERTYUJ
    1.3 Click New Repository Secret. Add PINS => <value> (fill in your fyers broker client pin's)
      e.g 0000, 1111
    1.4 Click New Repository Secret. Add BROKER => <value> (fill in your broker name)
      e.g FYERS.. Value must be FYERS
  
  2. ANGLE_BROKING
    2.1  Click New Repository Secret. Add USERNAMES => <value> (fill in your angle client id's)
      e.g XP00000, 00000PQ
    2.2   Click New Repository Secret. Add PASSWORDS => <value> (fill in your angle broker client password's)
      e.g ABCDF, ERTYUJ
    2.3 Click New Repository Secret. Add BROKER => <value> (fill in your broker name)
      e.g ANGLE_BROKING.. Value must be ANGLE_BROKING

  3. ICICI
    3.1  Click New Repository Secret. Add USERNAMES => <value> (fill in your icici broker client id's)
      e.g XP00000, 00000PQ
    3.2   Click New Repository Secret. Add PASSWORDS => <value> (fill in your icici broker client password's)
      e.g ABCDF, ERTYUJ
    3.3 Click New Repository Secret. Add PINS => <value> (fill in your icici broker client pin's)
      e.g 11062400, 11062024 (DOB or PAN).. DOB must be combined reference Example... Not like 11-06-2024 (restricted)
    3.4 Click New Repository Secret. Add BROKER => <value> (fill in your broker name)
      e.g ICICI.. Value must be ICICI

  4. ALICE_BLUE
    4.1  Click New Repository Secret. Add USERNAMES => <value> (fill in your aliceblue broker client id's)
      e.g XP00000, 00000PQ
    4.2   Click New Repository Secret. Add PASSWORDS => <value> (fill in your aliceblue broker client password's)
      e.g ABCDF, ERTYUJ
    4.3 Click New Repository Secret. Add PINS => <value> (fill in your aliceblue broker client pin's)
      e.g 1111, 00000
    4.4 Click New Repository Secret. Add BROKER => <value> (fill in your broker name)
      e.g ALICE_BLUE.. Value must be ALICE_BLUE

  5. ZEBU
    5.1  Click New Repository Secret. Add USERNAMES => <value> (fill in your zebu broker client id's)
      e.g XP00000, 00000PQ
    5.2   Click New Repository Secret. Add PASSWORDS => <value> (fill in your zebu broker client password's)
      e.g ABCDF, ERTYUJ
    5.3 Click New Repository Secret. Add PINS => <value> (fill in your zebu broker client pin's)
      e.g 1111, 00000
    5.4 Click New Repository Secret. Add BROKER => <value> (fill in your broker name)
      e.g ZEBU.. Value must be ZEBU

- *Actions*
  - Click "Actions" button at the top of the page.
  - Click "I Understand my workflows, go ahead and enable them"
  - Select the "Autologin" in the left side panel.
  - In the disclaimer warning message in the center of the page, click "Enable Workflow"
- Now daily at 07:30, the enabled action will login in you into QuantMan using the credentials filled in the repository's secret.

![Help Image](/helpimage.png?raw=true)