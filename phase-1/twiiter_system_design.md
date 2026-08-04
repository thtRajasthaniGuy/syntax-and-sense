# this is twiiter mobile system design notes.

# 1 - Understand the problem and establish design scope

# what are we building.

a twitter clone app

# functional requirement

        * user can login/signup
        * user can see the twiits
        * user can twiit from their account.
        * user can follow another user accounts.
        * user can saerch other user accounts , based on text match
            find the accounts or twiits.

# non functional requirements

    * app loading time should under 3 sec.
    * twitts load instantly under 3 sec.
    * feed loading latency must stay low and consistent regardless of accounts followes.
    * offilie stortage suuport. for load the content fast .
    * for media support we use CDN so it will load the media fast. and in unreliable area of internet we can already loaded media in cache storege so we don't have to download the media again.
    * for loading media we use adaptive loading approch.
    * for latest twiits pull to refresh or background update , background update only work when app is active.

# out of scope

    * dm's -> chat is sepetate subsytem , which requited real time chat socket.

# whom are we building

    daily active user - around 1 million
    mvp or final product. beacuse based on that we ready base structures.

# system's constraints

    mobile platform we are targeting - both OS.

    any third part api we gonna use?

# Explicit out-of-scope list

    the grok ai funtionalty.
    premium funcatinalty
    we wanna focus on homefeed funtionalty.

# 2 - API design

    *  all the info pass and recevied from app should me crypot foam.
    *  api request and response will be in. JSON payload.
