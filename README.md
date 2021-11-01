# UFT Comprehensive FlightGUI
This shows most of the features available within UFT GUI tests for WPF applications

**PLEASE READ THIS README. if you don't the test replay will almost certainly fail!**

## Sucessfully cloning this repository
This will be a 4 step process:
1. Get the repository URL as you normally would
2. Clone the repository as you normally would
3. Open UFT, then go to UFT Options->GUI_testing->Folders option and add the path: .. (e.g. two dots, no spaces)
4. Open the BookFlights test from the repository

If you do not do steps 3 and 4 in that order, when you open the BookFlights test, you will get an error of "Error	1	Action is missing or not reusable: Reusable Action [ReusableTest]	Reusable Action [ReusableTest]	ReusableTest	MainTest"


## The test flow: 
1. Get Flights Array
2. Create Order Loop based on parameters
3. Get All Newly added Flight Orders Array
4. Delete all new Orders Created. 

Includes the following standard activities:

*	System Environment Variable
*	Date/Time functions
*	For Loop
*	Open DB Connection
*	Checkpoints 
*	DB Query
*	Concatenate String
*	Custom Report Message
*	Close DB Connection
* Action Libraries
* Function Libraries
* Recovery Scenarios

## A few comments/caveats
1. During replay, on the second iteration you should see:

![2021-09-08_15-19-23](https://user-images.githubusercontent.com/24232442/133315131-f32a6427-0c96-45da-9f08-f6a5a6bdf1f9.png)

Do **NOT** click on the OK button. This is the pop-up that will cause the Recovery Scenario to activate.

2. In the Test Results, you will see a "warning":

![replay warning](https://user-images.githubusercontent.com/24232442/133315110-9500430d-384a-4fdf-983d-e9badacb05ef.png)
  
This is simply showing the details of the Recovery Scenario executing - that the flightsDataGrid could not be located, causing the CorrectDate Recovery Scenario to activate.
## UFT working with a database

For UFT to work with a database (checkpoint; output; query) there must be a 32-bit ODBC connection available on the machine where UFT is running. This git repository contains the files necessary to work with the FlightGUI database (in the directory SQLiteODBC_Install_Files), and detailed instructions on the installation and configuration (in the file Setting Up ODBC for FlightGUI.docx). If you do not configure this ODBC connection, during replay, you will see an error pop-up that looks like this:

![obj not found error](https://user-images.githubusercontent.com/24232442/133315070-11da24ba-5559-4461-b346-81398216ff33.png)




#### Many thanks to Andrew Lozoya for his initial work on the script
