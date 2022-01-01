# AEMO test

## Task description:

As energy seller,

I want a UI screen that I can enter date, energy type (electricity or gas) and price, 
Such that I can see a list of all energies I entered for sell, displaying the original price if weekday and the price with 10% discount on weekend


Example:

User enter 2021/11/19 gas $10 and then enter 2021/11/20 electricity $10

User can see a list showing

• 2021/11/19 gas $10

• 2021/11/20 electricity $9 (10% discount)



Frontend UI prefer Vuejs (can accept Angular or React)

Backend API prefer .Net 5 (can accept any .Net Core)

No need database


During the interview, we will ask you to walk us through your solution. The simple nature of this test provides opportunity for the candidate to showcase their understanding of full stack software development.


Candidates who pass the test usually implement:

• Solution which satisfies all requirements

• Good solution structure

• Clean implementation/algorithm

• Good test coverage


## Task implementation:

The task is implemented in two parts:

1. API - VS2019 in .NET5
2. WEB - Angular 12

Run solution:
  - Preparation	
	- Install node.js
	- Install npm
	- Install angular CLI - npm install -g @angular/cli
	- Go to AEMO.WEB/aemo-web and run "npm install"
	- Open AEMO.sln in VS2019 and compile
  - Running
	- API: Start AEMO.sln in VS2019 in debug mode and make sure it opens a swagger on https://localhost:5001/swagger/index.html
	- WEB: in AEMO.WEB/aemo-web run "ng serve -o --ssl" which opens https://localhost:4200 where you can sell energy and see transactions
