/*
	by Bichiko (harry) Kodua ,2017
	example how to user js API
	
*************************************************************************************************
	you can pass object or element selector to find method
	like
		find('body')
		find('.myclass')
		find('#id')
		find(document.body)
		find(document.querySelector('div > button')) takes first element
		find('div>.myclass')
	and you can attach any method which is defined below

	create - creates html element; parameters - create(elementName)
	css - style element 
	attr
	on
	delete
	html
	val


	var navbar = find('body').html([
	'<nav class="navbar navbar-default">',
	  '<div class="container-fluid">',
	    '<div class="navbar-header">',
	      '<a class="navbar-brand" href="#">WebSiteName</a>',
	    '</div>',
	    '<ul class="nav navbar-nav">',
	      '<li class="active"><a href="#">Home</a></li>',
	      '<li><a href="#">Page 1</a></li>',
	      '<li><a href="#">Page 2</a></li>',
	      '<li><a href="#">Page 3</a></li>',
	    '</ul>',
	  '</div>',
	'</nav>'
	])
	var body = find('body').html([
		'<div class="jumbotron text-center">',
		  '<h1>Bootstrap Page With My Beautiful JS <code>CODE</code></h1>',
		  '<p>Resize this responsive page to see the effect!</p>', 
		'</div>'
	])


	var container = find('body').create('div').attr('class', 'container-fluid').css({position:'relative'})

	var mainCss = {
		'position':'absolute',
		'width': '100px',
		'left': '0px',
		'box-sizing':'border-box',
		'text-align':'center',
		'cursor':'pointer',
		'padding':'40px 0px 40px 0px',
		'transition': 'all 1s'
	}
	 
	var left = true
	var array = [2,3,4,5,6,7,8,9]
	array.forEach(function(element, index){
		find(container.element)
		.create('div')
		.on('click', function(){
			left?find(this).css({left:window.innerWidth-120+'px'}):find(this).css({left:0})
			left=left?false:true
		})
		.css(mainCss)
		.html('Click Me')
		.css({
			'top':index*100+10+'px',
			'background-color': 'rgba(255,0,0,0.'+index+')',
		})		
	})

*/

(function(window, document){
	function Element(parent){
		parent = (typeof parent === 'object') ? parent : document.querySelector(parent)
		this.element = parent
		var style = this.element.getAttribute('style') || ''
		this.toogled = false

		this.create = function(element){
			this.element = document.createElement(element)
			parent.appendChild(this.element)
			return this
		}
		this.css = function(styles){
			for(var st in styles){
				style += st+":"+styles[st]+";"
			}
			this.element.setAttribute("style", style)
			return this
		}
		this.attr = function(attr, val = null){
			if(val === null)
				return this.element.getAttribute(attr) || ''
			this.element.setAttribute(attr, val)
			return this
		}
		this.on = function(evnt, func){
			this.element.addEventListener(evnt, func)
			return this
		}
		this.delete = function(){
			parent.parentNode.removeChild(parent)
			return this
		}
		this.html = function(html = null){
			if(html === null)
				return this.element.innerHTML || ''
			this.element.innerHTML += (html instanceof Array) ? html.join('') : html
			return this
		}
		this.val = function(val = null){
			if(val === null)
				return this.element.value || ''
			this.element.value = val
			return this
		}
	}
	window.find = function(val){
		return new Element(val)
	}
})(window, document)