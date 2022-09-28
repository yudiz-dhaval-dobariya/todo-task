<html lang="en">

<head>

    <title>Login</title>

   <link rel="stylesheet" href="style.css">

</head>

<body>
    <form>
        <h1>Login</h1>

        <div class="formcontainer">
            <div class="container">
                <label for="mail"><strong>E-mail*</strong></label>
                <input type="email" placeholder="Enter E-mail" name="mail" id="email">
                <label for="password"><strong>Password*</strong></label>
                <input type="password" placeholder="Enter Password" name="password" id="password" >
            </div>

            <input class="button" type="button" onclick="login()" value="Login"></input>
            <div class="rg">
            <a href="Register.php">Register Here</a>
            </div>
    </form>
    <script type="text/javascript" src="script.js"></script>
</body>

</php>