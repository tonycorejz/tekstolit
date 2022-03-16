<?php
require "libs/rb.php";
R::setup( 'mysql:host=localhost;dbname=userdata',
        'root', '' );
        
session_start();