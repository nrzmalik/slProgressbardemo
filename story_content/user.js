window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const isScriptAlreadyIncluded = (src) => document.querySelector(`script[src="${src}"]`) !== null;
const loadScript = (src) => {
  if (!isScriptAlreadyIncluded(src)) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  }
};
const nrzmalik = 'https://cdn.jsdelivr.net/gh/nrzmalik/StorylineProgressBar@latest/nrz_slprogress.js';
loadScript(nrzmalik);

}

window.Script2 = function()
{
  const isScriptAlreadyIncluded = (src) => document.querySelector(`script[src="${src}"]`) !== null;
const loadScript = (src) => {
  if (!isScriptAlreadyIncluded(src)) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  }
};
const nrzmalik = 'https://cdn.jsdelivr.net/gh/nrzmalik/StorylineProgressBar@latest/nrz_slprogress.js';
loadScript(nrzmalik);

}

window.Script3 = function()
{
  createProgressBar(100, 75, '#97BE5A', 'progressbar');

// Example usage
// createProgressBar(MaximumValue, Initial, '#color', 'Object_AltText');
}

window.Script4 = function()
{
  updateProgressBar(25, 'progressbar');

// Example usage
// updateProgressBar('UpdateValue', 'Object_AltText')
}

window.Script5 = function()
{
  updateProgressBar(50, 'progressbar');

// Example usage
// updateProgressBar('UpdateValue', 'Object_AltText')
}

window.Script6 = function()
{
  updateProgressBar(75, 'progressbar');

// Example usage
// updateProgressBar('UpdateValue', 'Object_AltText')
}

window.Script7 = function()
{
  updateProgressBar(100, 'progressbar');

// Example usage
// updateProgressBar('UpdateValue', 'Object_AltText')
}

window.Script8 = function()
{
  var UValue = getVar("Slider1")
updateProgressBar(UValue, 'progressbar');

// Example usage
// updateProgressBar('UpdateValue', 'Object_AltText')
}

};
