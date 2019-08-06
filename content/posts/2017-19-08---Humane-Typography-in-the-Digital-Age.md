---
title: wecode 1주차-1 TIL_HTML
date: "2019-07-29T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/wecode_1-1_til_html/"
category: "HTML/CSS"
tags:
  - "wecode"
  - "codingbootcamp"
  - "html"
description: "위코드 1일차 HTML. Hyper Text Markup Language의 줄임말로, 내가 쓰고 있는 방식인 Markdown과는 반대. 나중에 이 부분에 대해서도 한 차례 정리해볼 생각이다!"
---

<!-- - [html 구조 알아보기](#the-first-transition)
- [html 태그의 종류](#the-digital-age)
- [id와 class](#loss-of-humanity-through-transitions) -->

블로그를 도대체 몇 번이나 갈아타는건지..? 네이버 블로거 시절이 젤 편했는데... 보고픈 잇님덜...☆ 
이제 나는 본격 개발하는 사람이니깐 이미 만들어진 플랫폼 말고 내가 직접 수정할 수 있는 이 개츠비 블로그를 이용해 글을 써 나갈 예정이다!

### 위코드 1일차 후기훅이
오늘은 HTML과 CSS 에 대해서 배웠다.
지난번 코드스테이츠에서 공부할 땐 이 부분을 너무 부실하게 가르쳐줘서 HTML, CSS만 보면 너무 고통스러웠는데.. 적절한 설명과 예시들, 그리고 그때그때 바로 코드 쳐서 실습해볼 수 있는 좋은 환경쓰 굿굿!

## HTML(Hyper Text Markup Language)
우리는 HTML을 이용해 웹 페이지 구조를 짤 수 있다.
지금 당장 VScode를 열어서 새파일 만들어서 아무파일명.html을 저장. 그다음 첫줄에 `!`를 치고 Tab을 누르시오.
그렇다면 자동완성된 HTML 양식을 확인할 수 있다~

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
</body>
</html>
```

별로 힘들이지 않고 이렇게 순식간에 완성된 우리의 기본 구조!
저기서 꺽쇠 영어 뭐시기... 써 있는걸 태그라고 하는데
기본적으로 태그와 태그 사이에 내용을 쓰고 끄트머리 꺽쇠를 `/`로 닫아준다.
예를들어... `<h1>안녕 여러분!</h1>` 이런식으로다가 뙇!
(태그는 아래쪽에서 좀 더 자세히 다룰거에요~!)zzzz 

* `<!DOCTYPE>`: 느낌표를 앞에 써놔서 부정을 뜻할것 같지만 html이라고 명시하는 부분
* `<html>`: 브라우저가 인제부터 html 설계도 그려나갈거야~! 라고 명시하는 부분
* `<head>`: 사이트의 제목, 설명, 부가정보,기술정보(모바일인지 아닌지) 등 표시
- `<meta charset="utf-8">`: 한중일어 포함되어 있다면 utf-8이라는 값으로 문자를 인코딩 해준다는 말씀
- `<meta name="viewport" content="width=device-width">`:디바이스 가로길이가 웹페이지 가로길이와 같다는 말씀. 이걸 빼먹는다면 웹페이지가 축소되서 보이니까 꼭 한번씩 까먹고 써보지 맙시다~
* `<title>` : 브라우저에 보이는 탭 이름. 크롬탭에 뭐라고 써있는지 큰소리로 읽어보아요
* `<body>` : 젤 중요한 부분. 여기에 페이지에 보이는 뼈대와 내용을 작성쓰~


## 2. 태그
* `<h1>~<h5>` : header의 줄임말. 머리로 박치기 하는거 말고! `<h1>배고파</h1>` 이런 식으로 h1부터 h5까지 써보시오. h1과 h5 중에 뭐가 더 클까요?? 쳐보세요 ^^ 코드는 실전입니다 크크
* `<span></span>` : 딱 글자 쓴 만큼까지만 공간을 차지하는 애. 이름은 스판이지만, 전혀 스판끼 없는 애임. 쫙쫙 안 늘어나고 딱 그 글자만큼만!
* `<p></p>` : paragraph의 약자... 맞나? 아니면 나중에 수정하겠음. 여튼 문장단위의 공간을 차지하는 애. 위의 `span`과는 달리 줄바꿈 가능쓰~
(span과 p를 구분하려면 CSS를 손보면 되는데.. 배고프고 졸리니까 다음시간에...)
* `<a>` : anchor의 약자. 해적선이 목적지에 도착하면 닻을 내리는 것처럼 얘도 접속하고픈 링크를 찍으면 글로 이동시켜준다! 
`<a href="https://www.w3schools.com/tags/tag_div.asp" target="_blank"></a>`
고대로 가져온 예시..... href는 Hypertext Reference의 줄임말. 예시처럼 링크는 흐르에프는~ 하고 따옴표 안에 링크를 구겨넣어줍시다. 옆에 target엔 `_blank`라고 되어있는데, 저걸 써줘야 새창에 뜹니다.. 마우스 우클릭 새탭으로 열기 안해도 되니까 을매나 좋게요?
* `<div>` : division의 줄임말. 젤 중요한 애! 한 뭉텅이로 묶어주는 태그라고 보시면 됩니다.. 얘를 잘 쪼개고 묶어주는게 html 틀 짜는데 또 굉장히 중요하져!

div에 대해 설명하기 위해 제가 만든 허접한 넷플릭스 화면과 창피한 html 구조를 공유합니다.. 절대 이렇게 따라하지 마씨오.

![메인쓰.PNG](https://images.velog.io/post-images/dooreplay/e74b1070-b268-11e9-a100-45a09e59a09a/메인쓰.PNG)![메인아래쓰.PNG](https://images.velog.io/post-images/dooreplay/e2bd4af0-b268-11e9-a100-45a09e59a09a/메인아래쓰.PNG)

이렇게 보면 약간 그럴듯은 해보이긴 하는데..... 코드를 보면 또르륽......

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" media="screen" href="bar.css">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css">
    <link rel="stylesheet" type="text/css" media="screen" href="prize.css">
    <link rel="stylesheet" type="text/css" media="screen" href="best.css">
    <title>Dooflix</title>
</head>
<body bgcolor="black">
  <div id='entire_wrap'>
      <div id='black_bar'>
          <img id='logo' src='logo.png'>
          <div id='bar_left'>
            <span id='home'>홈</span>
            <span id='tv'>TV프로그램</span>
            <span id='movie'>영화</span>
            <span id='new'>최신등록콘텐츠</span>
            <span id='love'>내가찜한콘텐츠</span>
          </div>
          <div id='bar_right'>
          <img id='glass' src='glass.png'>
          <span id='kids'>키즈</span>
          <img id='dingdong' src='dingdong.png'>
          <img id='profile' src='profile.png'>
          <img id='semo' src='semo.png'>
          </div>
      </div>
      <div id='main_ad'>
          <img id='strange' src='stranger_things.png'>
          <img id='n_series' src='word_n.png'>
          <img id='stranger_title' src='strangers.png'>
          <div id='series'>시리즈</div>
          <div id='english_title'>STRANGER THINGS</div>
          <div id='play_box'></div>
          <div id='contents_box'></div>
          <div onmouseover='play_over()' onmouseout='play_out()' id='play'>▶ 재생</div>
          <div onmouseover='contents_over()' onmouseout='contents_out()' id='contents_loved'>╂ 내가 찜한 콘텐츠</div>
          <div id='story1'>시즌 3, 지금 시청하세요</div>
          <div id='story2'>또다시 기묘한 일들이 일어난다. 정부가 숨기고 있는 비밀,<br>
          정체를 드러내는 그림자, 두려움을 모르는 아이들. 작은<br>
          마을에 어둠이 다가온다. 뒤집힌 세상의 문이 열린다.</div>
          <img id='refresh' src='refreshNew.png'>
          <img id='se15' src='15se.png'>
          <div id='old'></div>
          <div id='old_bar'>┃</div>
      </div>
      <div id=oversea>외국 TV 프로그램</div>
      <div class='container'>
        <div class='row'>
          <img class='poster0' src='home.png'>
          <img class='poster1' src='grace.png'>
          <img class='poster2' src='kimi.png'>
          <img class='poster3' src='redhair.png'>
          <img class='poster4' src='taco.png'>
          <img class='poster5' src='body.png'>
          <img class='poster6' src='gossip.png'>
          <img class='poster7' src='lululu.png'>
        </div>        
      </div>
      <div id=now>지금 뜨는 콘텐츠</div>
      <div class='container'>
        <div class='row'>
          <img class='poster0' src='hanji.png'>
          <img class='poster1' src='bingbang.png'>
          <img class='poster2' src='friends.png'>
          <img class='poster3' src='himym.png'>
          <img class='poster4' src='lucifer.png'>
          <img class='poster5' src='ant.png'>
          <img class='poster6' src='alive.png'>
          <img class='poster7' src='meju.png'>
        </div>
    </div>
<script src="script.js"></script>
</body>
</html>
```

저처럼 div id를 이렇게 남발하면 안됩니다...  젤 바깥쪽 묶는 div만 id로 하고 웬만하면 그 아랫것들(?)은 class로 묶어주세요... 현업에서도 id를 잘 안 쓴다고 하네요!!


## 3. id와 class
html로 구조를 짜면서 똑같은 태그를 여러번 쓰게 될텐데, id나 class 같은 애들을 통해서 이름표를 붙여줘야 헷갈리지 않겠죠~?
* id : 우리가 복제인간이 아닌 이상 신분증은 이 세상에 단 하나밖에 없죠!!! 그런것처럼 id도 무조건 하나만... 만약에 `<div id='hungry'>` 이런식으로 div에 hungry라는 id를 줬으면 그 다음에 div에 또 hungry라는 이름을 붙여줄 수 없음! 그리고 주의사항... id를 너무 남발하면 안 좋다고 하니 젤 바깥쪽 뭉텅이의 div들에게만 아이디를 줍시다... 나머지는 어쩌냐고? 밑에를 보세요!

* class : id와는 달리 이 구역의 융통성 甲 of 甲. 어떤 태그든 같은 class 이름 여러번 쓰기 가능쓰~ 이게 바로 클래쓰의 차이인가!! 예를들어...
`<div class="chicken"></div>`
`<p class="chicken"></p>`
이런식으로 치킨 두번이상 쓰기 가능쓰~ 치느님은 위대해...

* 여러 속성 쓰기 : 걍 예시를 먼저 봅시다
`<div id="profile" class="content-wrap"></div>`
`<img src="./hi.png" alt="내사진" >`
힘들어서 그대로 가져온 예시... 이런것처럼 id와 class를 동시에 쓰기도 가능쓰...
속성 여러개 쓰려면 profile과 class 사이가 멀어진것처럼 띄어쓰기 하나 해주긔



블로그 주인장은 배고프고, 졸립고, 내일도 코딩 달려야해서 이만 잡니다~~ 내일도 열심히 정리해야지!
![KakaoTalk_20190730_005626883.jpg](https://images.velog.io/post-images/dooreplay/7a581430-b219-11e9-a4ce-730fc6b3757a/KakaoTalk20190730005626883.jpg)(선릉 위워크 2호점에는 이렇게 예쁜 네온사인들이 많아서 힙하고 또 힙하다 ㅎ)