function About()
{
	this.init();	
}

About.prototype = 
{
	container: null,

	init: function()
	{
		var text, containerText;
		
		this.container = document.createElement("div");
		this.container.className = 'gui';
		this.container.style.position = 'absolute';
		this.container.style.top = '0px';
		this.container.style.visibility = 'hidden';
		
		containerText = document.createElement("div");
		containerText.style.margin = '10px 10px';
		containerText.style.textAlign = 'left';
		this.container.appendChild(containerText);

		text = document.createElement("p");
		text.style.textAlign = 'center';		
		text.innerHTML = '<strong>DrawPad</strong> <a href="changelog.txt" target="_blank">r' + REV + '</a> by <a href="https://x.com/Selahammahlekoh" target="_blank">Alan Davis</a>';
		containerText.appendChild(text);

		text = document.createElement("p");
		text.style.textAlign = 'center';
		text.innerHTML = 'Brush: <span class="key">d</span><span class="key">f</span> size, <span class="key">r</span> reset<br />Color: <span class="key">shift</span> wheel, <span class="key">alt</span> picker<br />';
		containerText.appendChild(text);

		text = document.createElement("p");
		text.style.textAlign = 'center';
		text.innerHTML = '<a href="http://mrdoob.com/blog/post/689" target="_blank">Info</a> - <a href="http://github.com/mrdoob/harmony" target="_blank">Source Code</a>';
		containerText.appendChild(text);

		text = document.createElement("hr");
		containerText.appendChild(text);

		text = document.createElement("p");
		text.innerHTML = '<em>Sketchy</em>, <em>Shaded</em>, <em>Chrome</em>, <em>Fur</em>, <em>LongFur</em> and <em>Web</em> are all variations of the neighbour points connection concept. First implemented in <a href="http://www.zefrank.com/scribbler/" target="_blank">The Scribbler</a>.';
		containerText.appendChild(text);
		
		text = document.createElement("p");
		text.innerHTML = "";
		containerText.appendChild(text);
		
		text = document.createElement("p");
		text.style.textAlign = 'center';
		text.innerHTML = "";
		containerText.appendChild(text);
	},
	
	show: function()
	{
		this.container.style.visibility = 'visible';		
	},
	
	hide: function()
	{
		this.container.style.visibility = 'hidden';
	}
}
