<?php
    require 'connect.inc.php';
    if(isset( $_POST['email']) && isset( $_POST['password']))
    {
        $email = $_POST['email'];
        $password = $_POST['password'];
        $query = "SELECT * FROM users WHERE email ='$email' AND password='$password' ";
        $result = mysqli_query($con,$query);
        $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
        $count = mysqli_num_rows($result);
        if(mysqli_num_rows($result) != NULL)
        {
            header("Location: Profile.php?email=" . urlencode($email));
            echo "<h1 align=\"center\" style ='position: absolute;top: 0%;' ><font color=\"lime\">You are loged-in successfully!</h1>";
            
        }
        else
        {
            echo "<h3 style ='position: absolute;top: 0%;' ><font color=\"red\">* Userid and password didn't match up.</font></h3>";
        }
    }

?>
