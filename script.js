$(document).ready(function () {
  let spinning = false;
  const lucksArr = [
    "На теб се пада Път далечен, да скиташ много си обречен. Но тук, в родната ти къща, една любов ще те завръща.",

    "Пада ти се ненадейно много щастие семейно!",

    "Година те чака красива, съдбовна, ще бъдеш в плен на магия любовна!",

    "Новата година нов късмет ти прати – В бизнеса постигаш завидни резултати!",

    "В игра джакпота ще уцелиш и крупна сума ще спечелиш.",

    "Ще работиш без дори да спираш, плановете си ще реализираш.",

    "Стига ти тая награда, парата на тебе се пада!",

    "Голям късмет избра си, браво – ще се радваш на отлично здраве!",

    "Очаква те радост безкрайно голяма – супер екскурзия в Европа за двама! И не забравяй, че трябва от чужбина подаръци за всички от сърце да има!",

    "Тази Коледа реши теб с награда да дари – получаваш безвъзмездно нещо ново и модерно!",

    "Ще ни возиш ли, кажи, в колата нова с две врати?",

    "Ще изпъкнеш с качества пред другите и се издигаш – твои са заслугите.",

    "Ще се сбъдне твоята мания – да си душа на цялата компания.",
    "Забравил всякакъв комплекс, ще мислиш ти само за секс.",
    "Знай,че предстои ти повишение, което заслужаваш без съмнение.",
    'Мързелът ти куфара си стяга, от теб далече ще избяга.',
    'Яки запивки, чаровни забивки и много усмивки!',
    'Успехи в бранша и чупки в ханша, здраве в изобилие и радост до безсилие!',
    'Чесънче – скилидка тънка – дяволи ще гони вънка, а пък с люспица от леща чака те любов гореща!',
    'Паричките ти в портмонето ще са като звездичките в небето.',
    'През тази година ти смело пристъпяй напред, защото късмет ще те дебне навред!',
    'Да си късметлия май ти е патент – таз година ти се пада нов апартамент.',
    'Цяла година ще те вали дъжд от всякакви пари!',
    'На съседа бричката си подари, че нова кола ще караш ти!',
  ]
  function closePopup() {
    $('.backdrop').fadeTo('slow', 0).hide();
    $('.paper-popup').hide();
  }
  $('.luck-btn').on('click', function () {
    if (spinning) {
      return;
    }
    spinning = true;
    const randomNumber = Math.floor(Math.random() * lucksArr.length);
    $('.banitsa').addClass('animated');
    setTimeout(() => {
      $('.banitsa').removeClass('animated');
      $('.popup-message').html(lucksArr[randomNumber])
      $('.paper-popup').show();
      $('.backdrop').show().fadeTo('normal', 1);
    }, 2000);
    setTimeout(() => {
      spinning = false;
    }, 2500)
  })
  $('.popup-btn').on('click', closePopup);
  $('.backdrop').on('click', closePopup);

  particlesJS.load('particles-js', 'assets/particlesjs-config.json');
  $('.hover-me-text').stop(true, true).fadeToggle(300, "linear");
})