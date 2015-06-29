	$(document).ready(function() {
	  //No Javascript warning
	  $('.no-javascript').hide();  //Add to default.
	});
	var windowWidth = window.innerWidth;

	$(document).ready(function() {
	  // Menu construction
	  $('.menu-controller').append(' <div class="mobile-menu-view"> <ul class="mobile-menu-list col-xs-2 col-lg-2 col-md-2"> </ul> </div><nav class="desktop-menu"> </nav> <div class="nav"></div>');

	  //Mobile items
	  $('.mobile-menu-list').append('<a href="about"><li class="mobile-menu-item col-xs-6 col-lg-6 col-md-6">Our Team</li></a>');
	  $('.mobile-menu-list').append('<a href="features"><li class="mobile-menu-item col-xs-6 col-lg-6 col-md-6">Features</li></a>');
	  $('.mobile-menu-list').append('<a href="design"><li class="mobile-menu-item col-xs-6 col-lg-6 col-md-6">Design</li></a>');
	  $('.mobile-menu-list').append('<a href="security"><li class="mobile-menu-item col-xs-6 col-lg-6 col-md-6">Security</li></a>');
	  $('.mobile-menu-list').append('<a href="tech-info"><li class="mobile-menu-item col-xs-6 col-lg-6 col-md-6">Whitepaper</li></a>');
	  $('.mobile-menu-list').append('<a href="contact"><li class="mobile-menu-item col-xs-6 col-lg-6 col-md-6">Contact</li></a>');

	  //Desktop menu
	  $('.desktop-menu').append('<a id="close-mobile-menu" style="display: none;"></a><div href="a" class="mobile-menu"><div class="hamburger-menu"></div></div>');
	  $('.desktop-menu').append('<a href="."><div class="logo-full"></div></a><div class="desktop-menu-buttons"><a href="https://mail.lavaboom.com"><button class="menu-login clear-blue-button button"></button></a><a href="https://mail.lavaboom.com/secure" target="_blank"><button class="blue-button menu-signup button"></button></div></a><div class="desktop-menu-list-div"><ul class="desktop-menu-list"></ul></div>');
	  $('.desktop-menu-list').append('<a href="features"><li class="desktop-menu-list-item features-menu-item">Caractéristiques</li></a>');
	  $('.desktop-menu-list').append('<a href="security"><li class="desktop-menu-list-item security-menu-item">Sécurité</li></a>');
	  $('.menu-login').html('Connexion');
	  $('.menu-signup').html('S&#39;enregistrer');

	// This highlights menu-items
		if (window.location.href.indexOf('security') > -1 ) {
		  $('.security-menu-item').addClass('desktop-menu-list-item-active');
		} else if (window.location.href.indexOf('features') > -1 ) {
		  $('.features-menu-item').addClass('desktop-menu-list-item-active');
		}

	// Footer is here
	  $('.footer').append(' <div class="container"> <div class="row"> <ul> <div class="col-xs-6 col-lg-2 col-md-4"> <ul class="footer-list"> <li id="footer-list-head">Product</li><li><p><a id="footer-list-item" href="https://mail.lavaboom.com/secure" target="_blank">Sign Up</a></p></li><li><p><a id="footer-list-item" href="features">Features</a></p></li><li><p><a id="footer-list-item" href="premium">Premium</a></p></li></ul> </div><div class="col-xs-6 col-lg-2 col-md-4"> <ul class="footer-list"> <li id="footer-list-head">Security</li><li><p><a id="footer-list-item" href="security">Technical Details</a></p></li><li><p><a id="footer-list-item" href="tech-info">Full Whitepaper</a></p></li><li><p><a id="footer-list-item" href="https://github.com/lavab" target="blank_">Fork us on Github</a></p></li><li><p><a id="footer-list-item" href="canary">Warrant Canary</a></p></li></ul> </div><div class="col-xs-6 col-lg-2 col-md-4"> <ul class="footer-list"> <li id="footer-list-head">Support</li><li><p><a id="footer-list-item" href="http://support.lavaboom.com">FAQ</a></p></li><li><p><a id="footer-list-item" href="http://support.lavaboom.com">Helpdesk</a></p></li></ul> </div><div class="col-xs-6 col-lg-2 col-md-4"> <ul class="footer-list"> <li id="footer-list-head">Lavaboom</li><li><p><a id="footer-list-item" href="about">About us</a></p></li><li><p><a id="footer-list-item" href="https://blog.lavaboom.com" target="blank_">Blog</a></p></li><li><p><a id="footer-list-item" href="jobs">Careers</a></p></li><li><p><a id="footer-list-item" href="press">Press</a></p></li><li><p><a id="footer-list-item" href="contact">Contact us</a></p></li></ul> </div><div class="col-xs-6 col-lg-2 col-md-4"> <ul class="footer-list"> <li id="footer-list-head">Legal</li><li><p><a id="footer-list-item" href="privacy">Privacy Policy</a></p></li><li><p><a id="footer-list-item" href="terms">Terms of Use</a></p></li><li><p><a id="footer-list-item" href="imprint">Imprint</a></p></li></ul> </div><div class="col-xs-6 col-lg-2 col-md-4"> <ul class="footer-list"> <li id="footer-list-head">Follow us</li><div class="footer-social"></div></ul> </div></ul> </div><div class="copyright-banner"> <p id="copyright">© Lavaboom </p></div></div>');

	// CTA's are here
	  $('.cta-container').append('<div class="col-xs-12 cta-div"> <h1 class="header blue-header">Beautifully secure email</h1> <div class="signup-modal-cta"> <div class="reserve"> <form id="res_form"> <p id="reserve-cta"><input class="email signup-input signup-input-cta required" title="Enter your current email address." id="fieldEmail" name="email" size="40" type="email" placeholder="Current email address"></p><div class="username-cta"><input class="email-cta fieldEmail username-text-cta" id="username" title="Enter your desired username." name="username" size="40" type="text" placeholder="Username"> <div class="lavaboomcom-cta noselect"><p id="lavaboomcom-text">@lavaboom.com</p></div></div><p id="reserve-cta"><input class="signup-button-2 signup-button-cta button blue-button" type="button" value="Reserve username"></p><br><a id="party-time" class="animated fadeInDown delay-10">Already got an invite?</a> <p id="signup-error"></p></form> <div class="success-box"> <p id="success-box-text"></p><p id="success-box-text2">Check your email for confirmation.</p><a href="https://twitter.com/intent/tweet?text=I%20Just%20reserved%20my%20Lavaboom.com%20email%20address!%20"><button class="buttons-success">Share your success</button></a> </div></div></div></div>');
	  $('.cta-container-b').append('<div class="col-xs-12 cta-div"> <h1>Try the free version of Lavaboom today.</h1> <a href="https://mail.lavaboom.com/secure" target="_blank"><div class="blue-button cta-button button"><p class="cta-text">Reserve username</p></div></a></div>');


	  $('#copyright').append(new Date().getFullYear());

	  // Footer social media icons
	  $('.footer-social').append('<a href="https://twitter.com/lavaboomhq" target="blank_" class="flaticon-twitter44"></a>');
	  $('.footer-social').append('<a href="https://facebook.com/lavaboomhq" target="blank_" class="flaticon-facebook51"></a>');

	  //Change favicon throughout.
	  (function() {
		var link = document.createElement('link');
		link.type = 'image/x-icon';
		link.rel = 'shortcut icon';
		link.href = '../../img/favicon.png';
		document.getElementsByTagName('head')[0].appendChild(link);
	  }());

	  //Landing page signup
	  $('.signup-button').click(function(){
		$('.modal').show();
		$('.signup-button').hide();
	  });
	  // LFW page signup
	  $('.lfw-hero-button').click(function(){
		$('.modal-overlay').fadeIn(300);
		$('.fieldName').focus();

	  });

	  //Focuses on signup form onload.
	  $('.signup-button').click(function() {
		$('#fieldEmail').focus();
	  });

	  //reserve form: clicking on the @lava.com focuses on the username part.
	  $('.lavaboomcom').click(function(){
		$('.username-text').focus();
	  });
	  $('.lavaboomcom-cta').click(function(){
		$('.username-text-cta').focus();
	  });

	  //removing signup form borders
	  $('#fieldEmail').click(function(){
		$('#fieldEmail').removeAttr('style','border: solid 1px #E84E1B');
	  });
	  $('.fieldEmail').click(function(){
		$('.fieldEmail').removeAttr('style','border: solid 1px #E84E1B');
	  });
	  $('.username').click(function(){
		$('.username').removeAttr('style','border');
	  });

	  //open and close mobile-menu overlay
	  $('#close-mobile-menu').click(function(){
		$('.mobile-menu-view').animate({height:"0px"});
		$('#close-mobile-menu').hide();
		$('.mobile-menu').show();
		$('.mobile-menu-list').hide();
	  });
	  if (windowWidth <= 500) {
		$('.mobile-menu').click(function() {
		  $('.mobile-menu-view').show();
		  $('.mobile-menu-view').animate({height:"195px"}, 100 );
		  $('.mobile-menu').hide();
		  $('.mobile-menu-list').show();
		  $('#close-mobile-menu').show();
		});
	  } else {
		$('.mobile-menu').click(function() {
		  $('.mobile-menu-view').show();
		  $('.mobile-menu-view').animate({height:"195px"}, 100 );
		  $('.mobile-menu').hide();
		  $('.mobile-menu-list').show();
		  $('#close-mobile-menu').show();
		});
	  }
	  if ( windowWidth <= 700 ) {
		$(document).scroll(function(){
		  $('.mobile-menu-view').animate({height:"0px"}, 20);
		  $('#close-mobile-menu').hide();
		  $('.mobile-menu').show();
		  $('.mobile-menu-list').hide();
		});
			$('.hidden-dragon').click(function(){
			  $('.mobile-menu-view').animate({height:"0px"});
			  $('#close-mobile-menu').hide();
			  $('.mobile-menu').show();
			  $('.mobile-menu-list').hide();
			});
		  } else {
		$('.mobile-menu-list').hide();
	}

	  // Validate emails throughout
	  function validateEmail(email) {
		  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		  return re.test(email);
	  }



	  // LFW page modal
	  $(document).mouseup(function (e) {
		var premiumModal = $('.premium-signup-modal');
		var premiumModalOverlay = $('.modal-overlay');
		if (!premiumModal.is(e.target) && premiumModal.has(e.target).length === 0) { premiumModalOverlay.fadeOut(300); $('#signup-error3').hide(); $('#signup-error3').empty(); $('.fieldEmail').removeAttr('style','border: solid 1px #E84E1B'); }
	  });



	  // LFW Modal signup button click
	$(".signup-button-3").click(function(event) {
		$('#signup-error3').hide();
		$('#signup-error3').empty();
		  var email = $(".fieldEmail").val();
		  if (validateEmail(email)) {
			// SUCCESS
			var url = "https://technical.lavaboom.com/subscribe";
			var submission = {
			  name: $('.fieldName').val(),
			  company: $('.fieldCompany').val(),
			  email: $('.fieldEmail').val(),
			  list: 'fq8I6umzGPA2lpgzuEBy4g',
			  boolean: true
			};
			var callback = function(data, textStatus, jqXHR) {
			};
			console.log({
			  url: url, submission: submission
			});
			$.post(url, submission, callback);

			$('#res_form').hide();
			$('.success-box-2').fadeIn('slow');
			$('#success-box-text').append("Thank you for your interest. An email has been sent to " + email);

		  } else {
			// Failure
			if (email.length < 1) {
			  $('#signup-error3').append('Email is required.');
			  $('#signup-error3').fadeIn('fast');
			  $('.fieldEmail').css('border','solid 1px #E84E1B');
			}
			else {
			  $('#signup-error3').append(email + ' is not a valid email address.');
			  $('#signup-error3').fadeIn('fast');
			  $('.fieldEmail').css('border','solid 1px #E84E1B');
			}
		  }

		  return false;
	  });




	//Signup enter click submits form
	$(".fieldEmail").keyup(function(event){
	  if(event.keyCode == 13){
		$(".signup-button-2").click();
		$(".signup-button-3").click();
	  }
	});

	// Signup success and error messages
	var hasPrefix = function(str, prefix) {
	  return (str.substring(0, prefix.length) === prefix);
	};

	$(".signup-button-2").click(function(event) {
	  var url = "https://technical.lavaboom.com/subscribe";
	  var submission = {
		name: "undefined",
		email: $('#fieldEmail').val(),
		list: '79P4A9RzHUgK70tiFy8KaA',
		boolean: true
	  };
	  var callback = function(data, textStatus, jqXHR) {
	  };
	  console.log({
		url: url, submission: submission
	  });
	  $.post(url, submission, callback);
	});
	});

	$(document).ready(function() {
	  $(".signup-button-2").click(function(event) {
		$('#signup-error').hide();
		$('#signup-error').empty();

		var url = "https://api.lavaboom.com/accounts";
		var submission = {
		  username: $('input[name=username]').val(),
		  alt_email: $('input[name=email]').val()
		};

		if (submission.alt_email.indexOf('@') < 0) {
		  $('#signup-error').append('please provide a valid email address!');
		  $('#signup-error').fadeIn('fast');
		  return;
		}


		if (submission.username.length < 2) {
			$('#signup-error').append('username is too short!');
			$('#signup-error').fadeIn('fast');
			return;
		}

		if (!/^[a-zA-Z0-9\\.]+$/.test(submission.username)) {
			$('#signup-error').append('username contains invalid character!');
			$('#signup-error').fadeIn('fast');
			return;
		}

		$.post(url, submission)
			.success(function (r){
				if (r.success) {
					$('#res_form').hide();
					$('.success-box').fadeIn('slow');
					$('#success-box-text').append(r.message);
				}
			})
			.fail(function (r){
				if (!r.responseJSON.success) {
					$('#signup-error').append(r.responseJSON.message);
					$('#signup-error').fadeIn('fast');
				}
			});
	  });
	});

	//Careers hint for console.
	$(document).ready(function(){
	  console.log("    _                      _ \n    | |                    | |  \n    | |     __ ___   ____ _| |__   ___   ___  _ __ ___ \n    | |    / _` \\ \\ / / _` | '_ \\ / _ \\ / _ \\| '_ ` _ \\ \n    | |___| (_| |\\ V / (_| | |_) | (_) | (_) | | | | | | \n    |______\\__,_| \\_/ \\__,_|_.__/ \\___/ \\___/|_| |_| |_| \n    ==================================================== \n    Know some code? We're looking for talented people \n    like you... https://Lavaboom.com/jobs \n    ==================================================== \n");

	});

	// Balls list on landing page.
	$(document).ready(function(){
	  $('.arrow-next').click(function() {
		var currentSlide = $('.active-slide');
		var nextSlide = currentSlide.next();

		var currentDot = $('.active-dot');
		var nextDot = currentDot.next();

		if(nextSlide.length === 0) {
		  nextSlide = $('.slide').first();
		  nextDot = $('.dot').first();
		}

		currentSlide.removeClass('active-slide').hide();
		nextSlide.fadeIn(600).addClass('active-slide');

		currentDot.removeClass('active-dot');
		nextDot.addClass('active-dot');

	  $('.arrow-prev').click(function() {
		var currentSlide = $('.active-slide');
		var prevSlide = currentSlide.prev();

		var currentDot = $('.active-dot');
		var prevDot = currentDot.prev();

		if(prevSlide.length === 0) {
		  prevSlide = $('.slide').last();
		  prevDot = $('.dot').last();
		}

		currentSlide.removeClass('active-slide').hide();
		prevSlide.fadeIn(600).addClass('active-slide');

		currentDot.removeClass('active-dot');
		prevDot.addClass('active-dot');
	  });

	});
	});

	var nextQuote = function(){
		var currentSlide = $('.active-slide');
		var nextSlide = currentSlide.next();

		var currentDot = $('.active-dot');
		var nextDot = currentDot.next();

		if(nextSlide.length === 0) {
		  nextSlide = $('.slide').first();
		  nextDot = $('.dot').first();
		}

		currentSlide.removeClass('active-slide').hide();
		nextSlide.fadeIn(600).addClass('active-slide');

		currentDot.removeClass('active-dot');
		nextDot.addClass('active-dot');
	};
	window.setInterval(nextQuote, 6000);

	// Security page clickthrough
	var attackVectors = [];
	function attackVector(header, paragraph) {
	  this.h = header;
	  this.p = paragraph;
	  attackVectors.push(this);
	}
	var v1 = new attackVector("Client-side encryption","<p class=&#34;subheader black-subheader text-right&#34;>Lavaboom encrypts data client-side by default. This data includes emails, contacts, passwords, and various other data provided by users. It is encrypted using a keychain stored in the users browser cache, similar to a plugin like <a href=# class=whiteLink target=blank>Mailvelope</a>. The key is generated client-side with <a href=http://openpgpjs.org/ class=whiteLink >OpenPGP.js</a>, once generated the public key is uploaded to Lavaboom's key server and the keychain is encrypted using your account password. The keychain can be backed up to your hard drive at any time and re-imported into the browser. Every email, even if not sent end-2-end encrypted, is encrypted at rest with your public key. We do this for your addressbook too.</p>");
	var v2 = new attackVector("Subverting Man in the Middle attacks","A '<a class=whiteLink target=blank href=http://en.wikipedia.org/wiki/Man-in-the-middle_attack>Man-in-the-middle attack</a>' is the process of intercepting and potentially altering communications between two parties. By performing a MitM attack on two parties emailing each other, a hacker can read the content of all mails sent and their metadata. A hacker can also use a MitM attack to interrupt the key exchange and render end-2-end encryption useless. If a hacker were to intercept unencrypted traffic between you and your mail provider, they would be able to steal your login data (email and password), though your private keychain key never leaves your computer in an unencrypted state. Lavaboom subverts man-in-the-middle attacks by using HTTPS Everywhere, by making use of strong SSL encryption we are able to protect against MitM attacks.");
	var v3 = new attackVector("Server-side encryption","Our servers are located in two different datacenters hosted by two independent providers. Thus it's unlikely for us to experience any downtime. There is also german privacy law, one of the best in the world, protecting you and your data from snooping through it and preventing us and any government agency to request us to install anything on them. Furthermore we have custom hardware that is set up with detection methods for intrusion and unauthorized physical access. We have no access to anything but the vital information regarding your account. We encrypt religiously. Encrypt everything is our motto, to stay safe and be secure.");
	var v4 = new attackVector("Encrypted in-transit","It is a reasonably simple operation to set up a node to intercept emails in transit over the Internet. The NSA, in partnership with counterpart organisations in Australia, Canada, New Zealand and the United Kingdom, is tapping undersea cables to collect all communication data in transit across the internet. Without end-2-end encryption your emails are available in plain text to government organisations and individual hacker groups. Metadata is also available as part of the email, this contains identifying information about you and the recipient of your email.<br><br> Lavaboom emails in transit remain encrypted if end-2-end encryption is enabled client-side. Millions of people use PGP, the encryption software we use to protect emails in transit and at rest. This means that if you have a contact already using PGP, Lavaboom is seamlessly compatible with their encryption software. Lavaboom obfuscates metadata or removes it (such as location data) where possible. We protect your emails in transit with seamless end-2-end encryption. However if you can also send emails unencrypted and in this instance your communications will be unprotected.");
	var v5 = new attackVector("Encrypted before reaching outside servers","When your email reaches a legacy service like Yahoo! Mail or Gmail, if it was encrypted client-side it will remain encrypted on your recipient's email provider's server. This is useful if you wish to avoid <a href=https://blog.lavaboom.com/>dragnet surveillance</a>. The NSA's dragnet surveillance of email communications is made possible via partnerships (Special Service Operations) with email providers such as Gmail, Yahoo! Mail, Outlook and others. These partnerships involve building '<a class=whiteLink href=http://en.wikipedia.org/wiki/Backdoor_%28computing%29 target=new>back doors</a>' into the servers of email providers and sending data to a government data center, for example the <a class=whiteLink href=http://en.wikipedia.org/wiki/Utah_Data_Center >NSA data center in Utah</a>. By enabling end-2-end encryption you can protect yourself and your contacts against this surveillance. Like vaccinations, the more people that use end-2-end encryption, the better protected we all are.");
	var v6 = new attackVector("Still encrypted","Emails travelling between your recipient's email provider and their computer can be intercepted and altered. This makes the public key exchange over email tricky, so we suggest using an alternative communication method to verify the key exchange. Please visit our help center for more information on manually exchanging keys. If you have sent an encrypted email your communication is still not safe from Man-in-the-middle attacks between your recipient's provider and their computer, this is because emails can be altered before reaching your recipient. Unless you or your recipient are a specific target for suveillance (or might become a target in the future) then it's probably ok for your recipient to use a legacy email provider.");
	var v7 = new attackVector("Decrypted client-side","Lavaboom seamlessly decrypts data client-side. You can send seamlessly encrypted email to your contacts if they have end-2-end encryption enabled. If your recipient does not have encryption enabled we can help them get it set up without the need to change email provider.");

	$('.security-main-h').text(v1.h);
	$('.security-main-p').html(v1.p);
	$(document).ready(function(){
	  $('.attack-vector').click(function(){
		$('.attack-vector').removeClass('attack-vector-active');
		$(this).addClass('attack-vector-active');
	  // In future would be nice if left-keypress scrolled through the vectors
	  // `this` is the DOM element that was clicked
	  var index = $( ".attack-vector" ).index( this );
	  var object = attackVectors[index];
	  console.log(attackVectors[index]);
	  $('.security-main-h').text(object.h);
	  $('.security-main-p').html(object.p);
	});
	if ( windowWidth < 520 ) {

	  $('.v1').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		var index = $( ".attack-vector" ).index( this );
		var object = attackVectors[index];
	  if (isInView) {
		// element is now visible in the viewport
		$('.security-main-h').text(object.h);
		$('.security-main-p').html(object.p);
		$('.attack-vector').removeClass('attack-vector-active');
		$(this).addClass('attack-vector-active');
	  }
		});
		$('.v2').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		  var index = $( ".attack-vector" ).index( this );
		  var object = attackVectors[index];
		if (isInView) {
		  // element is now visible in the viewport
		  $('.security-main-h').text(v2.h);
		  $('.security-main-p').html(v2.p);
		  $('.attack-vector').removeClass('attack-vector-active');
		  $(this).addClass('attack-vector-active');
		}
		});

		$('.v3').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		  var index = $( ".attack-vector" ).index( this );
		  var object = attackVectors[index];
		if (isInView) {
		  // element is now visible in the viewport
		  $('.security-main-h').text(object.h);
		  $('.security-main-p').html(object.p);
		  $('.attack-vector').removeClass('attack-vector-active');
		  $(this).addClass('attack-vector-active');
		}
		});
		$('.v4').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		  var index = $( ".attack-vector" ).index( this );
		  var object = attackVectors[index];
		if (isInView) {
		  // element is now visible in the viewport
		  $('.security-main-h').text(object.h);
		  $('.security-main-p').html(object.p);
		  $('.attac-vector').removeClass('attack-vector-active');
		  $(this).addClass('attack-vector-active');
		}
		});
		$('.v5').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		  var index = $( ".attack-vector" ).index( this );
		  var object = attackVectors[index];
		if (isInView) {
		  // element is now visible in the viewport
		  $('.security-main-h').text(object.h);
		  $('.security-main-p').html(object.p);
		  $('.attack-vector').removeClass('attack-vector-active');
		  $(this).addClass('attack-vector-active');
		}
		});
		$('.v6').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		  var index = $( ".attack-vector" ).index( this );
		  var object = attackVectors[index];
		if (isInView) {
		  // element is now visible in the viewport
		  $('.security-main-h').text(object.h);
		  $('.security-main-p').html(object.p);
		  $('.attack-vector').removeClass('attack-vector-active');
		  $(this).addClass('attack-vector-active');
		}
		});
		$('.v7').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		  var index = $( ".attack-vector" ).index( this );
		  var object = attackVectors[index];
		if (isInView) {
		  // element is now visible in the viewport
		  $('.security-main-h').text(object.h);
		  $('.security-main-p').html(object.p);
		  $('.attack-vector').removeClass('attack-vector-active');
		  $(this).addClass('attack-vector-active');
		}
	});
	}
	});

	var decrypting = false;

	$(document).scroll(function() {
	  var scrollPosition = $(document).scrollTop();

	if (scrollPosition > 900) {
		  if (!decrypting) {
		  // element is now visible in the viewport
		  $(".codebox-sometext").show();
		  $(".codebox-sometext").decodeEffect(2000,5);
		  decrypting = true;
		}
	  }
	else {
		if (!decrypting) {
		  $(".codebox-sometext").hide();
		}
	  }
	});


	// Cryptotext experiment
	jQuery.fn.decodeEffect = (function ($) {
		var defaultOptions = {
			duration: 200,
			stepsPerGlyph: 5,
			codeGlyphs: "ABCDEFGHIJKLMNOPQRSTUWVXYZ1234567890",
			className: "code"
		};

		// get a random string from the given set,
		// or from the 33 - 125 ASCII range
		function randomString(set, length) {
			var string = "",
				i, glyph;
			for (i = 0; i < length; i++) {
				glyph = Math.random() * set.length;
				string += set[glyph | 0];
			}
			return string;
		}

		// this function starts the animation. Basically a closure
		// over the relevant vars. It creates a new separate span
		// for the code text, and a stepper function that performs
		// the animation itself
		function animate(element, options) {
			var text = element.html(),
				span = $("<div/>").addClass(options.className).insertAfter(element),
				interval = options.duration / (text.length * options.stepsPerGlyph),
				step = 0,
				length = 0,
				stepper = function () {
					if (++step % options.stepsPerGlyph === 0) {
						length++;
						element.html(text.slice(0, length));
					}
					if (length <= text.length) {
						span.html(randomString(options.codeGlyphs, text.length - length));
						setTimeout(stepper, interval);
					} else {
						span.remove();
					}
				};
			element.text("");
			stepper();
		}

		// Basic jQuery plugin pattern
		return function (options) {
			options = $.extend({}, defaultOptions, (options || {}));
			return this.each(function () {
				animate($(this), options);
			});
		};
	}(jQuery));

	$(document).ready(function () {
	  setTimeout(function(){
	  $(".p1").show();
	  $(".p1").decodeEffect(5000,10);
	  }, 1000);
	  setTimeout(function(){
		$(".p2").show();
		$(".p2").decodeEffect(5000,10);
	  }, 3000);
	});

	$(document).ready(function() {
	  setTimeout(function(){
		$('.email_container').delay(4500).fadeIn('slow');
	  });
	}, 2000);

	// 299 - 318 are for filling input fields from URL (useful for invites).
	function GetURLParameter(sParam) {
	  var sPageURL = window.location.search.substring(1);
	  var sURLVariables = sPageURL.split('&');
	  for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
		  return sParameterName[1];
		}
	}
	}

	var username = GetURLParameter('username');
	var fieldEmail = GetURLParameter('fieldEmail');

	$('#fieldEmail').attr("value", fieldEmail);
	$('#username').attr("value", username);
