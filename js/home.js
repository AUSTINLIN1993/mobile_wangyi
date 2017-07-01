	var cssEl = document.createElement('style');
	document.documentElement.firstElementChild.appendChild(cssEl);

	function clickFunction(){
		var but1 = document.getElementById('top_menu1');
		var but2 = document.getElementById('top_menu2');
		var but3 = document.getElementById('top_menu3');
		var box1 = document.getElementById('box1');
		var box2 = document.getElementById('box2');
		var box3 = document.getElementById('box3');
	    
	    	but1.parentNode.onclick = function() {
	    		but1.className = "active";
	    		but2.className = "unactive";
	    		but3.className = "unactive";
	    		box1.style.display = "block";
	    		box2.style.display = "none";
	    		box3.style.display = "none";
	    		return false;
	    	}
	    	but2.parentNode.onclick = function() {
	    		but2.className = "active";
	    		but1.className = "unactive";
	    		but3.className = "unactive";
	    		box1.style.display = "none";
	    		box2.style.display = "block";
	    		box3.style.display = "none";
	    		return false;
	    	}
	    	but3.parentNode.onclick = function() {
	    		but3.className = "active";
	    		but1.className = "unactive";
	    		but2.className = "unactive";
	    		box1.style.display = "none";
	    		box2.style.display = "none";
	    		box3.style.display = "block";
	    		return false;
	    	}
	}
	function changeSearchBox(){
		var winWid = document.body.clientWidth;
		var searchBox = document.getElementById('search_box');
		searchBox.style.width = winWid-50+"px";
		// alert(winWid);
	}
      function setPxPerRem(){
          var dpr = 1;
          //把viewport分成10份的rem，html标签的font-size设置为1rem的大小;
          var pxPerRem = document.documentElement.clientWidth * dpr / 10;
          cssEl.innerHTML = 'html{font-size:' + pxPerRem + 'px!important;}';
      }
      setPxPerRem();

      window.onload = function(){
      	clickFunction();
      	changeSearchBox();
      };
