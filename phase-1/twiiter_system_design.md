# this is twiiter mobile system design notes.

# 1 - Understand the problem and establish design scope

# what are we building.

a twitter clone app

# functional requirement

        * user should login/signup the app
        * user can see the twiits
        * user can search the by keywords , which show the peoples , topic something releted to keywords.
        * user can twiit from their account.

# non functional requirements

# perfomance

    * for home feed we can use hybrid fan our of read and fan out of write approch. for exmaple if some user have 10k followers when they twitss we can use fan out of write approch so it will no make server in load. and some user have lets around 1 million followers for tham we can use fan out of read approch.
    * offline app support -> when user internet is slow or don't have any network we can show the loaded twiits which are gonna saved in our offline storage.
    *

# whom are we building

    qesutions we can ask to interviewer
    daily active user - around 1 million
    mvp or final product. beacuse based on that we ready base structures.

# system's constraints

    mobile platform we are targeting - both OS.

    any third part api we gonna use?

# Explicit out-of-scope list

    the grok ai funtionalty.
    premium funcatinalty

# 2 - API design

    *  all the info pass and recevied from app should me crypot foam.
    *  api request and response will be in. JSON payload.
