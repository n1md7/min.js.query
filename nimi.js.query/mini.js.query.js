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
function find(val){
	return new Element(val)
}