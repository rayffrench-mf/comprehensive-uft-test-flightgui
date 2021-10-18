systemUtil.CloseProcessByName ("FlightsGUI.exe")

prodName = Environment.Value("ProductDir")

systemUtil.Run (prodName & "\samples\Flights Application\FlightsGUI.exe")


foo = 1 ' just to be able to set a breakpoint

