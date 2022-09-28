<html lang="en">
<head>
    <title>Index</title>
    <link rel="stylesheet" href="indexcss.css">
</head>

<body onload="clock(); getWeather()">
    <div class="topnav">
        <a class="navbar-brand" href="#">TO DO</a>
        <a href="index.php">Home</a>
        <a href="profile.php">Profile</a>
        <a href="change-psw.php">Change Password</a>
        <a href="#" class="logout" onclick="logout()"><span class="glyphicon glyphicon-log-in"></span> Logout</a>
    </div>
    <div id="clock"></div>
    <hr>

    <h1>Live Weather</h1>
    <h2 id="temperature"></h2>
    <h2 id="description"></h2>
    <p id="location"></p>
    <hr>
    <img src="" id="image" height="250px" width="250px">
    <script type="text/javascript" src="index.js"></script>
</body>
</html>