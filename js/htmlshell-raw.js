if(typeof String.prototype.trim!=="function"){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}}var htmlShell=function(){this.theCommandInputter="";this.maxCommandLength=50;this.theCommandWindow=document.getElementById("shell-container");this.cursorStat=false;this.initializeShell()};htmlShell.prototype.blinkCursor=function(){if(this.cursorStat){this.cursor.className="blinking-cursor-off"}else{this.cursor.className="blinking-cursor"}this.cursorStat=!(this.cursorStat)};htmlShell.prototype.initializeShell=function(){var a=true;var b=1000;$this=this;if($this.getCookie("init")=="1"){$this.prepareShellInput();$this.theCommandInputter="clear";$this.processShellInput();return}setTimeout(function(){if(Modernizr.canvas){a=a&&true;$this.theCommandWindow.innerHTML=$this.theCommandWindow.innerHTML+'<p>* Checking HTML5 Feature - Canvas <span style="text-align: right; float:right;">[<span style="color: green;">PASSED</span>]</span></p>'}else{a=a&&false;$this.theCommandWindow.innerHTML=$this.theCommandWindow.innerHTML+'<p>* Checking HTML5 Feature - Canvas <span style="text-align: right; float:right;">[<span style="color: green;">FAILED</span>]</span></p>'}setTimeout(function(){if(Modernizr.localstorage){a=a&&true;$this.theCommandWindow.innerHTML=$this.theCommandWindow.innerHTML+'<p>* Checking HTML5 Feature - Local Storage <span style="text-align: right; float:right;">[<span style="color: green;">PASSED</span>]</span></p>'}else{a=a&&false;$this.theCommandWindow.innerHTML=$this.theCommandWindow.innerHTML+'<p>* Checking HTML5 Feature - Local Storage <span style="text-align: right; float:right;">[<span style="color: green;">FAILED</span>]</span></p>'}setTimeout(function(){if(Modernizr.audio.ogg!=""||Modernizr.audio.mp3!=""){a=a&&true;$this.theCommandWindow.innerHTML=$this.theCommandWindow.innerHTML+'<p>* Checking HTML5 Feature - OGG or MP3 Audio Playback <span style="text-align: right; float:right;">[<span style="color: green;">PASSED</span>]</span></p>'}else{a=a&&false;$this.theCommandWindow.innerHTML=$this.theCommandWindow.innerHTML+'<p>* Checking HTML5 Feature - OGG or MP3 Audio Playback <span style="text-align: right; float:right;">[<span style="color: green;">FAILED</span>]</span></p>'}setTimeout(function(){if(a){document.cookie="init=1";$this.theCommandWindow.innerHTML=$this.theCommandWindow.innerHTML+'<p>* Preparing shell interface <span style="text-align: right; float:right;">[<span style="color: yellow;">LOADING</span>]</span></p>';setTimeout(function(){$this.prepareShellInput();$this.theCommandInputter="clear";$this.processShellInput();$this.theCommandInputter="home";$this.theCommandDisplay.innerHTML="home";$this.processShellInput()},2000)}else{$this.theCommandWindow.innerHTML=$this.theCommandWindow.innerHTML+'<p>* Thinking about u ... <span style="text-align: right; float:right;">[<span style="color: red;">FEEL SORRY :-/ </span>]</span></p>';var c='<div style="text-align:center">\n';c+="<p>Oh Man! you really disappointed me!</p><p>I thought you are a modern guy who plays with a modern HTML 5 based browser!</p>\n";c+="<p>Come on! Please don't be a cave man!!</p>\n";c+="<p>Go and get a latest browser dude!</p>\n";c+="</div>";$this.theCommandWindow.innerHTML=$this.theCommandWindow.innerHTML+c}},b)},b)},b)},b)};htmlShell.prototype.getCookie=function(d){var b=d+"=";var a=document.cookie.split(";");for(var e=0;e<a.length;e++){var f=a[e].trim();if(f.indexOf(b)==0){return f.substring(b.length,f.length)}}return""};htmlShell.prototype.processShellInput=function(){$this=this;var a={};a.command=this.theCommandInputter.trim();this.theCommandInputter="";a.commandHTML=a.command.replace(/ /ig,"&nbsp;");a.beforeProcess=function(){$this.theCommandDisplay.removeAttribute("id");$this.cursor.parentNode.removeChild($this.cursor);delete $this.theCommandDisplay;delete $this.cursor};a.afterProcess=function(){var b=document.createElement("p");b.innerHTML='[guest-user@vassim.in] $ <span id="command-display"></span><span id="blinking-cursor" class="blinking-cursor">&nbsp;</span>';$this.theCommandWindow.appendChild(b);$this.theCommandDisplay=document.getElementById("command-display");$this.cursor=document.getElementById("blinking-cursor");window.scrollTo(0,$this.theCommandWindow.scrollHeight)};a.notfound=function(){var b=document.createElement("p");b.innerHTML="Error: Command '"+this.commandHTML+"' not found.";this.beforeProcess();$this.theCommandWindow.appendChild(b);this.afterProcess()};a.clearscreen=function(){this.beforeProcess();$this.theCommandWindow.innerHTML="";this.afterProcess()};a.help=function(){this.beforeProcess();$this.theCommandWindow.innerHTML=$this.theCommandWindow.innerHTML+"<p>You can use the following commands in this shell</p> <table> </tr> <tr> <td>clear</td> <td>-</td> <td>Wipes out the entire shell screen</td> </tr> <tr> <td>home</td> <td>-</td> <td>Loads vassim's home page</td> </tr> <tr> <td>pacman</td> <td>-</td> <td>Loads the famous PacMan game</td> </tr>  <tr> <td>about</td> <td>-</td> <td>Displays the author and the copyright information about this utility</td> <tr> <td>help</td> <td>-</td> <td>Lists out all the commands that can be used with this utility</td> </tr> </table>";this.afterProcess()};a.pacman=function(){$this.theCommandWindow.innerHTML='<p>[guest-user@vassim.in] $ pacman</p><div id="pacman"></div> <div id="pacmaninf" style="width:365px;margin:0 auto"> <table style="margin:0;font-size:15px"> <tr> <td style="padding-right:0px;">N - Start New Game</td> <td style="padding-right:0px;">S - Disable/Enable Sound</td> </tr><tr> <td style="padding-right:0px;">P - Pause Game</td> <td style="padding-right:0px;">Q - Quit Game</td> </tr> </table> </div>';var c=document.getElementById("pacman");var d=document.getElementById("pacmaninf");var b=PACMAN.init(c,d,$this,"")};a.about=function(){var b='<div style="margin-left:2em;"><br/><p>HTML Shell</p>\n';b+="<p>(C) 2014 by Vassim Shahir </p>\n";b+="<br />\n";b+="<p>This is a funny program which looks almost like the great Bash in Linux.</p>\n";b+="<p>The author created this utility just for a fun during his college days.</p><br/></div>";this.beforeProcess();$this.theCommandWindow.innerHTML=$this.theCommandWindow.innerHTML+b;this.afterProcess()};a.home=function(){var b='<div class="vassim-intro"> <br/><br/><br/><br/> <pre>\n';b+="####        #### ######        #############   ############# #### ####        ####\n";b+=" ####      #### ########      ##############  ############## #### ######    ######\n";b+=" ####      #### ###  ###     ############### ############### #### #######  #######\n";b+="  ####    #### ###    ###    ########        ########        #### ################\n";b+="  ####    #### ##########    #############   #############   #### ################\n";b+="   ####  #### ############    #############   #############  #### ####  ####  ####\n";b+="   ####  #### ############     #############   ############# #### ####  ####  ####\n";b+="    ######## ####      ####        #########       ######### #### ####  ####  ####\n";b+="    ######## ####      ####  ############### ############### #### ####  ####  ####\n";b+="     ###### ####        #### ##############  ##############  #### ####  ####  ####\n";b+="     ###### ####        #### #############   #############   #### ####  ####  ####</pre> <br/> <p>It seems like Vassim's home page is not ready yet :-(</p><br /> <p>Please come again later<p>or</p><p>Type 'help' for more Details</p> <br/> </div>";this.beforeProcess();$this.theCommandWindow.innerHTML=$this.theCommandWindow.innerHTML+b;this.afterProcess()};switch(a.command){case"":case" ":break;case"clear":a.clearscreen();break;case"help":a.help();break;case"home":a.home();break;case"about":a.about();break;case"pacman":a.pacman();break;default:a.notfound()}};htmlShell.prototype.prepareShellInput=function(){var a=document.createElement("p");a.innerHTML='[guest-user@vassim.in] $ <span id="command-display"></span><span id="blinking-cursor" class="blinking-cursor">&nbsp;</span>';this.theCommandWindow.appendChild(a);this.theCommandDisplay=document.getElementById("command-display");this.cursor=document.getElementById("blinking-cursor");var c=this;var b=function(d){switch(d.keyCode){case 37:case 38:case 39:case 40:return false;break;case 13:c.processShellInput();break;case 8:c.theCommandInputter=c.theCommandInputter.substr(0,c.theCommandInputter.length-1);break;default:if(c.theCommandInputter.length<=c.maxCommandLength){c.theCommandInputter=c.theCommandInputter+String.fromCharCode(d.charCode)}}c.theCommandDisplay.innerHTML=c.theCommandInputter.replace(/ /ig,"&nbsp;")};document.onkeypress=b;setInterval(function(){c.blinkCursor()},400)};