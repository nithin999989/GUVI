<?php

    require 'connect.inc.php';
    if(isset( $_POST['firstName']) && isset( $_POST['lastName']) && isset( $_POST['email']) && isset( $_POST['password'])&& isset( $_POST['confirmPassword'])&& isset( $_POST['dob'])&& isset( $_POST['mobileNumber']))
    {
        $firstName =  $_POST['firstName'];
        $lastName =  $_POST['lastName'];
        $email =  $_POST['email'];
        $password =  $_POST['password'];
        $confirmPassword =  $_POST['confirmPassword'];
        $dob =  $_POST['dob'];
        $mobileNumber =  $_POST['mobileNumber'];

        $query_signup = "INSERT INTO `users` VALUES ('', '$firstName', '$lastName', '$email', '$password', '$dob', '$mobileNumber')";
        mysqli_query( $con, $query_signup );
        header("Location: ../HTML/Login.html");  
    }
?>
