RunAction "1 Open Application [Reusable]", oneIteration
RunAction "2 Login", oneIteration
RunAction "3 Flight Finder", allIterations
RunAction "4 Select Flight", oneIteration
RunAction "5 Flight Confirmation", oneIteration
RunAction "6 Search Order", oneIteration, Parameter("5 Flight Confirmation", "Order_Number")
RunAction "7 Close Application [Reusable]", oneIteration
