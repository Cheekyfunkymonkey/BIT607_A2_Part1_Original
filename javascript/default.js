/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function hamburgerMenu() {
	const list = document.getElementById("list");
	if (list.className === "list") {
	  list.className += " active";
	} else {
	  list.className = "list";
	}

	const icon = document.getElementById("icon");
	if (icon.className === "icon") {
	  icon.className += " active";
	} else {
	  icon.className = "icon";
	}
  }