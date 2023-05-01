import $ from "jquery";
import "./vendor/swiper-config.js";
import "./vendor/map.js";

$( document ).ready( () => {

  // Burger menu
  $( ".header__menu-button" ).on( "click", () => {
    $( ".header__menu-button" ).toggleClass( "header__menu-button--active" );
    $( ".root" ).toggleClass( "root--lock" );
    $( ".navigation" ).fadeToggle().css( "display", "flex" );
  } );

  // Scroll header
  if ( $( window ).scrollTop() > 50 ) {
    $( ".header" ).addClass( "header--colored" );
  }

  $( window ).on( "scroll", () => {
    if ( $( window ).scrollTop() > 50 ) {
      $( ".header" ).addClass( "header--colored", 2000 );
    } else {
      $( ".header" ).removeClass( "header--colored" );
    }
  } );

  // Get current year for footer
  $( ".footer__copyright-year" ).text( ( new Date ).getFullYear() );
} );

console.log( `Ivan Monichev © ${new Date().getFullYear()} — https://github.com/IvanMonichev` );
