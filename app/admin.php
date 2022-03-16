<?php
require "db.php";

  $user = R::dispense('users');
  $user->login = "tekstolit_admin";
  $user->password = password_hash("", PASSWORD_DEFAULT);
?>