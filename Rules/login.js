function clean_LOGIN(){
  var filterVal = 'blur(4px)';
  $('#background').css('filter',filterVal).css('webkitFilter',filterVal).css('mozFilter',filterVal).css('oFilter',filterVal).css('msFilter',filterVal) .css('transition', 'all 2s ease-out').css('-webkit-transition', 'all 2s ease-out').css('-moz-transition', 'all 2s ease-out').css('-o-transition', 'all 2s ease-out');
  document.getElementById("Heading").style.fontSize=client_window_height/8;
  document.getElementById("Heading").style.marginTop=client_window_height/15;
  document.getElementById("Heading").style.marginLeft=client_window_width/10;
  document.getElementById("email_label").style.marginLeft=client_window_width/5;
  document.getElementById("email_label").style.marginTop=client_window_height/20;
  document.getElementById("email_label").style.fontSize=client_window_height/20;
  document.getElementById("email").style.marginLeft=client_window_width/5;
  document.getElementById("email").style.marginTop=client_window_height/25;
  document.getElementById("email").style.fontSize=client_window_height/20;
  document.getElementById("email").style.padding = "5px";
  document.getElementById("email").style.backgroundColor=background_color;
  document.getElementById("email").style.borderColor=main_color;
  document.getElementById("email").style.borderStyle="solid";
  document.getElementById("email").style.borderWidth="1px";
  document.getElementById("email").style.width=client_window_width*3/5;
  document.getElementById("password_label").style.marginLeft=client_window_width/5;
  document.getElementById("password_label").style.marginTop=client_window_height/20;
  document.getElementById("password_label").style.fontSize=client_window_height/20;
  document.getElementById("password").style.marginLeft=client_window_width/5;
  document.getElementById("password").style.marginTop=client_window_height/25;
  document.getElementById("password").style.fontSize=client_window_height/20;
  document.getElementById("password").style.padding = "5px";
  document.getElementById("password").style.backgroundColor=background_color;
  document.getElementById("password").style.borderColor=main_color;
  document.getElementById("password").style.borderStyle="solid";
  document.getElementById("password").style.borderWidth="1px";
  document.getElementById("password").style.width=client_window_width*3/5;
  document.getElementById("log_in_trigger").style.marginLeft=client_window_width/5;
  document.getElementById("log_in_trigger").style.marginTop=client_window_height/25;
  document.getElementById("log_in_trigger").style.fontSize=client_window_height/20;
  document.getElementById("log_in_trigger").style.borderColor=main_color;
  document.getElementById("log_in_trigger").style.borderStyle="solid";
  document.getElementById("log_in_trigger").style.borderWidth="1px";
  document.getElementById("log_in_trigger").style.width=client_window_width/5;
  document.getElementById("log_in_trigger").style.textAlign="center";
  document.getElementById("log_in_trigger").style.padding = "10px";
  document.getElementById("join_me_link").style.marginLeft=client_window_width/8;
  document.getElementById("join_me_link").style.marginTop=client_window_height/25;
  document.getElementById("join_me_link").style.fontSize=client_window_height/25;
}
