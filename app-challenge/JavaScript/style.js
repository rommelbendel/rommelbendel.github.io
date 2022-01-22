$(document).ready(function() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  var navBar = $('.NavBar');
  var navBarLogo = $('#NavBarLogo');
  var contentTransition = $('.ContentTransition');

  if (screenWidth >= screenHeight) {
    const logoscale = screenWidth / 21 + 'px';
    navBarLogo.css({
      width: logoscale,
      height: logoscale
    });
  } else {
    const logoscale = screenWidth / 7 + 'px';
    navBarLogo.css({
      width: logoscale,
      height: logoscale
    });
  }

  const transitionMargin = navBar.height();
  const transitionMarginTop = transitionMargin + 'px';
  const transitionHeight = screenHeight - transitionMargin + 'px';
  const xShift = -1 * contentTransition.position()['left'] + 'px';
  contentTransition.css({
    marginTop: transitionMarginTop,
    width: screenWidth,
    height: transitionHeight,
    marginLeft: xShift
  });
})
