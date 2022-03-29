# quantman-auto-login

Daily Cron Job runner that opens browser, do login via your broker credentials and close the browser.
# Setup:

- In the quantman-auto-login respository page. 
- Fork the repo using the fork button. (at the top right area in the page.) 
- In the forked repository page do the below 2 steps. (You should already be in the forked repo, if not Go to the forked repo)
- *Settings* 
  - Click the "Settings" button to go to the settings page.
  - Select Secrets. And within secrets Actions (in the left side panel).

    1. Click New Repository Secret. Add USERNAMES => <value> (fill in your fyers broker client id's)
      e.g XP00000, 00000PQ
    2. Click New Repository Secret. Add PASSWORDS => <value> (fill in your fyers broker client password's)
      e.g ABCDF, ERTYUJ
    3. Click New Repository Secret. Add PINS => <value> (fill in your fyers broker client pin's)
      e.g 0000, 1111
    4. Click New Repository Secret. Add BROKERS => <value> (fill in your broker's name)
      e.g FYERS, ANGLE_BROKING, ICICI, ALICE_BLUE, ZEBU (mandatory format)
    5. Click New Repository Secret. Add SECURITY_QUESTIONS1 => <value> (fill in your security questions name)
      e.g 1,2,3,4,ABC (ZEBU) 
    6. Click New Repository Secret. Add SECURITY_QUESTIONS2 => <value> (fill in your security questions name)
      e.g 1,2,3,4,ABC (ZEBU)

    - If you don't have any fields.. Please give dummy values.. like Zebu only have security questions..
      remaining doesn't have ? so give dummy eg: 1,2,3,4,ZEBU.. this is for all fields
    - Another example.. angle broking doesn't have pin.. so give "dummy pin 1111",  it willnot be considered.. but have to give
    - All 6 fields.. matching with index..
      eg: USERNAMES           :  11111111, 2222222, ...
          PASSWORDS           :  oqijwihq, kjcixhw, ...
          PINS                :  1111, 11111, ...
          BROKERS             :  FYERS, ANGLE_BROKING, ...
          SECURITY_QUESTIONS1 :  0, 1, 2, 3, ...
          SECURITY_QUESTIONS2 :  0, 1, 2, 3, ...

- *Actions*
  - Click "Actions" button at the top of the page.
  - Click "I Understand my workflows, go ahead and enable them"
  - Select the "Autologin" in the left side panel.
  - In the disclaimer warning message in the center of the page, click "Enable Workflow"
- Now daily at 07:30, the enabled action will login in you into QuantMan using the credentials filled in the repository's secret.

![Help Image](/helpimage.png?raw=true)