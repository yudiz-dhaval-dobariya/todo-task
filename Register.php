<html>
<head>
   
    <title>Register</title>

   <link rel="stylesheet" href="style.css">

</head>

<body>
    <form>
        <h1>REGISTERATION</h1>

        <div class="formcontainer">
            <div class="container">
                <label for="name"><strong>Name*</strong></label>
                <input type="text" placeholder="Enter Username" name="name" id="name" autofocus>
                <label for="mail"><strong>E-mail*</strong></label>
                <input type="email" placeholder="Enter E-mail" name="mail" id="email">
                <label for="password"><strong>Password*</strong></label>
                <input type="password" placeholder="Enter Password" name="password" id="password" >
                <label for="MNumber"><strong>Mobile Number*</strong></label>
                <input type="number" placeholder="Enter Mobile Number"  maxlength="10" name="MNumber" id="number" >
                <label for="dob"><strong>Date of Birth*</strong></label>
                <input type="date" name="dob" id="dob">
            </div>

            <div class="gendercontainer">
            <label for="gender"><strong>Gender*</strong></label>
                <input type="radio" name="gender" value="male" id="male"> Male
                <input type="radio" name="gender" value="female" id="female"> Female
            </div>

            <input class="button" type="button" onclick="register()" value="Register"></input>
            <div class="rg">
            <a href="login.php">Login Here</a>
            </div>
    </form>
    <script type="text/javascript" src="script.js"></script>
</body>

</html>
