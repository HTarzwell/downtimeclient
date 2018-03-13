# downTime
A simple SPA that tracks user's cell phone time
[Here is a link to the back-end client](https://github.com/HTarzwell/downTime)

# Planned Objective

To build a full-stack application that allows users to record the times where
they are away from screens, and what they were doing when they put down their
phones, turned off their TV, or stepped away from their computers.

# Technologies Used

## Back-End:

Ruby
SQL
Rails
Heroku
AJAX

## Front-End:

HTML5
CSS3
JS
jQuery
Handlebars
SASS
Bootstrap

# The Process

## Day One

This was the day I learned how to finally move files around and rename them in
the terminal.  I was very proud.  I may never go back to GUI!

I downloaded both the Rails API template and the Browser template, renamed them,
and deployed them both to GitHub and my new Heroku account.  This process proved
to be somewhat tricky, but not impossible.  The clear instructions made it easy!

I wound up completely stymied for several hours by 1) a db:migrate error that
proved to be from using date_type as a data type instead of datetime for the
amount of time the user spends away from their phone and 2) a problem with some
curl requests that turned out to be due to the unconstructed database and not
running the rails server.  Correcting these issues made it simpler to catch
up and figure out what needed to be done next!

I spruced up, added descriptions to, and pinned the repos, and then changed the
Application controller inheritance to OpenRead in my downtime_instances controller.

Curls on the auth file all cleared.  Did not start curling resources yet.

### Outstanding Issues for Day One:

-No SQL work
-Heroku knowledge is shaky; downtime isn't showing as one of my account apps
-Client is being deployed to my .io as /downtime/client because of folder
shenanigans

## Day Two

A snow day!

Discovered that I needed to be testing my resources on curl BEFORE I changed the
Application controller inheritance, had to change that back.

Excitedly got started on my first new Resource curl script!  CREATE proved to be
a challenge, but not for the reasons I expected.  Forgot to add commas?  WOW.
Accidentally added a user_id parameter to my table, thus forcing me to add an
ownership parameter well before I thought I would need to?  Whoops.

Created all curl requests and ran them with success!  I had fantastic support from
mentors and teachers.

Began work later in the day on the client app, building the sign-up function from
scratch.  It was not a challenge once I realized that I had tried to run my
development tests (which should have been locally hosted) from my production app
on Heroku.  After that, things progressed very smoothly with building the initial
client sign-ups and sign-ins.

The change password function was much less smooth.  I had to leave it for the time
being and move along, along with the sign-out function.

### Outstanding Issues for Day Two:

-Change Password client web app function not working
-Sign Out client web app function not working
-Opened issue for change password & also for sign out function

## Day Three

Started the exciting process of debugging my change-password and sign-in, which
initially seemed to be an issue of user data storage, meaning the problem was most
likely to be on the back end, which was where I decided to begin my investigation.

Unfortunately my hypothesis proved to be untrue, as the issue was entirely with
the front end after all: a format change removing the store.user.token requirement
and my own HTML form fields.  All was resolved, but noon had already passed.

I was able to complete all API calls in both curl and web apps for my downtime
resources...before learning at the end of the day that we would have to render
data to users on the front end.

### Outstanding Issues for Day Three

-Astonishingly, none!

## Day Four

I started late today and struggled to accomplish much; I discovered that a key
parameter of the assignment had not been clearly explained to me, nor incorporated
into the to-do list, so I was left on my own to try and find a way to correct the
issue of not being able to retrieve actual data with a GET request.  Fortunately,
the single element I chose to select rather than an entire array means that
breaking down the problem at hand will be simpler over the next two days.

### Outstanding Issues for Day Four

-GET requests to API only return instance IDs, not the instance data

## Day Five

I constructed new divs that allowed me to hide and show appropriate parts of
my site to the user based on whether they were signed in or not.  A nice, neat
single-page API!  I also corrected the issue with my individualized GET request
by discovering that I needed to store and retrieve my data in a different place
than how I'd been trying to do it.  I'm learning!

Started to study Handlebars more thoroughly; I'm determined to use it in my
project in some small capacity.  I wound up having a really good time, finding
ways to learn how to do this with Keiko's help!

## Day Six

DEPLOYMENT DAY.  It was...rough.  I fixed some bugs, and became Patient Zero for
some truly fascinating GitHub deployment shenanigans.  I managed to fix the
problems with Heroku on my own, astoundingly!

## Day...Seven??

A SNOW DAY granted us an extra day to work; I spent it making the app as pretty
as I could and attempting to reconcile myself with Bootstrap.

### Wireframes, User Stories, ERD

![Wireframes](https://github.com/HTarzwell/downtimeclient/blob/master/assets/styles/production/IMG_0315.JPG)

![User Stories](https://github.com/HTarzwell/downtimeclient/blob/master/assets/styles/production/IMG_0316.JPG)

![ERD](https://github.com/HTarzwell/downtimeclient/blob/master/assets/styles/production/IMG_0317.JPG)
