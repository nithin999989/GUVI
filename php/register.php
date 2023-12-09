<?php

    require 'connect.inc.php';
      $mongoDbUrl = "mongodb+srv://mnsrnithin9:<password>@userprofile.49uw1sb.mongodb.net/?retryWrites=true&w=majority";
    $mongoDbName = "userdata";
    $collectionName = "profiledata";
    if(isset( $_POST['firstName']) && isset( $_POST['lastName']) && isset( $_POST['email']) && isset( $_POST['password'])&& isset( $_POST['confirmPassword'])&& isset( $_POST['dob'])&& isset( $_POST['mobileNumber']))
    {
        $firstName =  $_POST['firstName'];
        $lastName =  $_POST['lastName'];
        $email =  $_POST['email'];
        $password =  $_POST['password'];
        $confirmPassword =  $_POST['confirmPassword'];
        $dob =  $_POST['dob'];
        $mobileNumber =  $_POST['mobileNumber'];

        
        $client = new MongoDB\Client($mongoDbUrl);
        $database = $client->$mongoDbName;
        $collection = $database->$collectionName;
          $dataToInsert = [
            [   "fullname"    => $fullname,
                "DOB"         => $dob,
                "Current"     => $current_location,
                "mail"        => $mail,
                "passkey"     => $passkey,
                "contact"     => $phone

              ]
        ];
         $collection->insertMany($dataToInsert);

        $query_signup = "INSERT INTO `users` VALUES ('', '$firstName', '$lastName', '$email', '$password', '$dob', '$mobileNumber')";
        mysqli_query( $con, $query_signup );
        header("Location: ../HTML/Login.html");  
    }
?>
