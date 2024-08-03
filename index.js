// //function bilan ishlab ko'rishimiz yanada yaxshilanishi uchun bugun
// sila bilan oddiy o'yin yasab ko'ramiz

// //divlani chaqirvolamiza

// let count = document.getElementById("count");
let dino = document.getElementById('dino');
let cactus = document.getElementById('cactus');
let son = document.querySelector('.son');

// //function yaratamiz
function jump() {
  // jump - sakrash
  // dispatchEvevnt bu ham event turiga kiradi, ya'ni bu jara
  // yonda qanaqadur hodisa bo'ladi huddi addEventListenerga o'xshab
  //  ketadi lekn bu huddi metoddaka ishlatiladi function emas
  if (dispatchEvent.classList != 'jump') {
    dino.classList.add('jump');
    //setTimeout funksiyani ma'lum vaqt oralig'idan keyin bir marta
    //  chaqirish imkonini beradi.
    setTimeout(function () {
      dino.classList.remove('jump');
    }, 500);
  }
}

// //endi biza o'yinda yutvotkan yoki da yutqizayotkanimizani bilishimiz uchun funksiya yozib olamizaa
const funcLive = setInterval(function () {
  //   //setInterval ma'lum vaqt oralig'idan keyin funksyiani takrorlab,
  //  funksiyani muntazam ravishda chaqirish imkonini beradi.
  let dinoTepaga = parseInt(
    window.getComputedStyle(dino).getPropertyValue('top')
    //getCompyutedStyle() stillarini olishda ishlatiladi,  ya'ni qaysidir class yoki id ni
    //  bervorilsa ushani stillarini  chaqirib ishlatib beradi toggle() ga o'xshab ketadi
    //getPropertyValue() bu narsa bilan u umumiy qanaqa ish bajarishini berib ketamiz, misol uchun "top",
    //  ya'ni tepaga  harakatlanadigon stil berilgan dganga o'xshab
  );
  let cactusChapga = parseInt(
    window.getComputedStyle(cactus).getPropertyValue('left')
  );

  //   //endi funksiyamizga yutgan yutqizganlarini tekshirib turish uchun if else yozamiz
  if (cactusChapga > 0 && cactusChapga < 60 && dinoTepaga >= 150) {
       //agar cactus 0 dan kotta bo'lsa va cactus 60 dan kichik bo'lsa va dinozavr
    //  150ga teng yoki undan kotta bo'lsa
    dino.style.animationPlayState = 'paused';
    cactus.style.animationPlayState = 'paused';
         //animationPlayState bu narsa property deyiladi - ya'ni bizaga shu o'zgaruvchilarni stillarini
    //  to'xtatib beradi

    // alert('Oops, YUTQIZDING!');
    // window.location.reload();
  }
});

// //Xo'p endi biza uni boshqarish uchun klaviaturalani ishlatamizaa addEventListener() bilan.

document.addEventListener('keydown', function () {
  //   //keydown bu klaviatura tomonidan har qanday hodisa sodir bo'lsa dgani
  jump();
  son.innerHTML++;
  // count.innerHTML++;
});

// //Endi silaga vazifa:
// //1.Tepa tarafga css da keyframes qilib bulut qo'yasila
// //2.O'yin boshlanishidan oldin "start" btn turadi uni bossam keyn o'yin boshlanishi kere
// //3.Har cactus chiqqanini sanidigon counter qilasila ya'ni increment
// //4. Stiliniyam chiroyliroq qilib qo'yila!!!
// //uyda zerikalla
// //5.Xohlaganla o'zidan nimadur qo'shsa bo'ladi masalan dino egilsin yokida css da
//  rotate bosin yan pasga egilsin aylanib
// //6. Keyin sila shunaqa qilishila kere har 10ta cactus o'tganida 1ml sekund tezlashishi kere
