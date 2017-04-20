React Search App
A simple React search app which:

1. Fetches the product JSON data using NODE API.

2.Takes the user input from the search box and perform a search on the product JSON data and display the valid search results in the results section.

2.Filters - Relevance, Popular, Low Price, High Price

3. Add to Compare feature


Steps to run the project locally:

1. git clone https://github.com/gandhirahul/React-Search-app.git

2. Install the dependencies 
	> npm install
	
3. Run the app
	> npm start

Launch your browser and hit http://localhost:5000

Steps to Deploy: 

I have deployed the application on Heroku.You can review it here: **https://rahulgandhi-react-search-app.herokuapp.com/**

1. Create a Procfile with the following line- 
	> web: npm start

2. Create a heroku remote.This command creates a new application on Heroku – along with a git remote that must be used to receive your application source.
	> heroku create

3. The heroku git:remote command will add this remote for you based on your applications git url
	> heroku git:remote -a your-heroku-application

4. You can do your first push and heroku will start building the source
	> git push heroku master
