<html lang="en">

<head>
    <title>Profile</title>
    <link rel="stylesheet" href="indexcss.css">

</head>

<body onload="getUserDetails(); ">
    <div class="topnav">
        <a class="navbar-brand" href="#">TO DO</a>
        <a href="index.php">Home</a>
        <a href="profile.php">Profile</a>
        <a href="change-psw.php">Change Password</a>
        <a href="#" class="logout" onclick="logout()"><span class="glyphicon glyphicon-log-in"></span> Logout</a>
    </div>
    <h3>User Profile</h3>

    <label for="name" class="form-label">Name</label>:
    <label id="name" class="form-label"></label>
    <br>
    <label for="email" class="form-label">Email</label>:
    <label id="email" class="form-label"></label>
    <br>
    <label for="mobile" class="form-label">Mobile</label>:
    <label id="mobile" class="form-label"></label>
    <br>
    <label for="dob" class="form-label">Date of Birth</label>:
    <label id="dob" class="form-label"></label>
    <br>
    <label for="gender" class="form-label">Gender</label>:
    <label id="gender" class="form-label"></label>
</body>
<script src="index.js"></script>

</html>