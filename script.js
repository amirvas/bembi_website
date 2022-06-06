// slider
/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides( slideIndex );

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function next ()
{
  showSlides( slideIndex += 1 );
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function prev ()
{
  showSlides( slideIndex -= 1 );
}

/* Устанавливает текущий слайд */
function currentSlide ( n )
{
  showSlides( slideIndex = n );
}

/* Основная функция слайдера */
function showSlides ( n )
{
  var i;
  var slides = document.getElementsByClassName( "slider-item" );
  if ( n > slides.length )
  {
    slideIndex = 1
  }
  if ( n < 1 )
  {
    slideIndex = slides.length
  }
  for ( i = 0; i < slides.length; i++ )
  {
    slides[ i ].style.display = "none";
  }

  slides[ slideIndex - 1 ].style.display = "block";
}




//feedback-slider
var slideIndexFb = 1;
showSlidesFb( slideIndexFb );

function fbNext ()
{
  showSlidesFb( slideIndexFb += 1 );
}

function fbPrev ()
{
  showSlidesFb( slideIndexFb -= 1 );
}

function currentSlideFb ( n )
{
  showSlidesFb( slideIndexFb = n );
}

function showSlidesFb ( n )
{
  var i;
  var slides = document.getElementsByClassName( "slider-item-fb" );
  if ( n > slides.length )
  {
    slideIndexFb = 1
  }
  if ( n < 1 )
  {
    slideIndexFb = slides.length
  }
  for ( i = 0; i < slides.length; i++ )
  {
    slides[ i ].style.display = "none";
  }

  slides[ slideIndexFb - 1 ].style.display = "block";
}