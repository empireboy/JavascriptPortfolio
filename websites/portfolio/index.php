<?php

$foldername_views = "views/";
$pagename_default = "home";

include $foldername_views . "head.php";
// include $foldername_views . "footer.php";
// include $foldername_views . "home.php";

if (!empty($_GET)) {
  $page = $_GET['page'];
} else {
  $page = $pagename_default;
}

switch ($page) {
  case 'projects':                    include $foldername_views . "projects.php"; break;
  case 'projects-theworldofcube':     include $foldername_views . "projects-theworldofcube.php"; break;
  case 'projects-universe3d':         include $foldername_views . "projects-universe3d.php"; break;
  case 'about-me':                    include $foldername_views . "about-me.php"; break;
  default:                            include $foldername_views . $pagename_default . ".php"; break;
}

include $foldername_views . "footer.php";
?>
